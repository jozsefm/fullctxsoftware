import { getUpdateTokenWithSupabase } from 'lib/server/supabase'

export const getUpdateToken = async ({ token }) => {
  const { data, error } = await getUpdateTokenWithSupabase({ token })
  return { update: data?.[0], error }
}
