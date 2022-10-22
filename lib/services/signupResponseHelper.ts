import { CLIENT_ERROR, errorMap } from "./commonResponseHelper"

type Response = {
  status: number
  message: string
  hash?: string
}

export function mapSignupResponse({ status, message, hash }: Response) {
  if (status !== 200) {
    const errorCode = message.split(' -- ')[0]
    const errorMessage = errorMap[errorCode]
    if (!errorMessage) {
      console.error(`Unknown error received from the backend, OMG! - ${message}`)
    }
    return {
      message: errorMessage || CLIENT_ERROR,
      hash
    }
  } else {
    return { hash }
  }
}

export function mapCheckResponse({ status, message }: Response) {
  if (status !== 200) {
    const errorParts = message.split(' -- ')
    const errorCode = errorParts[0]
    const errorPayload = errorParts[1]
    if (errorCode === '082') {
      return {
        issues: JSON.parse(errorPayload)
      }
    }
    const errorMessage = errorMap[errorCode]
    if (!errorMessage) {
      console.error(`Unknown error received from the backend, OMG! - ${message}`)
    }
    return {
      message: errorMessage || CLIENT_ERROR
    }
  } else {
    return {}
  }
}