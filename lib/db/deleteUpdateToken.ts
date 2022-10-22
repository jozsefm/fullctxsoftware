import { deleteUpdateTokenWithSupabase } from 'lib/server/supabase'

export const deleteUpdateToken = async ({ token }) => {
  const { error } = await deleteUpdateTokenWithSupabase({ token, optional: false })
  return { error }
}
