import { checkRateLimit } from 'lib/server/rateLimiter'
import { getServerFingerprint } from 'lib/server/serverFingerprint'
import { getLogger } from 'lib/server/logger'
import withSession from 'lib/server/withSession'
import { validateToken } from 'lib/api/general'
import { getUpdateToken } from 'lib/db/getUpdateToken'
import { getUser } from 'lib/db/getUser'
import { updateHash } from 'lib/db/updateHash'
import { deleteSessions } from 'lib/db/deleteSessions'
import { sendNewHash } from 'lib/server/sendEmail'
import { deleteUpdateToken } from 'lib/db/deleteUpdateToken'
import { HOUR_IN_MILIS } from 'constants/generic'

const allowedMethods = ['GET']

export default withSession(async (req, res) => {
  const logger = getLogger({ worker: 'RESET' })
  const serverFingerPrint = getServerFingerprint(req.headers)
  const method = req.method

  logger.config({ serverFingerPrint })

  if (!allowedMethods.includes(method)) {
    await logger.send({ message: `Wrong method access attempt: ${method}`, serverFingerPrint, severity: 'ATTACK' })
    return res.end()
  }

  const rateLimitConfig = {
    shortTermLimit: 30,
    longTermLimit: 600,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'reset',
    logger,
    id: serverFingerPrint
  }


  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return res.redirect('../../access-link?state=error')

  const id = req.query?.id
  const emailToken = req.query?.token

  if (emailToken !== process.env.EMAIL_TOKEN) {
    await logger.send({ message: 'Invalid email-token used, first 36 chars recorded.', token: emailToken?.slice?.(0, 36), severity: 'ATTACK' })
    return res.redirect('../../access-link?state=error')
  }

  let vr = validateToken(id, logger)
  if (!vr.OK) {
    return res.redirect('../../access-link?state=error')
  }

  logger.config({ token: id })

  const { update, error: rtError } = await getUpdateToken({ token: id })

  if (rtError) {
    return res.redirect('../../access-link?state=error')
  }

  if (!update) {
    await logger.send({ message: 'The used token is not found', severity: 'ATTACK' })
    return res.redirect('../../access-link?state=error')
  }

  const createdAt = update['created_at']
  if (createdAt) {
    const then = new Date(createdAt).getTime()
    const now = Date.now()
    if ((now - then) > HOUR_IN_MILIS) {
      const { error } = await deleteUpdateToken({ token: id })

      if (error) {
        return res.redirect('../../access-link?state=error')
      }

      return res.redirect('../../access-link?state=expired')
    }
  } else {
    await logger.send({ message: 'No created_at date stored', severity: 'ERROR' })
    return res.redirect('../../access-link?state=error')
  }

  const email = update.current

  const { user, error: getError } = await getUser({ email })
  const { hash, name } = user

  if (getError) {
    return res.redirect('../../access-link?state=error')
  }

  const { error: deleteError } = await deleteSessions({ hash })

  if (deleteError) {
    return res.redirect('../../access-link?state=error')
  }

  const { error: updateError, newHash } = await updateHash({ hash })

  if (updateError) {
    return res.redirect('../../access-link?state=error')
  }

  try {
    await sendNewHash(email, newHash, name)

  } catch (error) {
    await logger.send({ message: 'Failed to deliver reset email', error })
    return res.redirect('../../access-link?state=error')
  }

  // At this point it doesn't make sense to fail the process even if we couldn't delete the reset token so no try-catch
  await deleteUpdateToken({ token: id })

  const buff = Buffer.from(newHash, 'utf-8')
  const base64Hash = buff.toString('base64')
  const urlSafeHash = encodeURIComponent(base64Hash)

  return res.redirect(`../../access-link?state=success&hash=${urlSafeHash}`)
})
