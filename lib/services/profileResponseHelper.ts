import { CLIENT_ERROR, errorMap } from "./commonResponseHelper"

type ProfileResponse = {
  status: number
  message: string
}

export function mapProfileResponse({ status, message }: ProfileResponse) {
  if (status !== 200) {
    const errorCode = message.split(' -- ')[0]
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