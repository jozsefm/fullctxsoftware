import { storeMessageWithSupabase } from 'lib/server/supabase'

export type MessageParams = {
  chapter: string
  message: string
  sessionId: string
}

export const storeMessage = async (params: MessageParams) => {
  const { error } = await storeMessageWithSupabase(params)
  return { error }
}
