import { storeAnswerWithSupabase } from 'lib/server/supabase'

export type AnswerParams = {
  question: string
  answer: string
  sessionId: string
}

export const storeAnswer = async (params: AnswerParams) => {
  const { error } = await storeAnswerWithSupabase(params)
  return { error }
}
