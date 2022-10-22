import { getUserWithSupabase } from 'lib/server/supabase'


export const getUser = async({ hash, email, info = false, checkoutId }: { hash?, email?, info?, checkoutId? }) => {
  const { data, error } = await getUserWithSupabase({ hash, email, checkoutId, query : hash ? info ? 'email, name, role, discordInvite, sessionLimit, updateToken' : 'sessionLimit, confirmed, checkoutId, email' : 'hash, name' })
  return { user: data && data.length && data[0], error }
}
