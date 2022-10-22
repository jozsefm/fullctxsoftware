import withSession from 'lib/server/withSession'
import { getLogger } from 'lib/server/logger'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { validateToken } from 'lib/api/general'
import { HOUR_IN_MILIS } from 'constants/generic'
import { getUpdateToken } from 'lib/db/getUpdateToken'
import { deleteUpdateToken } from 'lib/db/deleteUpdateToken'
import { updateUser } from 'lib/db/updateUser'
import { getServerFingerprint } from 'lib/server/serverFingerprint'

const allowedMethods = ['GET']

export default withSession(async (req, res) => {
  let vr // validation result
  let result // of DB calls
  const updateToken = req.query?.updateToken
  const emailToken = req.query?.token

  const serverFingerPrint = getServerFingerprint(req.headers)
  const method = req.method
  const logger = getLogger({ worker: 'EMAIL_UPDATE', action: 'set-new-email', serverFingerPrint })

  if (!allowedMethods.includes(method)) {
    await logger.send({ message: `Wrong method access attempt: ${method}`, severity: 'ATTACK' })
    return res.end()
  }

  const rateLimitConfig = {
    shortTermLimit: 30,
    longTermLimit: 600,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'update-email',
    logger,
    id: serverFingerPrint
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) res.redirect(`../../error/update-email-limit-exceeded`)

  vr = validateToken(updateToken, logger)
  if (!vr.OK) {
    return res.redirect('../../error/update-emai')
  }

  logger.config({
    updateToken
  })

  vr = validateToken(emailToken, logger)
  if (!vr.OK) {
    return res.redirect('../../error/update-emai')
  }

  if (emailToken !== process.env.EMAIL_TOKEN) {
    await logger.send({ message: `Confirm email update attempt with wrong emailToken`, severity: 'ATTACK'})
    return res.redirect('../../error/update-emai')
  }

  result = await getUpdateToken({ token: updateToken })

  if (result.error) {
    return res.redirect('../../error/update-emai')
  }
  
  if (!result.update) {
    await logger.send({ message: 'The used token is not found', severity: 'ATTACK' })
    return res.redirect('../../error/token-not-found-or-already-used')
  }

  const { update } = result

  const { new: newEmail } = update

  const createdAt = update['created_at']
  if (createdAt) {
    const then = new Date(createdAt).getTime()
    const now = Date.now()
    if ((now - then) > HOUR_IN_MILIS) {
      const { error } = await deleteUpdateToken({ token: updateToken })

      if (error) {
        return res.redirect('../../error/update-emai')
      }

      return res.redirect(`../../error/update-email-expired`)
    }
  } else {
    await logger.send({ message: 'No created_at date stored', severity: 'ERROR' })
    return res.redirect('../../error/update-emai')
  }

  result = await updateUser({ token: updateToken, update: { updateToken: null, email: newEmail } })
  
  if (result.error) {
    return res.redirect('../../error/email-already-registered')
  }

  // At this point it doesn't make sense to fail the process even if we couldn't delete the reset token so no try-catch
  await deleteUpdateToken({ token: updateToken })

  await logger.send({ message: `Success` })
  
  return res.redirect(`../../account?action=updated-email`) //TODO give some feedback

})