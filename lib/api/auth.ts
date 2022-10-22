import { confirmNewUser } from 'lib/db/confirmNewUser'
import { createSession } from 'lib/db/createSession'
import { getSessionCount } from 'lib/db/getSessionCount'
import { getUser } from 'lib/db/getUser'

export const authHandler = async (hash, logger) => {
  let res
  res = await getUser({ hash })

  if (res.error) {
    await logger.send({ message: 'Problem getting the user', db: 'supabase', error: res.error})
    return { status: 500, message: '014 -- Database error while authenticating.' }
  }

  const { user } = res

  if (!user) {
    await logger.send({ message: 'Login attempt for non-existent user', severity: 'WARNING'})
    return { status: 500, message: '001 -- Auth error' }
  }

  const { sessionLimit, confirmed } = user
  if (typeof sessionLimit === 'undefined' || typeof confirmed === 'undefined') {
    return { status: 500, message: '014 -- Database error while authenticating.' }
  }

  if (!confirmed) {
    const { checkoutId, email } = user
    let result
    try {
      result = await fetch(`https://${process.env.PADDLE_DEV === 'true' ? 'sandbox-' : ''}checkout.paddle.com/api/1.0/order?checkout_id=${checkoutId}`, {
        method: 'GET'
      })
    } catch (error) {
      await logger.send({ message: `Failed to fetch checkout data from Paddle`, error })
      return { status: 500, message: '022 -- Database error while logging in' }
    }

    let response
    try {
      response = await result.json()
    } catch (error) {
      await logger.send({ message: `Failed to parse checkout data from Paddle`, error })
      return { status: 500, message: '022 -- Database error while logging in' }
    }

    if (response?.order?.customer?.email === email) {
      const { error } = await confirmNewUser({ confirmToken: checkoutId })
      if (!error) {
        await logger.send({ message: `Confirmed user at login` })
      } else {
        await logger.send({ message: `checkoutId not found in DB`, severity: 'ERROR' })
        return { status: 500, message: '022 -- Database error while logging in' }
      }
    } else {
      return { status: 400, message: '023 -- Failed to log in' }
    }
  }

  res = await getSessionCount({ hash })

  if (res.error) {
    await logger.send({ message: 'Problem counting the sessions', db: 'supabase', error: res.error})
    return { status: 500, message: '014 -- Database error while authenticating.' }
  }

  const { sessions } = res
  if (sessions < sessionLimit) {
    const { session, error } = await createSession({ hash })
    if (error) {
      await logger.send({ message: 'Problem creating new session', db: 'supabase', error: res.error})
      return { status: 500, message: '014 -- Database error while authenticating.' }
    }
    if (session) {
      return { OK: true, id: session.sessionId }
    } else {
      return { status: 500, message: '014 -- Database error while authenticating.' }
    }
  } else {
    // TODO maybe redirect to a description page about too many logins.
    return { status: 400, message: '093 -- Max sessions reached' }
  }
}

