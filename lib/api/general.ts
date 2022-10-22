import isAuthorized from 'lib/server/devAuthorizer'
import { isValidByProEmailValidator } from 'lib/emailValidator'
import { getLogger } from 'lib/server/logger'
import { isEmailBurner } from 'burner-email-providers'
import { pageIds } from 'constants/pageIds'
import { getServerFingerprint } from 'lib/server/serverFingerprint'
import { getSession } from 'lib/db/getSession'

export const validateSession = async (sessionId) => {
  const { hash } = await getSession({ sessionId })
  if (!hash) {
    return { status: 400, message: '032 -- Invalid session data' }
  }

  return { OK: true, hash }
}

export const validateHash = (req, logger) => {
  let hash
  if (req.method === 'GET') {
    hash = req.query?.hash as string // It can be a string[] as well per official type declaration
  } else if (req.method === 'POST') {
    const vr = validateRequestData(req, logger)
    if (!vr.OK) return { status: vr.status, message: vr.message }
    hash = vr.data.hash
  }
  if (!hash || typeof hash !== 'string' || hash.length !== 64) {
    logger.send({ message: 'Bad request - Invalid hash used', severity: 'ATTACK', hash: hash?.substring?.(0, 100) })
    return { status: 400, message: '094 -- Wrong request' }
  }

  return { OK: true, hash }
}

export const validateRequestData = (req, logger) => {
  let data
  try {
    data = JSON.parse(req.body)
  } catch (error) {
    logger.send({ message: 'Bad request - malformed request data', error, severity: 'ATTACK' })
    return { status: 400, message: `045 -- Invalid request data` }
  }

  if (!data) {
    logger.send({ message: `Bad request - missing the data parameter`, severity: 'ATTACK' })
    return { status: 400, message: `003 -- Missing parameters` }
  }
  
  return { OK: true, data }
}

export const validateName = (name, logger) => {
  if (!name || typeof name !== 'string' || !name.length || name.length > 100) {
    logger.send({ message: `Bad request - invalid name - likely a bot or attacker`, severity: 'ATTACK' })
    return { status: 400, message: '037 -- Wrong request'}
  }

  return { OK: true }
}

export const validateEmail = (email, logger) => {
  if (typeof email !== 'string') {
    logger.send({ message: `Wrong type of email param: ${typeof email}`, severity: 'ATTACK' })
    return { status: 403, message: '019 -- Stop right there criminal scum!' }
  }

  if (!email.length || email.length > 100) {
    logger.send({ message: `Out of bounds email length. Length: ${email.length}. First 30 chars: ${email.slice(0, 30)}`, severity: 'ATTACK' })
    return { status: 403, message: '019 -- Stop right there criminal scum!' }
  }
  
  if (!isValidByProEmailValidator(email)) {
    logger.send({ message: `Invalid email address was used: ${email}`, severity: 'ATTACK' })
    return { status: 403, message: '015 -- Stop right there criminal scum!' }
  }
  
  if (isEmailBurner(email)) {
    logger.send({ message: `One time email address was used: ${email}`, severity: 'WARNING' })
    return { status: 400, message: '016 -- Burner email address detected' }
  }

  return { OK: true }
}

export const validateToken = (token, logger) => {
  if (typeof token !== 'string') {
    logger.send({ message: `Wrong type of token param: ${typeof token}`, severity: 'ATTACK' })
    return { status: 400, message: '086 -- Invalid token' }
  }

  if (!token.length || token.length > 36) {
    logger.send({ message: `Attempt with invalid inviteToken. First 36 characters: ${token.slice(0, 36)}`, severity: 'ATTACK'})
    return { status: 400, message: '086 -- Invalid token' }
  }

  return { OK: true }
}

export const validateQuestion = (question, logger) => {
  if (typeof question !== 'number') {
    logger.send({ message: `Wrong type of question param: ${typeof question}`, severity: 'ATTACK' })
    return {}
  }

  if (question !== 1) {
    logger.send({ message: `Attempt with invalid question number.`, severity: 'ATTACK'})
    return {}
  }

  return { OK: true }
}

export const validateMessage = (message, logger) => {
  if (typeof message !== 'string') {
    logger.send({ message: `Wrong type of message param: ${typeof message}`, severity: 'ATTACK' })
    return {}
  }

  if (!message.length || message.length < 10 || message.length > 500) {
    logger.send({ message: `Attempt with invalid message. First 20 characters: ${message?.slice(0, 20)}`, severity: 'ATTACK'})
    return {}
  }

  return { OK: true }
}

export const validateAnswer = (answer, logger) => {
  if (typeof answer !== 'string') {
    logger.send({ message: `Wrong type of answer param: ${typeof answer}`, severity: 'ATTACK' })
    return {}
  }

  if (!answer.length || answer.length < 3 || answer.length > 1500) {
    logger.send({ message: `Attempt with invalid answer. First 20 characters: ${answer?.slice(0, 20)}`, severity: 'ATTACK'})
    return {}
  }

  return { OK: true }
}

export const validateRating = (rating, logger) => {
  if (typeof rating !== 'number') {
    logger.send({ message: `Wrong type of rating param: ${typeof rating}`, severity: 'ATTACK' })
    return {}
  }

  if (rating < 1 || rating > 4) {
    logger.send({ message: `Attempt with invalid rating number.`, severity: 'ATTACK'})
    return {}
  }

  return { OK: true }
}

export const validateChapter = (chapter, logger) => {
  if (typeof chapter !== 'string') {
    logger.send({ message: `Wrong type of chapter param: ${typeof chapter}`, severity: 'ATTACK' })
    return {}
  }

  if (!chapter.length || chapter.length > 20) {
    logger.send({ message: `Attempt with invalid chapter. First 20 characters: ${chapter.slice(0, 20)}`, severity: 'ATTACK'})
    return {}
  }

  if (!Object.keys(pageIds).includes(chapter)) {
    logger.send({ message: `Attempt with invalid chapter.`, severity: 'ATTACK'})
    return {}
  }

  return { OK: true }
}

export const validateAction = (req, allowedActions, logger) => {
  const action = req.query?.action as string // It can be a string[] as well per official type declaration
  if (!action) {
    logger.send({message: `Access attempt without action`, severity: 'ATTACK' })
    return { end: true }
  }
  if (!allowedActions.includes(action)) {
    logger.send({ message: `Bad request - wrong action: ${action.slice(0, 30)}`, severity: 'ATTACK' })
    return { end: true }
  }

  logger.config({ action })

  return { OK: true, action }
}

export const validateRequest = ({ req, allowedMethods, worker, action = 'validating request', skipAuthorization = false, skipLog = false }) => {
  const sessionId = req.cookies['fcd-session-id']  // the second option is for signup which is called from the client and doesn't follow the structure of the internal calls from the Captcha API
  const deviceId = req.cookies['fcd-device-id'] || ''
  // TODO check userType and sessionId are valid befor setting them
  const logger = getLogger({ worker, action, sessionId, deviceId })

  if (!allowedMethods.includes(req.method)) {
    !skipLog && logger.send({ message: `Wrong method access attempt: ${req.method}`, severity: 'WARNING' })
    return { end: true }
  }

  if (!skipAuthorization && !isAuthorized(req)) {
    !skipLog && logger.send({ message: `Unauthorized access attempt`, severity: 'ATTACK' })
    return { end: true }
  }

  if (!sessionId) {
    !skipLog && logger.send({ message: `Access attempt without sessionId`, severity: 'ATTACK' })
    return { end: true }
  }

  if (!deviceId) {
    !skipLog && logger.send({ message: `Access attempt without deviceId`, severity: 'ATTACK' })
    return { end: true }
  }

  const serverFingerPrint = getServerFingerprint(req.headers)
  const id = deviceId + serverFingerPrint

  logger.config({ serverFingerPrint })
  
  return { OK: true, id, logger }
}

const accountTypes = ['personal', 'team']

export const validateAccountType = (type, logger) => {
  if (typeof type !== 'string') {
    logger.send({ message: `Bad request - account type missing`, severity: 'ATTACK' })
    return { status: 403, message: '015 -- Stop right there criminal scum!' }
  }
  if (!type.length || type.length > 100) {
    logger.send({ message: `Bad request - invalid type is used. length: ${type.length}. First 30 chars: ${type?.slice(0, 30)}`, severity: 'ATTACK' })
    return { status: 403, message: '015 -- Stop right there criminal scum!' }
  }
  if (!accountTypes.includes(type)) {
    logger.send({ message: `Bad request - invalid account type:${type}`, severity: 'ATTACK' })
    return { status: 403, message: '015 -- Stop right there criminal scum!' }
  }

  return { OK: true }
}