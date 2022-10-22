import Redis from 'ioredis'

export const resetLimit = async (id, type, logger) => {
  let redis
  try {
    redis = new Redis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST, {
      username: process.env.REDIS_USER,
      password: process.env.REDIS_PW,
      showFriendlyErrorStack: true
    })
    const key = `type:${type}-id:${id}`
    try {
      await redis.del(key)
    } catch (error) {
      logger.send({ message: `Redis failure to delete ${type} record for: ${id}`, error })
    }
  } finally {
    redis?.disconnect()
  }
}

export const clearRedis = async (logger) => {
  let redis
  try {
    redis = new Redis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST, {
      username: process.env.REDIS_USER,
      password: process.env.REDIS_PW,
      showFriendlyErrorStack: true
    })
    
    await redis.flushdb()
    logger.send({ message: `Redis delete all keys - success` })
  } catch (error) {
    logger.send({ message: `Redis delete all keys - error`, error })
    redis?.disconnect() // im'n not sure if the finally is executed after returning from a catch
    return true // if redis is down, risk higher traffic than to block the site
  } finally {
    redis?.disconnect()
  }
}

export const checkRateLimit = async ({ id, type, shortTermLimit, longTermLimit, shortTermTTL, longTermTTL, logger }): Promise<{ allow: boolean; case: string; remaining?: number; period?: string }> => {
  // await clearRedis(logger)
  // return { allow: true, case: 'normal'}
  const key = `${type}:${id}`
  let redis
  try {
    redis = new Redis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST, {
      username: process.env.REDIS_USER,
      password: process.env.REDIS_PW,
      showFriendlyErrorStack: true
    })

    const longTermRes = await handleCheck(redis, `lt-${key}`, logger, longTermTTL, longTermLimit)
    if (!longTermRes.allow) {
      return longTermRes
    }

    return await handleCheck(redis, key, logger, shortTermTTL, shortTermLimit)

  } finally {
    redis?.disconnect()
  }
}

export const resetRateLimit = async(id, type, logger) => {
  let redis
  try {
    redis = new Redis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST, {
      username: process.env.REDIS_USER,
      password: process.env.REDIS_PW,
      showFriendlyErrorStack: true
    })
    
    const shortTermkey = `${type}:${id}`
    const longTermKey = `lt-${shortTermkey}`

    try {
      await redis.del(shortTermkey)
      await redis.del(longTermKey)
    } catch (error) {
      logger.send({ message: `Redis failure to delete ${type} record for: ${id}`, error })
    }
  } finally {
    redis?.disconnect()
  }
}

async function handleCheck(redis, id, logger, TTL, UPPER_LIMIT) {
  let limitRecord
  try {
    limitRecord = await redis.hgetall(id)
  } catch (error) {
    logger.send({ message: `Redis failure to get record for: ${id}`, error })
    return { allow: true, case: 'error' }  // if redis is down, risk higher traffic than to block the site
  }
  
  if (Object.keys(limitRecord).length) { // means it already has a set record
    let { attempts, banned } = limitRecord
    // Redis stores these as strings
    attempts = parseInt(attempts)
    banned = banned === 'true'
    
    if (banned) {
      return { allow: false, case: 'is-banned'}
    }

    if ((!attempts && attempts !== 0) || attempts > UPPER_LIMIT) {
      logger.send({ message: `Rate limit attempt number is out of bounds somehow for account: ${id} - number: ${attempts}`, severity: 'ERROR' })
      return { allow: true, case: 'error' } // probably a programmer error let them forward
    }

    if (attempts === UPPER_LIMIT) { // it's the number when the attempt should be blocked for the first time, it's one higher than the intuitive notion of allowed attempts.
      try {
        await redis.multi()
          .hset(id, 'banned', true)
          .expire(id, TTL) // reset the TTL to cover the banning period
          .exec()
        logger.send({ message: `Rate limit banned the account: ${id}`, severity: 'WARNING' })
        return { allow: false, case: 'got-banned' }
      } catch (error) {
        logger.send({ message: `Redis error while updating the limits for user: ${id} when it should have been banned`, error })
        return { allow: true, case: 'error' }  // if redis is down, risk higher traffic than to block the site
      }
    }

    try {
      const next = attempts + 1 // at the time of this code running the user is actually making the (attempts + 1)-nth attempt
      await redis.hset(id, 'attempts', next)
      return { allow: true, case: 'normal' }
    } catch (error) {
      logger.send({ message: `Redis error while updating the access number for user: ${id}`, error })
      return { allow: true, case: 'error' }  // if redis is down, risk higher traffic than to block the site
    }
  } else {
    try {
      await redis.multi()
        .hset(id, 'attempts', 2, 'banned', false) // by the time this data will be read and checked it will be the second try already
        .expire(id, TTL)
        .exec()
      return { allow: true, case: 'normal'}
    } catch (error) {
      logger.send({ message: `Redis failure to set record for: ${id}`, error })
      return { allow: true, case: 'error' } // if redis is down, risk higher traffic than to block the site
    }
  }
}