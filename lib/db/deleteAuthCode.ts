import { deleteAuthCodeWithSupabase } from 'lib/server/supabase'

export const deleteAuthCode = async ({ code }) => {
  const { error } = await deleteAuthCodeWithSupabase({ code })
  return { error }
}
