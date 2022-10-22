import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'
import { getLogger } from 'lib/server/logger'
import isAuthorized from 'lib/server/devAuthorizer'
import br from 'lib/server/badRequest'
import { qa } from 'constants/QandA'
import { normalize } from 'lib/normalizeString'
import { checkRateLimit } from 'lib/server/rateLimiter'
import { getServerFingerprint } from 'lib/server/serverFingerprint'

const allowedRequestTypes = ['GET', 'POST']
const actionTypes = ['RESET']


export default async function (req: NextApiRequest & { session?: Session }, res: NextApiResponse) {
  const sessionId = req.cookies['fcd-session-id']
  const deviceId = req.cookies['fcd-device-id'] || ''
  const logger = getLogger({ worker: 'CAPTCHA', sessionId })
  const rateLimitConfig = {
    shortTermLimit: 30,
    longTermLimit: 60,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    logger
  }
  
  if (!sessionId) {
    await logger.send({ message: `Access attempt without sessionId`, severity: 'ATTACK' })
    return { end: true }
  }

  if (!deviceId) {
    await logger.send({ message: `Access attempt without deviceId`, severity: 'ATTACK' })
    return res.end()
  }
  
  if (!allowedRequestTypes.includes(req.method)) {
    await logger.send({ message: `Wrong method access attempt: ${req.method}`, severity: 'ATTACK' })
    return res.end()
  }

  if (!isAuthorized(req)) {
    await logger.send({ message: 'Unauthorized access attempt', severity: 'ATTACK' })
    return res.end()
  }

  const serverFingerPrint = getServerFingerprint(req.headers)
  const id = deviceId + serverFingerPrint

  logger.config({ action: 'check-answer', serverFingerPrint })

  const { allow } = await checkRateLimit({
    id,
    type: 'captcha',
    ...rateLimitConfig
  })

  if (!allow) {
    return res.status(400).json({ message: '027 -- Ratelimit exceeded' })
  }

  if (req.method === 'GET') {
    const number = Math.floor(Math.random() * qa.length)
    return res.status(200).json({
      number,
      question: qa[number][0],
      link: qa[number][1],
      tip: qa[number][2]
    })
  } else {
    try {
      const { number, answer, action, data }: {
        number: number; answer: string; action: string; data?: {
          email: string;
      } } = JSON.parse(req.body)
  
      if (typeof action !== 'undefined' && !actionTypes.includes(action)) {
        await logger.send({ message: 'Bad request - wrong action', severity: 'ATTACK' })
        return res.status(400).json({ message: '015 -- Stop right there criminal scum!' })
      }

      logger.config({action})

      if (typeof number === 'undefined' || typeof answer === 'undefined') {
        await logger.send({ message: 'Bad request - missing parameters', severity: 'ATTACK' })
        return res.status(400).json({ message: '015 -- Stop right there criminal scum!' })
      }

      if (typeof action !== 'undefined' && typeof data === 'undefined') {
        await logger.send({ message: 'Bad request - missing action data', severity: 'ATTACK' })
        return res.status(400).json({ message: '015 -- Stop right there criminal scum!' })
      }

      if (typeof number !== 'undefined' && (number < 0 || number >= qa.length)) {
        await logger.send({ message: 'Bad request - out of bounds question number', severity: 'ATTACK' })
        return res.status(400).json({ message: '015 -- Stop right there criminal scum!' })
      }

      if (answer.length > 30) {
        await logger.send({ message: `Bad request - out of bounds answer length. Fist 30 characters: ${answer.slice(0, 30)}`, severity: 'ATTACK' })
        return res.status(400).json({ message: '015 -- Stop right there criminal scum!' })
      }

      if (answer !== normalize(answer)) {
        await logger.send({ message: `Answer sent was not normalized - likely a bot or attacker`, severity: 'ATTACK' })
        return res.status(403).json({ message: '015 -- Stop right there criminal scum!' })
      }

      const question = qa[number]

      if (question && question[3].includes(answer)) {
        logger.send({ message: `Correct answer ` })

        if (action === 'RESET') {
          try {
            const options: any = {
              method: 'POST',
              body: JSON.stringify({
                ...data
              }),
              headers: {
                'Cookie': `fcd-session-id=${sessionId}; fcd-device-id=${deviceId};`
              },
              credentials: 'include'
            }
        
            if (process.env.NEXT_PUBLIC_DEV !== 'false') {
              options.headers['x-dev-authorized'] = process.env.NEXT_PUBLIC_DEV_API_KEY
            }
        
            const result = await fetch(`https://www.fullcontextdevelopment.com/api/account/reset`, options) // TODO refactor to simply use as a function here instead of API call
            const { message } = await result.json()
            return res.status(result.status).json({ result: 'CORRECT', message })
          } catch (error) {
            await logger.send({ message: `Error calling the Account API.`, error })
            return res.status(500).json({ result: 'CORRECT', message: `008 -- ${error.message}` })
          }
        } else {
          await logger.send({ message: `Correct answer was sent with an unknown action` })
          return res.status(400).json({ message: br('009', 'Unknown action') })
        }
      } else {
        await logger.send({ message: `Wrong answer for question: ${number} as: ${answer}` })
        return res.status(200).json({ result: 'WRONG' })
      }
    } catch (error) {
      await logger.send({ message: `Failed to parse req JSON for answer check`, error })
      return res.status(500).json({ message: `010 -- ${error.message}` })
    }
  }
  return res.end() // just to make sure it won't hang in some weird and mystical case
}