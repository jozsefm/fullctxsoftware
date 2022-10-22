import { validateRequestData, validateEmail, validateSession } from '../general'
import { getEmailActionData, sendUpdateEmailConfirmation } from 'lib/server/sendEmail'
import { createNewEmail } from 'lib/db/createNewEmail'
import { getUser } from 'lib/db/getUser'
import { deleteNewEmail } from 'lib/db/deleteNewEmail'

export const handleUpdateEmailRequest = async (req, logger): Promise<any> => {
  let vr, result //validation result
  const sessionId = req.session?.get('session')
  vr = await validateSession(sessionId)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { hash } = vr

  logger.config({
    hash
  })

  vr = validateRequestData(req, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { data } = vr
  const email = data.email

  vr = validateEmail(email, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  result = await getUser({ hash, info: true })

  if (result.error) {
    return { status: 500, message: '079 -- Database error' }
  }

  const { user } = result

  const { id: token, link } = getEmailActionData('update-email')

  const { error } = await createNewEmail({ hash, email, token })
  if (error) {
    return { status: 500, message: '079 -- Database error' }
  }

  try {
    await sendUpdateEmailConfirmation(email, user.name, link)
  } catch (error) {
    logger.send({ message: `Failed to deliver the confirmation email`, error })

    // Try to roll back every change -- errors are logged inside
    await deleteNewEmail({ hash, token })

    return { status: 500, message: `080 -- Delivery failed` }
  }

  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK'}
}