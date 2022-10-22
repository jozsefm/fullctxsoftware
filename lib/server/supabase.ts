import { createClient } from '@supabase/supabase-js'
import { SignupParams } from 'lib/db/signup'
import { AnswerParams } from 'lib/db/storeAnswer'
import { MessageParams } from 'lib/db/storeMessage'
import { RatingParams } from 'lib/db/storeRating'
import { pushLog } from './logger'

const supabase = createClient(process.env.SUPABASE_HOST, process.env.SUPABASE_KEY)

export const storeMessageWithSupabase = async (params: MessageParams) => {
  try {
    const { error } = await supabase
      .from('Feedback')
      .insert([
        params,
      ])

    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to store the message', db: 'supabase', error })
    return { error: true }
  }
}
export const storeAnswerWithSupabase = async (params: AnswerParams) => {
  try {
    const { error } = await supabase
      .from('Answers')
      .insert([
        params,
      ])

    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to store the answer', db: 'supabase', error })
    return { error: true }
  }
}

export const storeRatingWithSupabase = async (params: RatingParams) => {
  try {
    const { error } = await supabase
      .from('Feedback')
      .insert([
        params,
      ])

    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to store the rating', db: 'supabase', error })
    return { error: true }
  }
}

export const newsletterSignupWithSupabase = async (params: { email: string, confirmToken: string, unsubToken: string, confirmed: boolean }) => {
  try {
    const { error } = await supabase
      .from('Newsletter')
      .insert([
        params,
      ])

    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to subscribe to the newsletter', db: 'supabase', error })
    return { error: true }
  }
}

export const deleteNewsletterSubscriptionWithSupabase = async ({ email, unsubToken }: { email?: string, unsubToken?: string }) => {
  try {
    if (email && !unsubToken) {
      let { data, error } = await supabase
        .from('Newsletter')
        .delete()
        .eq('email', email)
  
      if (error) {
        pushLog({ message: 'Supabase SQL error - no match for email', db: 'supabase', error})
      }
      return { data, error: !data.length || Boolean(error) }
    } else if (unsubToken) {
      let { data, error } = await supabase
        .from('Newsletter')
        .delete()
        .eq('unsubToken', unsubToken)
  
      if (error) {
        pushLog({ message: 'Supabase SQL error - no match for unsubToken', db: 'supabase', error})
      }
      return { data, error: !data.length || Boolean(error) }
    }
  } catch (error) {
    pushLog({ message: 'Failed to remove from the newsletter', db: 'supabase', error })
    return { error: true }
  }
}

export const confirmNewsletterSubscriptionWithSupabase = async ({ confirmToken }) => {
  try {
    let { data, error } = await supabase
      .from('Newsletter')
      .update({
        confirmToken: null,
        confirmed: true,
      })
      .eq('confirmToken', confirmToken)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error - no match for confirmToken', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
    
  } catch (error) {
    pushLog({ message: 'Failed to confirm the newsletter subscription', db: 'supabase', error })
    return { error: true }
  }
}

export const confirmNewUserWithSupabase = async ({ confirmToken }) => {
  try {
    let { data, error } = await supabase
      .from('Users')
      .update({
        confirmed: true,
      })
      .eq('checkoutId', confirmToken)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error - no match for confirmToken', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
    
  } catch (error) {
    pushLog({ message: 'Failed to confirm the new user', db: 'supabase', error })
    return { error: true }
  }
}

export const signupUserWithSupabase = async (params: SignupParams) => {
  try {
    const { data, error } = await supabase
    .from('Users')
    .insert([
      params,
    ])

    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to sign up the user', db: 'supabase', error })
    return { error: true }
  }
}

export const getUserWithSupabase = async ({ email, hash, query, checkoutId }) => {
  try {
    if (email) {
      let { data, error } = await supabase
        .from('Users')
        .select(query)
        .eq('email', email)
      
      if (error) {
        pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
      }

      return { data, error: Boolean(error) }
    }
    if (hash) {
      let { data, error } = await supabase
        .from('Users')
        .select(query)
        .eq('hash', hash)
      
      if (error) {
        pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
      }
      return { data, error: Boolean(error) }
    }
    if (checkoutId) {
      let { data, error } = await supabase
        .from('Users')
        .select(query)
        .eq('checkoutId', checkoutId)
      
      if (error) {
        pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
      }
      return { data, error: Boolean(error) }
    }
  } catch (error) {
    pushLog({ message: 'Failed to read the user', db: 'supabase', error })
    return { error: true }
  }
}

export const createAuthCodeWithSupabase = async ({ hash, authCode }) => {
  try {
    let { data, error } = await supabase
      .from('DataUpdates')
      .insert([{
        type: 'auth-code',
        token: authCode,
        current: hash
      }])
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to create auth code', db: 'supabase', error })
    return { error: true }
  }
}

export const createSessionWithSupabase = async ({ hash, sessionId }) => {
  try {
    let { data, error } = await supabase
      .from('Sessions')
      .insert([{
        hash,
        sessionId,
      }])
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to create session', db: 'supabase', error })
    return { error: true }
  }
}

export const createNewEmailWithSupabase = async ({ hash, email, token }) => {
  let failed = false

  try {
    let { error } = await supabase
      .from('Users')
      .update({
        updateToken: token,
      })
      .eq('hash', hash)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
      failed = true
    }
  } catch (error) {
    pushLog({ message: 'Failed to update user with email change token', db: 'supabase', error })
    failed = true
  }

  try {
    let { error } = await supabase
      .from('DataUpdates')
      .insert([{
        token,
        type: 'email',
        new: email
      }])
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
      failed = true
    }
  } catch (error) {
    pushLog({ message: 'Failed to create email change DataUpdate', db: 'supabase', error })
    failed = true
  }

  return { error: failed }
}

export const deleteAuthCodeWithSupabase = async ({ code }) => {
  let failed = false

  try {
    let { error } = await supabase
      .from('DataUpdates')
      .delete()
      .eq('token', code)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
      failed = true
    }
  } catch (error) {
    pushLog({ message: 'Failed to delete team auth code DataUpdate', db: 'supabase', error })
    failed = true
  }

  return { error: failed }
}

export const deleteNewEmailWithSupabase = async ({ hash, token }) => {
  let failed = false

  try {
    let { error } = await supabase
      .from('Users')
      .update({
        updateToken: null,
      })
      .eq('hash', hash)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
      failed = true
    }
  } catch (error) {
    pushLog({ message: 'Failed to revert user email change token', db: 'supabase', error })
    failed = true
  }

  try {
    let { error } = await supabase
      .from('DataUpdates')
      .delete()
      .eq('token', token)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
      failed = true
    }
  } catch (error) {
    pushLog({ message: 'Failed to revert email change DataUpdate', db: 'supabase', error })
    failed = true
  }

  return { error: failed }
}

export const getAuthCodeWithSupabase = async ({ code }) => {
  try {
    let { data, error } = await supabase
      .from('DataUpdates')
      .select('current')
      .eq('token', code)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to query the authorization code', db: 'supabase', error })
    return { error: true }
  }
}

export const getSessionCountWithSupabase = async ({ hash }) => {
  try {
    let { data, error } = await supabase
      .from('Sessions')
      .select('hash')
      .filter('hash', 'eq', hash)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to count sessions', db: 'supabase', error })
    return { error: true }
  }
}

export const getSessionWithSupabase = async ({ sessionId }) => {
  try {
    let { data, error } = await supabase
      .from('Sessions')
      .select('hash')
      .eq('sessionId', sessionId)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to query session', db: 'supabase', error })
    return { error: true }
  }
}

export const deleteSessionWithSupabase = async ({ sessionId, optional = true }) => {
  try {
    let { data, error } = await supabase
      .from('Sessions')
      .delete()
      .eq('sessionId', sessionId)
    
    let failed = false

    if (error) {
      failed = true
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }

    if (!optional && data?.length !== 1) {
      failed = true
      pushLog({ message: 'The data to delete was not found in the DB' })
    }
    return { error: failed }
  } catch (error) {
    pushLog({ message: 'Failed to delete session', db: 'supabase', error })
    return { error: true }
  }
}

export const deleteSessionsWithSupabase = async ({ hash, optional = true }) => {
  try {
    let { data, error } = await supabase
      .from('Sessions')
      .delete()
      .match({ hash })
    
    let failed = false
    
    if (error) {
      failed = true
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }

    if (!optional && data?.length !== 1) {
      failed = true
      pushLog({ message: 'The data to delete was not found in the DB' })
    }
    return { error: failed }
  } catch (error) {
    pushLog({ message: 'Failed to delete sessions', db: 'supabase', error })
    return { error: true }
  }
}

export const deleteUserWithSupabase = async ({ hash }) => {
  let failed = false

  try {
    let { error } = await supabase
      .from('Sessions')
      .delete()
      .eq('hash', hash)

    if (error) {
      failed = true
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }

  } catch (error) {
    pushLog({ message: 'Failed to delete sessions', db: 'supabase', error })
    return { error: true }
  }

  try {
    let { data, error } = await supabase
      .from('Users')
      .delete()
      .eq('hash', hash)

    if (error) {
      failed = true
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }

    if (data?.length !== 1) {
      failed = true
      pushLog({ message: 'The data to delete was not found in the DB' })
    }
  } catch (error) {
    pushLog({ message: 'Failed to delete user', db: 'supabase', error })
    return { error: true }
  }

  return { error: failed }
}

export const updateHashWithSupabase = async ({ hash, newHash }) => {
  try {
    let { data, error } = await supabase
      .from('Users')
      .update({ hash: newHash })
      .eq('hash', hash)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    return { error: Boolean(error || data?.length !== 1) }
  } catch (error) {
    pushLog({ message: 'Failed to update user', db: 'supabase', error })
    return { error: true }
  }
}

export const updateNameWithSupabase = async ({ hash, name }) => {
  try {
    let { data, error } = await supabase
      .from('Users')
      .update({ name })
      .eq('hash', hash)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    return { error: Boolean(error || data?.length !== 1) }
  } catch (error) {
    pushLog({ message: 'Failed to update username', db: 'supabase', error })
    return { error: true }
  }
}

export const updateUserWithSupabase = async ({ hash, token, update } : { hash?, token?, update}) => {
  try {
    let { data, error } = await supabase
      .from('Users')
      .update(update)
      .eq(`${hash ? 'hash' : 'updateToken'}`, hash ? hash : token)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    return { error: !!error || data?.length !== 1 }
  } catch (error) {
    pushLog({ message: 'Failed to update user', db: 'supabase', error })
    return { error: true }
  }
}

export const storeResetTokenWithSupabase = async ({ token, email }) => {
  try {
    let { error } = await supabase
      .from('DataUpdates')
      .insert([{
        token,
        type: 'reset',
        current: email
      }])
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to store reset token', db: 'supabase', error })
    return { error: true }
  }
}

export const getUpdateTokenWithSupabase = async ({ token }) => {
  try {
    let { data, error } = await supabase
      .from('DataUpdates')
      .select('created_at, current, new')
      .eq('token', token)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error})
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to query update token', db: 'supabase', error })
    return { error: true }
  }
}

export const deleteUpdateTokenWithSupabase = async ({ token, optional = true }) => {
  try {
    let { data, error } = await supabase
      .from('DataUpdates')
      .delete()
      .eq('token', token)
    
    let failed = false
    
    if (error) {
      failed = true
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    if (!optional && data?.length !== 1) {
      failed = true
      pushLog({ message: 'The data to delete was not found in the DB' })
    }
    return { error: failed }
  } catch (error) {
    pushLog({ message: 'Failed to delete update token', db: 'supabase', error })
    return { error: true }
  }
}

export const getUpdateWithSupabase = async ({ token }) => {
  try {
    let { data, error } = await supabase
      .from('DataUpdates')
      .select('*')
      .eq('token', token)
    
    if (error) {
      pushLog({ message: 'Supabase SQL error', db: 'supabase', error })
    }
    return { data, error: Boolean(error) }
  } catch (error) {
    pushLog({ message: 'Failed to get update data', db: 'supabase', error })
    return { error: true }
  }
}
