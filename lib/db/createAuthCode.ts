import { createAuthCodeWithSupabase } from 'lib/server/supabase'
import { customAlphabet } from 'nanoid/non-secure'

export const createAuthCode = async ({ hash }) => {
  const nanoid = customAlphabet('0123456789ASDFGHJKLQWERTYUIOPZXCVNM', 5)
  const authCode = nanoid()

  const { data, error } = await createAuthCodeWithSupabase({ hash, authCode })
  return { authCode: data?.[0], error }
}
