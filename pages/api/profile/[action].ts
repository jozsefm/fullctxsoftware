import withSession from 'lib/server/withSession'
import { validateAction, validateRequest } from 'lib/api/general'
import { handleUpdateUserNameRequest } from 'lib/api/profile/handleUpdateUserNameRequest'
import { handleUpdateEmailRequest } from 'lib/api/profile/handleUpdateEmailRequest'
import { handleDeleteProfileRequest } from 'lib/api/profile/handleDeleteProfileRequest'
import { handleCancelEmailChangeRequest } from 'lib/api/profile/handleCancelEmailChangeRequest'
import { checkRateLimit } from 'lib/server/rateLimiter'

const actionTypes = ['update-name', 'update-email', 'delete-account', 'cancel-email']
const allowedMethods = ['POST']

export default withSession(async (req, res) => {
  let vr // validation result
  vr = validateRequest({ req, allowedMethods, worker: 'PROFILE' })

  if (vr.end) {
    return res.end()
  }

  const { id, logger } = vr

  vr = validateAction(req, actionTypes, logger)
  
  if (vr.end) {
    return res.end()
  }

  const { action } = vr

  const rateLimitConfig = {
    shortTermLimit: 10,
    longTermLimit: 20,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'profile',
    logger,
    id
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return res.end()

  if (action === 'update-name') {
    const { status, message } = await handleUpdateUserNameRequest(req, logger)
    return res.status(status).json({ message })
  }

  if (action === 'update-email') {
    const { status, message } = await handleUpdateEmailRequest(req, logger)
    return res.status(status).json({ message })
  }

  if (action === 'delete-account') {
    const { status, message } = await handleDeleteProfileRequest(req, logger)
    return res.status(status).json({ message })
  }

  if (action === 'cancel-email') {
    const { status, message } = await handleCancelEmailChangeRequest(req, logger)
    return res.status(status).json({ message })
  }

  return res.end() // just to make sure it won't hang in some weird and mystical case
})