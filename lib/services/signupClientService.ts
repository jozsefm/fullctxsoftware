import { SERVER_ERROR } from './commonResponseHelper'
import { mapCheckResponse, mapSignupResponse } from './signupResponseHelper'

export const statusMap = {
  ERROR: 'ERROR',
  OK: 'OK'
}

const errorResponse = {
  error: SERVER_ERROR
}

export const clientSignup = async (data): Promise<{ error?: string; message?: string; hash?: string | null }> => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ...data
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/account/signup`, options)

    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
      hash: response.hash
    }
    return mapSignupResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}

export const checkAccountData = async (data): Promise<{ error?: string; message?: string; issues?: any }> => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ...data
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/account/check`, options)

    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
    }
    return mapCheckResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}