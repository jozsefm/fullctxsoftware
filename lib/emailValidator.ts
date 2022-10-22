import Validator from 'email-validator-pro'

const validator = new Validator()

export const isValidByProEmailValidator = address => validator.isValidAddress(address)