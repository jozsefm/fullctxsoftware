import { checkRateLimit } from 'lib/server/rateLimiter'
import { handleAnswerFeedbackRequest, handleMessageFeedbackRequest, handleRatingFeedbackRequest } from 'lib/api/feedback'
import withSession from 'lib/server/withSession'
import { validateAction, validateRequest } from 'lib/api/general'

const actionTypes = ['rating', 'answer', 'message']
const allowedMethods = ['POST']

export default withSession(async (req, res) => {
  let vr // validation result
  vr = validateRequest({ req, allowedMethods, worker: 'FEEDBACK' })

  if (vr.end) {
    return res.end()
  }

  const { id, logger } = vr

  vr = validateAction(req, actionTypes, logger)
  
  if (vr.end) {
    return res.end()
  }

  const { action } = vr
  const dbSession = req.session?.get('session')
  const userType = dbSession ? 'registered' : 'anonim'

  logger.config({ action, userType })

  const rateLimitConfig = {
    shortTermLimit: 10,
    longTermLimit: 50,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    logger
  }

  const { allow } = await checkRateLimit({
    id,
    type: 'feedback',
    ...rateLimitConfig
  })

  if (!allow) {
    return res.status(400).json({ message: '027 -- Ratelimit exceeded' })
  }
  
  if (action === 'rating') {
    const { error } = await handleRatingFeedbackRequest(req, logger)
    return res.status(error ? 500 : 200).end()
  }

  if (action === 'answer') {
    const { error } = await handleAnswerFeedbackRequest(req, logger)
    return res.status(error ? 500 : 200).end()
  }

  if (action === 'message') {
    const { error } = await handleMessageFeedbackRequest(req, logger)
    return res.status(error ? 500 : 200).end()
  }

  return res.end() // just to make sure it won't hang in some weird and mystical case
})