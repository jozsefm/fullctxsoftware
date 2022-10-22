import { USER_TYPES } from "constants/generic"
import { getUser } from "lib/db/getUser"
import { signupUser } from "lib/db/signup"
import { checkRateLimit } from "lib/server/rateLimiter"
import { sendHashLink } from "lib/server/sendEmail"
import { createDiscordInvite } from "../discord"
import { validateAccountType, validateEmail } from "../general"

export const signupHandler = async (id, data, logger) => {
  let vr //validation result

  const rateLimitConfig = {
    shortTermLimit: 15,
    longTermLimit: 20,
    shortTermTTL: 60,
    longTermTTL: 24 * 60 * 60,
    type: 'signup',
    logger,
    id
  }

  const { allow } = await checkRateLimit(rateLimitConfig)
  if (!allow) return { status: 400, message: '027 -- Ratelimit exceeded' }

  const { email, name, type, team, size, checkoutId } = data

  vr = validateAccountType(type, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  vr = validateEmail(email, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  logger.config({
    email: email
  })
  
  if (type === USER_TYPES.PERSONAL) {
    if (team) {
      await logger.send({ message: `Bad request - team data sent with personal account type`, severity: 'ATTACK' })
      return { status: 400, message: '034 -- Stop right there criminal scum!' }
    }
    if (!name || !name.length || name.length > 100) {
      await logger.send({ message: `Bad request - Name is missing or out of bounds. Length: ${name?.length}. First 30 chars: ${name?.slice(0, 30)}`, severity: 'ATTACK' })
      return { status: 400, message: '021 -- Stop right there criminal scum!' }
    }
    logger.config({
      accountType: USER_TYPES.PERSONAL
    })
  }

  if (type === USER_TYPES.TEAM) {
    if (name) {
      await logger.send({ message: `Bad request - personal account data sent with team user type`, severity: 'ATTACK' })
      return { status: 400, message: '034 -- Stop right there criminal scum!' }
    }
    if (!size || typeof size !== 'number' || size < 3 || size > 100) {
      await logger.send({ message: `Bad request - invalid team size`, severity: 'ATTACK' })
      return { status: 400, message: '036 -- Stop right there criminal scum!' }
    }

    if (!team || typeof team !== 'string' || team.length > 100) {
      await logger.send({ message: `Bad request - invalid team name`, severity: 'ATTACK' })
      return { status: 400, message: '037 -- Stop right there criminal scum!' }
    }
  }
  
  const isTeam = type === USER_TYPES.TEAM

  if (isTeam) {
    logger.config({
      type: USER_TYPES.TEAM,
      team
    })
  }

  { // creating block scope to allow using const { user, error } multiple times in the file
    const { user, error } = await getUser({email})
  
    if (error) {
      return { status: 500, message: '014 -- Database error at signup.' }
    }
    if (user) {
      await logger.send({ message: `Tried to re-register an email address` })
      return { status: 422, message: `${isTeam ? '038' : '011'} -- The email address is already in use` }
    }
  }

  let discordInvite
  try {
    discordInvite = await createDiscordInvite(size)
  } catch (error) {
    await logger.send({ message: `Error while generating Discord invite for new user`, db: 'fauna', error })
    return { status: 500, message: '061 -- Failed to generate invites' }
  }

  const userName = isTeam ? team : name

  const params = { email, discordInvite, checkoutId, name: userName, role: type, confirmed: false, sessionLimit: getMaxSessionsAllowed(size) }

  { // creating block scope to allow using const { user, error } multiple times in the file

    const { user, error } = await signupUser(params)
    if (error) {
      return { status: 500, message: '014 -- Database error at signup.' }
    }
    if (user) {
      try {
        await sendHashLink(email, user.hash, userName, isTeam)
      } catch (error) {
        await logger.send({ message: `Failed to deliver the access code email`, error, severity: 'FATAL' })
        return { status: 500, message: '014 -- Database error at signup.' }
      }

      await logger.send({ message: `Success creating the new account` })
      return { status: 200, message: 'SUCCESS', hash: user.hash }
    }
  }
}

function getMaxSessionsAllowed(size) {
  return !size ? 4 :
    size * 2
}