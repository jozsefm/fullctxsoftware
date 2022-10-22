import { handleNewsletterConfirmRequest } from 'lib/api/newsletter/handleNewsletterConfirmRequest'
import { handleNewsletterSubscribeRequest } from 'lib/api/newsletter/handleNewsletterSubscribeRequest'
import { handleNewsletterUnsubscribeRequest } from 'lib/api/newsletter/handleNewsletterUnsubscribeRequest'
import isAuthorized from 'lib/server/devAuthorizer'
import { getLogger } from 'lib/server/logger'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { getServerFingerprint } from 'lib/server/serverFingerprint'

const actionTypes = ['subscribe', 'confirmSubscribe', 'unsubscribe']
const allowedMethods = ['POST']

export default async (req, res) => {
  const action = req.query?.action as string // It can be a string[] as well per official type declaration
  const sessionId = req.cookies['fcd-session-id']
  const deviceId = req.cookies['fcd-device-id'] || ''
  const logger = getLogger({ worker: 'NEWSLETTER', sessionId })
  const rateLimitConfig = {
    shortTermLimit: 4,
    longTermLimit: 7,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    logger
  }

  if (!isAuthorized(req)) {
    await logger.send({ message: `Unauthorized access attempt`, severity: 'WARNING' })
    return res.end()
  }

  if (!allowedMethods.includes(req.method)) {
    await logger.send({message: `Wrong method access attempt: ${req.method}`, severity: 'ATTACK' })
    return res.end()
  }

  if (!action) {
    await logger.send({message: `Access attempt without action`, severity: 'ATTACK' })
    return res.end()
  }

  if (!actionTypes.includes(action)) {
    await logger.send({ message: `Bad request - wrong action: ${action.slice(0, 30)}`, severity: 'ATTACK' })
    return res.status(400).json({message: 'Wrong action'})
  }

  logger.config({action})

  const serverFingerPrint = getServerFingerprint(req.headers)

  // Handle these actions before sessionId and deviceId checks as they might come from new devices
  // never logged in from the website

  if (action === 'confirmSubscribe') {
    const { allow } = await checkRateLimit({
      id: serverFingerPrint,
      type: 'confirmSubscribe',
      ...rateLimitConfig
    })
  
    if (!allow) {
      return res.status(400).json({ message: '027 -- Ratelimit exceeded' })
    }
    
    const { status, message } = await handleNewsletterConfirmRequest(req, logger)
    return res.status(status).json({ message })
  }

  if (action === 'unsubscribe') {
    const { allow } = await checkRateLimit({
      id: serverFingerPrint,
      type: 'unsubscribe',
      ...rateLimitConfig
    })
  
    if (!allow) {
      return res.status(400).json({ message: '027 -- Ratelimit exceeded' })
    }
    const { status, message } = await handleNewsletterUnsubscribeRequest(req, logger)
    return res.status(status).json({ message })
  }

  if (!sessionId) {
    await logger.send({ message: `Access attempt without sessionId`, severity: 'ATTACK' })
    return res.end()
  }

  if (!deviceId) {
    await logger.send({ message: `Access attempt without deviceId`, severity: 'ATTACK' })
    return res.end()
  }

  const id = deviceId + serverFingerPrint

  if (action === 'subscribe') {
    const { allow } = await checkRateLimit({
      id,
      type: 'subscribe',
      ...rateLimitConfig
    })
  
    if (!allow) {
      return res.status(400).json({ message: '027 -- Ratelimit exceeded' })
    }
    
    const { status, message } = await handleNewsletterSubscribeRequest(req, logger)
    return res.status(status).json({ message })
  }

  return res.end() // just to make sure it won't hang in some weird and mystical case
}
