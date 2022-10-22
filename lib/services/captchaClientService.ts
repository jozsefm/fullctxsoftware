import { mapAnswer, statusMap } from './captchaResponseHelper'
import { SERVER_ERROR } from './commonResponseHelper'

export const getQuestion = async () => {
  try {
    const options = {
      method: 'GET',
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/captcha`, options)
    return await result.json()
  } catch (error) {
    console.error(error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR
    }
  }
}

export const sendAnswer = async (number, answer, action, data) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        number, answer, action, data
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/captcha`, options)
    const json = await result.json()
    const serverAnswer = {
      status: result.status,
      ...json
    }
    return mapAnswer(serverAnswer)
  } catch (error) {
    console.error('Error sending answer: ', error)
    return {
      status: statusMap.ERROR,
      message: SERVER_ERROR
    }
  }
}