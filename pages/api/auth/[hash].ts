import { validateHash } from 'lib/api/general'
import { authHandler } from 'lib/api/auth'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { getServerFingerprint } from 'lib/server/serverFingerprint'
import { getLogger } from 'lib/server/logger'
import withSession from 'lib/server/withSession'

const allowedMethods = ['GET', 'POST']

export default withSession(async (req, res) => {
  let vr

  const serverFingerPrint = getServerFingerprint(req.headers)
  const method = req.method
  const logger = getLogger({ worker: 'AUTH', action: 'login', serverFingerPrint })

  if (!allowedMethods.includes(method)) {
    await logger.send({ message: `Wrong method access attempt: ${method}`, severity: 'ATTACK' })
    return res.end()
  }

  logger.config({
    method
  })

  if (method === 'POST') {
    const sessionId = req.cookies['fcd-session-id']
    const deviceId = req.cookies['fcd-device-id']
    if (!sessionId) {
      await logger.send({ message: `Access attempt without sessionId`, severity: 'ATTACK' })
      return res.end()
    }
  
    if (!deviceId) {
      await logger.send({ message: `Access attempt without deviceId`, severity: 'ATTACK' })
      return res.end()
    }

    logger.config ({ sessionId, deviceId })
  }

  vr = validateHash(req, logger)
  if (!vr.OK) {
    if (method === 'GET') {
      return res.redirect('../../invalid')
    } else if (method === 'POST') {
      return res.status(vr.status).json({ message: vr.message})
    }
  }
  
  const { hash } = vr
  
  logger.config({
    hash
  })
  
  const rateLimitConfig = {
    shortTermLimit: 30,
    longTermLimit: 100,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'auth',
    logger,
    id: serverFingerPrint
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return res.end()

  const { OK, id, status, message } = await authHandler(hash, logger)
  if (!OK) {
    if (method === 'GET') {
      return res.redirect('../../limit')
    }
    return res.status(status).json({ message })
  } else {
    try {
      req.session.set('session', id)
      await req.session.save()
    } catch (error) {
      return res.status(500).json({ message: '100 -- Failed to log in' })
    }
    await logger.send({ message: 'Success'})
    if (method === 'GET') {
      return res.redirect('../../home?action=validate')
    }
    return res.status(200).json({ message: 'OK' })
  }
})
