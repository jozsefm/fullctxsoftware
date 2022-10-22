import { CLIENT_ERROR, errorMap } from "./commonResponseHelper"

export const INVALID = 'INVALID'
export const statusMap = {
  'ERROR': 'ERROR',
  'LOGGEDIN': 'LOGGEDIN',
  'LOGGEDOUT': 'LOGGEDOUT'
}

export const SESSION_ERROR = `There's a mistake in the entered data or the account does not exist.`

export function mapHeartbeatResponse({ status, message, loggedIn }) {
  if (status !== 200) {
    const errorCode = message.split(' -- ')[0]
    const errorMessage = errorMap[errorCode]
    if (!errorMessage) {
      console.error(`Unknown error received from the backend, OMG! - ${message}`)
    }
    return {
      message: errorMessage || CLIENT_ERROR,
      loggedIn: 'keep'
    }
  } else {
    return { loggedIn }
  }
}

export function mapLoginResponse({ status, message }) {
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
      status: statusMap.LOGGEDIN,
      message
    }
  }
}

export function mapLogoutResponse({ status, message }) {
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
      status: statusMap.LOGGEDOUT,
      message
    }
  }
}