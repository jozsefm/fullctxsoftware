import { errorMap, CLIENT_ERROR } from "./commonResponseHelper"

export const INVALID = 'INVALID'

export const resultMap = {
  'CORRECT': 'CORRECT',
  'WRONG': 'WRONG'
}

export const statusMap = {
  'SUCCESS': 'SUCCESS',
  'INUSE': 'INUSE',
  'ERROR': 'ERROR',
  'INITIAL': 'INITIAL',
  'SUBMITTING': 'SUBMITTING'
}

function mapAnswerResult (serverResult) {
  const clientResult = resultMap[serverResult]
  return clientResult || INVALID
}

function mapAnswerMessage (serverMessage) {
  const clientMessage = statusMap[serverMessage]
  return clientMessage || INVALID
}

export function mapAnswer({ status, result, message }: { status: number; result: string; message: string}) {
  if (status !== 200) {
    const errorCode = message.split(' -- ')[0]
    const errorMessage = errorMap[errorCode]
    if (!errorMessage) {
      console.error(`Unknown error received from the backend, OMG! - ${message}`)
    }
    return {
      status: statusMap.ERROR,
      result: mapAnswerResult(result),
      message: errorMessage || CLIENT_ERROR
    }
  } else {
    return {
      status: mapAnswerMessage(message),
      result: mapAnswerResult(result),
      message: null
    }
  }
}