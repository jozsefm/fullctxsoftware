import { newsletterSignupWithSupabase } from 'lib/server/supabase'
import { v4 as uuidv4 } from 'uuid'

export const newsletterSignup = async ({ email }) => {
  const confirmToken = uuidv4(), unsubToken = uuidv4()
  const { error } = await newsletterSignupWithSupabase({ email, confirmToken, unsubToken, confirmed: false })
  return { confirmToken, unsubToken, error }

}
