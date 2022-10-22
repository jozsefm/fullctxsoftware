import { validateRequest } from 'lib/api/general'
import { getSession } from 'lib/db/getSession'
import { checkRateLimit } from 'lib/server/rateLimiter'
import withSession from 'lib/server/withSession'

const allowedMethods = ['POST']

export default withSession(async (req, res) => {
  // we skip logging because every bot crawls would gneerate a log otherwise, they don't have the required cookies.
  const { end, id, logger } = validateRequest({ req, allowedMethods, worker: 'HEARTBEAT', skipLog: true})
  
  if (end) {
    return res.end()
  }
  
  const rateLimitConfig = {
    shortTermLimit: 8,
    longTermLimit: 40,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'heartbeat',
    logger,
    id
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return res.end()
  
  const sessionId = req.session?.get('session')
  if (!sessionId) {
    return res.status(200).json({ loggedIn: false })
  }

  const { hash, error } = await getSession({ sessionId })
  if (error) {
    await logger.send({ message: 'Problem querying new session', db: 'supabase', error})
    return res.status(500).json({ message: '014 -- Database error while heartbeat.' })
  }

  if (!hash) {
    try {
      req.session.destroy()
    } catch (error) {
      await logger.send({ message: `Failed to destroy iron-session`, severity: 'FATAL', error })
    }
  }
  
  return res.status(200).json({ loggedIn: Boolean(hash) })
})
