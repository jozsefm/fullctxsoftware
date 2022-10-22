import { SERVER_ERROR } from './commonResponseHelper'
import { mapCodeResponse, statusMap } from './teamAuthResponseHelper'

export const initCode = async () => {
  try {
    const options = {
      method: 'GET',
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/team`, options) // /init is only there to trigger Next.js route maching
    const response = await result.json()

    const serverAnswer = {
      status: result.status,
      message: response.message
    }

    return mapCodeResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR
    }
  }
}

export const submitCode = async ({ code }) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        code
      })
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/team`, options) // /login is only there to trigger Next.js route maching
    const response = await result.json()

    const serverAnswer = {
      status: result.status,
      message: response.message
    }

    return mapCodeResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR
    }
  }
}
