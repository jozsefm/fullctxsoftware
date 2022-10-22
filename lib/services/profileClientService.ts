import { clearInvalidationMark, getCacheEntry, markForInvalidation, setCacheEntry } from 'lib/client/clientCache'
import { SERVER_ERROR } from './commonResponseHelper'
import { mapProfileResponse } from './profileResponseHelper'

export const statusMap = {
  ERROR: 'ERROR',
  OK: 'OK'
}

const errorResponse = {
  error: SERVER_ERROR
}

export const getProfile = async (force?: boolean): Promise<{ error?: string; email?: string }> => {
  const { cachedValue, invalidate } = getCacheEntry('profile')
  if (!cachedValue || invalidate || force) {
    try {
      const options = {
        method: 'POST', 
      }
  
      if (process.env.NEXT_PUBLIC_DEV !== 'false') {
        options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
      }
  
      const result = await fetch(`/api/profile/get`, options)
    
      const response = await result.json()
      if (result.status !== 200) {
        setCacheEntry('profile', errorResponse)
      } else {
        setCacheEntry('profile', {
          email: response.email,
          orgName: response.orgDisplayName,
          orgHanlder: response.orgHandler,
          teamName: response.teamDisplayName,
          teamHandler: response.teamHandler
        })
      }
      clearInvalidationMark('profile')
    } catch (error) {
      markForInvalidation('profile')
      console.error(error)
      return errorResponse
    }
  }
  
  return getCacheEntry('profile').cachedValue
}

export const updateUserName = async (name): Promise<{ error?: string; }> => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/profile/update-name`, options)
  
    if (result.status !== 200) {
      return errorResponse
    } else {
      return {}
    }
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}

export const updateEmailAddress = async (email): Promise<any> => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/profile/update-email`, options)
  
    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
    }
    return mapProfileResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}

export const cancelEmailChange = async (): Promise<any> => {
  try {
    const options = {
      method: 'POST'
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/profile/cancel-email`, options)
  
    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
    }
    return mapProfileResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}

export const deleteAccount = async (): Promise<any> => {
  try {
    const options = {
      method: 'POST'
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    const result = await fetch(`/api/profile/delete-account`, options)
  
    const response = await result.json()
    const serverAnswer = {
      status: result.status,
      message: response.message,
    }
    return mapProfileResponse(serverAnswer)
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}