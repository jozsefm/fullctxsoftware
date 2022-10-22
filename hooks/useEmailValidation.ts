import { getEmailList } from 'lib/client/emailUtils'
import { Ref, useCallback, useRef, useState } from 'react'
import { isValidByProEmailValidator } from '../lib/emailValidator'

export function useEmailValidation(emailRef) {
  const [isEmailValid, setIsEmailValid] : [boolean, any] = useState(true)
  const [isEmailValidated, setIsEmailValidated] : [boolean, any] = useState(false)

  const setEmailValidity = useCallback((config) => {
    let force, reset, multiple, value
    // using function parameter desctructuring lead to a runtime error "_ref is undefined"
    // it was coming from the compiled code that used _ref.reset, _ref.multiple ...
    // to implement the destructoring but when the function is called without any argument
    // which happens many times, it died..., weird, might worth to file an issue btw.
    if (config) {
      reset = config.reset
      multiple = config.multiple
      value = config.value
      force = config.force
    }
    if (force) {
      setIsEmailValid(force.value)
      setIsEmailValidated(true)
    } else if (reset) {
      setIsEmailValid(true)
      setIsEmailValidated(false)
    } else {
      if (multiple) {
        if (emailRef.current?.value === '') {
          setIsEmailValid(true)
          setIsEmailValidated(false)
        } else {
          const validatedMails: any[] = getEmailList(emailRef)
            ?.map(email => ({
              valid: setValidity({ email, skipSetting: true }),
              address: email
            }))
          const faultyEmails = validatedMails.filter(email => !email.valid)
          setIsEmailValid(!faultyEmails.length)
          setIsEmailValidated(true)
          return faultyEmails
        }
      } else {
        const email = emailRef.current?.value
        return setValidity({ email: value || email, setValid: setIsEmailValid, setValidated: setIsEmailValidated })
      }
    }
  }, [emailRef])

  const returnValues : [boolean, boolean, (arg?: any) => any ] = [isEmailValid, isEmailValidated, setEmailValidity]

  return returnValues
}

type SetValidityParams = {
  email: string;
  setValid?: any;
  setValidated?: any
  skipSetting?: boolean
}
const setValidity = ({email, setValid, setValidated, skipSetting} : SetValidityParams) => {
  let isValid
  if (email?.length > 100) {
    isValid = false
  } else {
    isValid = isValidByProEmailValidator(email)
  }
  if (!skipSetting) {
    setValid(isValid)
    setValidated(true)
  }
  return isValid
}