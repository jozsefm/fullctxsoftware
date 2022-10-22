import { signupUserWithSupabase } from 'lib/server/supabase'
import { nanoid } from 'nanoid'

export interface PartialSignupParams {
  email: string
  name: string
  type?: 'team' | 'personal'
  checkoutId: string
  team?: string
  role?: string
  sessionLimit: number
  discordInvite?: string
}

export interface SignupParams extends PartialSignupParams {
  hash: string
}

export const signupUser = async ({...params}: PartialSignupParams) => {
  const hash = nanoid(64)

  const { data, error } = await signupUserWithSupabase({ hash, ...params })
  if (error) {
    return { error }
  }
  return {
    user: data[0]
  }
}
