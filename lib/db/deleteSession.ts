import { deleteSessionWithSupabase } from 'lib/server/supabase'

export const deleteSession = async ({ sessionId }) => {
  const { error } = await deleteSessionWithSupabase({ sessionId, optional: false })
  return { success: !error, error }
}
