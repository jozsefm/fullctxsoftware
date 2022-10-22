import { deleteUserWithSupabase } from 'lib/server/supabase'

export const deleteUser = async ({ hash }) => {
  const { error } = await deleteUserWithSupabase({ hash })
  return { success: !error, error }
}
