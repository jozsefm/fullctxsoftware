import { updateHashWithSupabase } from 'lib/server/supabase'
import { nanoid } from 'nanoid'


export const updateHash = async ({ hash }) => {
  const newHash = nanoid(64)

  const { error } = await updateHashWithSupabase({ hash, newHash })

  return { error, newHash }
}
