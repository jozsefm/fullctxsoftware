import { validateRequest, validateSession } from 'lib/api/general'
import { handleCheckCode } from 'lib/api/teamAuth/checkCodeHandler'
import { handleRequestCode } from 'lib/api/teamAuth/requestCodeHandler'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { getServerFingerprint } from 'lib/server/serverFingerprint'
import withSession from 'lib/server/withSession'

const allowedMethods = ['GET', 'POST']

export default withSession(async (req, res) => {
  let vr
  const { end, id, logger } = validateRequest({ req, allowedMethods, worker: 'TEAM_AUTH'})
  
  if (end) {
    return res.end()
  }
  const serverFingerPrint = getServerFingerprint(req.headers)
  const method = req.method

  logger.config({
    method,
    serverFingerPrint
  })

  if (!allowedMethods.includes(method)) {
    await logger.send({ message: `Wrong method access attempt`, severity: 'ATTACK' })
    return res.end()
  }

  const action = method === 'GET' ? 'request-code' : 'check-code'

  logger.config({
    action
  })

  const rateLimitConfig = {
    shortTermLimit: 5,
    longTermLimit: 10,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'team-auth',
    logger,
    id
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return res.status(400).json({ message: '027 -- Ratelimit exceeded' })

  const sessionId = req.session?.get('session')
  vr = await validateSession(sessionId)
  if (!vr.OK) return res.status(vr.status).json({ message: vr.message})

  const { hash } = vr

  logger.config({
    hash
  })

  if (action === 'request-code') {
    const { status, message } = await handleRequestCode(hash, logger)
    return res.status(status).json({ message })
  }

  if (action === 'check-code') {
    const { status, message } = await handleCheckCode(req, hash, logger)
    return res.status(status).json({ message })
  }
  
  return res.end() // just to make sure it won't hang in some weird and mystical case
})
