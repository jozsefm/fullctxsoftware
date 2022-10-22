import { createNewEmailWithSupabase } from 'lib/server/supabase'

export const createNewEmail = async ({ hash, email, token }) => {
  const { error } = await createNewEmailWithSupabase({ hash, email, token })
  return { error }
}
