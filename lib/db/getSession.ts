import { getSessionWithSupabase } from 'lib/server/supabase'

export const getSession = async ({ sessionId }) => {
  const { data, error } = await getSessionWithSupabase({ sessionId })
  return { hash: data?.[0]?.hash, error }
}
