import { deleteSessionsWithSupabase } from 'lib/server/supabase'

export const deleteSessions = async ({ hash }) => {
  const { error } = await deleteSessionsWithSupabase({ hash })
  return { error }
}
