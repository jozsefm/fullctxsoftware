import { updateNameWithSupabase } from 'lib/server/supabase'

export const updateName = async({ hash, name }) => {
  const { error } = await updateNameWithSupabase({ hash, name })
  return { error }
}
