import { storeResetTokenWithSupabase } from 'lib/server/supabase'

export const storeResetToken = async ({ token, email }) => {
  const { error } = await storeResetTokenWithSupabase({ token, email })
  return { error }
}
