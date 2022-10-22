import { confirmNewsletterSubscription } from 'lib/db/confirmNewsletterSubscription'
import { validateRequestData, validateToken } from '../general'

export const handleNewsletterConfirmRequest = async (req, logger) => {
  let vr //validation result
  
  vr = validateRequestData(req, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }
  
  const { data } = vr
  const { confirmToken, token } = data

  vr = validateToken(confirmToken, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  vr = validateToken(token, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  if (token !== process.env.EMAIL_TOKEN) {
    await logger.send({ message: `Confirm email with incorrect EMAIL_TOKEN`, severity: 'ATTACK'})
    return { status: 400, message: '086 -- Invalid token' }
  }

  logger.config({
    confirmToken
  })

  const { subscription, error } = await confirmNewsletterSubscription({ confirmToken })

  if (error) {
    return !subscription ? { status: 400, message: '087 -- Error' }: { status: 500, message: '084 -- Database error' } // 1st: invalid token, 2nd: DB error
  }

  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK' }  
}