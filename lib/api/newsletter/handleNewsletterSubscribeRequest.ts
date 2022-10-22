import { newsletterSignup } from 'lib/db/subscribeToNewsletter'
import { deleteNewsletterSubscription } from 'lib/db/deleteNewsletterSubscription'
import { getEmailActionData, sendNewsletterSignupConfirmation } from 'lib/server/sendEmail'
import {validateEmail, validateRequestData } from '../general'

export const handleNewsletterSubscribeRequest = async (req, logger) => {
  let vr //validation result
  
  vr = validateRequestData(req, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }
  
  const { data } = vr
  const { email } = data

  vr = validateEmail(email, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  logger.config({
    email
  })

  const { error, confirmToken, unsubToken } = await newsletterSignup({email})

  if (error) {
    await logger.send({ message: `Tried to sign up with a registered address`, })
    return { status: 200, message: 'OK' } // To not enable them to know if an email is alread signed up or not
  }

  const { link: clink } = getEmailActionData('confirmSubscribe', confirmToken)
  const { link: ulink } = getEmailActionData('unsubscribe', unsubToken)
  try {
    await sendNewsletterSignupConfirmation(email, clink, ulink)
  } catch (error) {
    const { error: dbError } = await deleteNewsletterSubscription({ email })

    if (dbError) {
      await logger.send({ message: `Failed to roll back newsletter subscriber from DB after failed confirm deliver`, error: dbError, db: 'supabase', severity: 'FATAL' })
      return { status: 500, message: '085 -- Failed email delivery' }
    }

    await logger.send({ message: `Failed confirm email delivery`, error })
    return { status: 500, message: '085 -- Failed email delivery' }
  }
  
  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK' }  
}