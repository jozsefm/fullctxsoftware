import { CLIENT_ERROR, errorMap } from "./commonResponseHelper"

export const statusMap = {
  'ERROR': 'ERROR',
  'SUCCESS': 'SUCCESS',
}

export function mapCodeResponse({ status, message }) {
  if (status !== 200) {
    const errorCode = message.split(' -- ')[0]
    const errorMessage = errorMap[errorCode]
    if (!errorMessage) {
      console.error(`Unknown error received from the backend, OMG! - ${message}`)
    }
    return {
      status: statusMap.ERROR,
      message: errorMessage || CLIENT_ERROR,
    }
  } else {
    return {
      status: statusMap.SUCCESS,
      message
    }
  }
}