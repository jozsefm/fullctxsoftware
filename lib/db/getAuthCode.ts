import { getAuthCodeWithSupabase } from 'lib/server/supabase'

export const getAuthCode = async ({ code }) => {
  const { data, error } = await getAuthCodeWithSupabase({ code })
  return { owner: data?.[0]?.current, error }
}
