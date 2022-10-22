import { getUpdateWithSupabase } from 'lib/server/supabase'

export const getUpdate = async ({ token }) => {
  const { data, error } = await getUpdateWithSupabase({ token })
  return { update: data?.[0], error }
}
