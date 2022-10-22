import { deleteNewsletterSubscription } from 'lib/db/deleteNewsletterSubscription'
import { validateRequestData, validateToken } from '../general'

export const handleNewsletterUnsubscribeRequest = async (req, logger) => {
  let vr //validation result
  
  vr = validateRequestData(req, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }
  
  const { data } = vr
  const { unsubToken, token } = data

  vr = validateToken(unsubToken, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  vr = validateToken(token, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  if (token !== process.env.EMAIL_TOKEN) {
    return { status: 400, message: '086 -- Invalid token' }
  }

  logger.config({
    unsubToken
  })

  const { subscription, error } = await deleteNewsletterSubscription({ unsubToken })

  logger.config({
    subscription
  })

  if (error) {
    await logger.send({ message: `Failed to unsubscribe from the newsletter`, error, db: 'supabase' })
    return !subscription ? { status: 400, message: '087 -- Error' }: { status: 500, message: '085 -- Database error' } // 1st: invalid token, 2nd: DB error
  }
  
  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK' }
}