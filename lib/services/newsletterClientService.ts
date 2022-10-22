import { SERVER_ERROR } from './commonResponseHelper'
import { mapNewsletterResponse } from './newsletterResponseHelper'

export const statusMap = {
  ERROR: 'ERROR',
  OK: 'OK'
}

const errorResponse = {
  message: SERVER_ERROR
}

export const newsletterAction = async (action, data, token?): Promise<{ error?: string; message?: string; }> => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        [
          action === 'confirmSubscribe'
            ? 'confirmToken'
            : action === 'unsubscribe'
              ? 'unsubToken'
              : 'email'
        ]: data, token
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/newsletter/${action}`, options)

    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
    }
    
    return mapNewsletterResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}