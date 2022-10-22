import { getSessionCountWithSupabase } from 'lib/server/supabase'


export const getSessionCount = async ({ hash }) => {
  const { data, error } = await getSessionCountWithSupabase({ hash })
  return { sessions: !data || !data.length ? 0 : data.length, error }
}
