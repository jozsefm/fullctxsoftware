import { confirmNewUserWithSupabase } from 'lib/server/supabase'

export const confirmNewUser = async ({ confirmToken }) => {
  const { data, error } = await confirmNewUserWithSupabase({ confirmToken })
  return { confirmed: data?.[0], error }
}
