import { storeAnswer } from 'lib/db/storeAnswer'
import { storeMessage } from 'lib/db/storeMessage'
import { storeRating } from 'lib/db/storeRating'
import { validateRequestData, validateRating, validateChapter, validateQuestion, validateAnswer, validateMessage } from './general'

export async function handleRatingFeedbackRequest(req, logger) : Promise<{ error? }> {
  let vr //validation result

  vr = validateRequestData(req, logger)
  if (!vr.OK) return { error: true }

  const { data } = vr
  const { rating, chapter } = data

  vr = validateRating(rating, logger)
  if (!vr.OK) return { error: true }

  vr = validateChapter(chapter, logger)
  if (!vr.OK) return { error: true }

  const sessionId = req.cookies['fcd-session-id']

  const result = await storeRating({ chapter, rating, sessionId })
  return result
}

export async function handleAnswerFeedbackRequest(req, logger) : Promise<{ error? }> {
  let vr //validation result

  vr = validateRequestData(req, logger)
  if (!vr.OK) return { error: true }

  const { data } = vr
  const { question, answer } = data

  vr = validateQuestion(question, logger)
  if (!vr.OK) return { error: true }

  vr = validateAnswer(answer, logger)
  if (!vr.OK) return { error: true }

  const sessionId = req.cookies['fcd-session-id']

  const result = await storeAnswer({ question, answer, sessionId })

  return result
}


export async function handleMessageFeedbackRequest(req, logger) : Promise<{ error? }> {
  let vr //validation result

  vr = validateRequestData(req, logger)
  if (!vr.OK) return { error: true }

  const { data } = vr
  const { chapter, message } = data

  vr = validateChapter(chapter, logger)
  if (!vr.OK) return { error: true }

  vr = validateMessage(message, logger)
  if (!vr.OK) return { error: true }

  const sessionId = req.cookies['fcd-session-id']

  const result = await storeMessage({ chapter, message, sessionId })
  return result
}