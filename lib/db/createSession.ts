import { createSessionWithSupabase } from 'lib/server/supabase'
import { nanoid } from 'nanoid'


export const createSession = async ({ hash }) => {
  const sessionId = nanoid()

  const { data, error } = await createSessionWithSupabase({ hash, sessionId })
  return { session: data && data.length && data[0], error }
}
