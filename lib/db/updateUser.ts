import { updateUserWithSupabase } from 'lib/server/supabase'

export const updateUser = async({ hash, token, update }: { hash?, token?, update}) => {
  const { error } = await updateUserWithSupabase({ hash, token, update })
  return { error }
}
