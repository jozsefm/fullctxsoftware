import { validateRequest } from 'lib/api/general'
import { deleteSession } from 'lib/db/deleteSession'
import { checkRateLimit } from 'lib/server/rateLimiter'
import withSession from 'lib/server/withSession'

const allowedMethods = ['POST']

export default withSession(async (req, res) => {
  const { end, id, logger } = validateRequest({ req, allowedMethods, worker: 'LOGOUT'})
  
  if (end) {
    return res.end()
  }

  logger.config({ action: 'logout' })

  const rateLimitConfig = {
    shortTermLimit: 50,
    longTermLimit: 300,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'logout',
    logger,
    id
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return res.end()

  const sessionId = req.session?.get('session')
    
  if (!sessionId) {
    await logger.send({ message: `Attempt to log out without session data`, severity: 'WARNING' })
    return res.status(200).json({ message: 'logout' })
  }
    
  await deleteSession({ sessionId })
  try {
    req.session.destroy()
  } catch (error) {
    await logger.send({ message: `Failed to destroy iron-session`, severity: 'FATAL', error })
    return res.status(500).json({ message: 'NOK' })
  }
  await logger.send({ message: 'Success' })
  return res.status(200).json({ message: 'logout' })

})
