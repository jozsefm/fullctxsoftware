import { NextApiRequest, NextApiResponse } from 'next'
import { isEmailBurner } from 'burner-email-providers'
import { isValidByProEmailValidator } from 'lib/emailValidator'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { getUser } from 'lib/db/getUser'
import { validateAction, validateRequest, validateRequestData } from 'lib/api/general'
import { signupHandler } from 'lib/api/account/signupHandler'
import { resetHandler } from 'lib/api/account/resetHandler'

const actionTypes = ['signup', 'reset', 'check']
const allowedMethods = ['POST']

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let vr //validation results

  const { end, id, logger } = validateRequest({ req, allowedMethods, worker: 'ACCOUNT'})
  
  if (end) {
    return res.end()
  }

  vr = validateAction(req, actionTypes, logger)
  if (!vr.OK) {
    const { end, status, message } = vr
    if (end) {
      return res.end()
    }
    return res.status(status).json({ message })
  }

  const { action } = vr

  vr = validateRequestData(req, logger)
  if (!vr.OK) {
    const { status, message } = vr
    return res.status(status).json({message})
  }

  const { data } = vr

  if (action === 'signup') {

    const { status, message, hash } = await signupHandler(id, data, logger)
    const payload = { message }
    if (hash) {
      payload['hash'] = hash
    }
    return res.status(status).json(payload)

  } else if (action === 'check') {
    const rateLimitConfig = {
      shortTermLimit: 15,
      longTermLimit: 20,
      shortTermTTL: 60,
      longTermTTL: 24 * 60 * 60,
      logger
    }

    const { email } = data
    const { allow } = await checkRateLimit({
      id,
      type: 'check',
      ...rateLimitConfig
    })
    
    const errors = {}
    if (!allow) {
      errors['limited'] = true
      return res.status(400).json({message: `082 -- ${JSON.stringify(errors)}`})
    }

    if (!email) {
      await logger.send({ message: `Bad request - missing email`, severity: 'ATTACK' })
      return res.status(403).json({message: '015 -- Stop right there criminal scum!'})
    }
    
    if (!email.length || email.length > 100) {
      await logger.send({ message: `Bad request - out of bounds email length. Length: ${email.length}. First 30 chars attached.`, email: `${email.slice(0, 30)}`, severity: 'ATTACK' })
      return res.status(403).json({message: '015 -- Stop right there criminal scum!'})
    }
    
    if (!isValidByProEmailValidator(email)) {
      await logger.send({ message: `Invalid email address was used to check sign up data`, email, severity: 'ATTACK' })
      return res.status(403).json({message: '015 -- Stop right there criminal scum!'})
    }
    
    if (isEmailBurner(email)) {
      errors['burner'] = true
    }

    logger.config({
      email: email
    })
    
    const { user, error } = await getUser({email})
  
    if (error) {
      return res.status(500).json({message: '014 -- Database error at signup.'})
    }
    if (user) {
      errors['email'] = true
    }

    const noIssues = !Object.keys(errors).length
    return res.status(noIssues ? 200 : 400).json({message: `${noIssues ? '' : '082 -- ' + JSON.stringify(errors)}`})
  } else if (action === 'reset') {
    const { status, message } = await resetHandler(id, data, logger)
    return res.status(status).json({message})
  }

  return res.end() // just to make sure it won't hang in some weird and mystical case
}