import { SERVER_ERROR } from './commonResponseHelper'
import { mapHeartbeatResponse, mapLoginResponse, mapLogoutResponse, statusMap } from './sessionResponseHelper'

type LoginParams = { hash: string }
export const login = async ({ hash } : LoginParams ) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        hash
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/auth/login`, options) // /login is only there to trigger Next.js route maching
    const response = await result.json()

    const serverAnswer = {
      status: result.status,
      message: response.message
    }

    return mapLoginResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR
    }
  }
}

export const logout = async () => {
  try {
    const options = {
      method: 'POST' 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/logout`, options) // /login is only there to trigger Next.js route maching
    const response = await result.json()

    const serverAnswer = {
      status: result.status,
      message: response.message
    }

    return mapLogoutResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR
    }
  }
}

export const heartbeat = async () => {
  try {
    const options = {
      method: 'POST'
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/heartbeat`, options)
    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
      loggedIn: response.loggedIn
    }

    return mapHeartbeatResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR,
      loggedIn: 'keep'
    }
  }
}