import { isEmailBurner } from "burner-email-providers"
import { isValidByProEmailValidator } from "../emailValidator"

export const EMAIL_ERRORS = {
  MISSING: 'missing',
  LENGTH: 'length',
  INVALID: 'invalid',
  BURNER: 'burner',
}

export const checkEmailParam = (email, logger) => {
  if (!email) {
    logger.send({ message: `Bad request - missing address: ${!email}`, severity: 'WARNING' })
    return { error: EMAIL_ERRORS.MISSING }
  }

  if (!email.length || email.length > 100) {
    logger.send({ message: `Bad request - out of bounds email length. Length: ${email.length}. First 30 chars: ${email.slice(0, 30)} - likely a bot or attacker`, severity: 'WARNING' })
    return { error: EMAIL_ERRORS.LENGTH }
  }

  if (!isValidByProEmailValidator(email)) {
    logger.send({ message: `Invalid email address was used: ${email} - likely a bot or attacker`, severity: 'WARNING' })
    return { error: EMAIL_ERRORS.INVALID }
  }

  if (isEmailBurner(email)) {
    logger.send({ message: `One time email address was used: ${email}`, severity: 'WARNING' })
    return { error: EMAIL_ERRORS.BURNER }
  }

  return {} // otherwise destructoring the result will lead to an error "TypeError: Cannot destructure property 'error' of 'Object(...)(...)' as it is undefined."
}