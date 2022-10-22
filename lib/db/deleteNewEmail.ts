import { deleteNewEmailWithSupabase } from 'lib/server/supabase'

export const deleteNewEmail = async ({ hash, token }) => {
  const { error } = await deleteNewEmailWithSupabase({ hash, token })
  return { error }
}
