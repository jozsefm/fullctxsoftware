import { getUser } from 'lib/db/getUser'
import { storeResetToken } from 'lib/db/storeResetToken'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { getEmailActionData, sendResetHash } from 'lib/server/sendEmail'
import { validateEmail } from '../general'

export const resetHandler = async (id, data, logger) => {
  let vr //validation result

  const rateLimitConfig = {
    shortTermLimit: 2,
    longTermLimit: 6,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'resetRequest',
    logger,
    id
  }

  const { email } = data

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return { status: 400, message: '027 -- Ratelimit exceeded' }

  vr = validateEmail(email, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  logger.config({
    email
  })

  const { user, error } = await getUser({email})

  if (error) {
    return { status: 500, message: '095 -- Database error at reset.' }
  }

  // no need to care - probably track somehow as it might be an attack indicator.
  if (!user) {
    await logger.send({ message: 'Reset request for non-existent user', severity: 'ATTACK', email })
    return { status: 200, message: 'OK' }
  }

  const { name } = user

  const { id: token, link } = getEmailActionData('reset')

  {
    const { error } = await storeResetToken({ token, email })
    
    if (error) {
      return { status: 500, message: '095 -- Database error at reset.' }
    }
  }

  try {
    await sendResetHash(email, name, link)
  } catch (error) {
    await logger.send({ message: 'Failed to deliver reset notification email', error })
    return { status: 500, message: '095 -- Message error at reset.' }
  }

  await logger.send({ message: 'Success - delivered access link reset', token, email })
  return { status: 200, message: 'OK' }
}