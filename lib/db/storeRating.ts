import { storeRatingWithSupabase } from 'lib/server/supabase'

export type RatingParams = {
  chapter: string
  rating: number
  sessionId: string
}

export const storeRating = async (params: RatingParams) => {
  const { error } = await storeRatingWithSupabase(params)
  return { error }
}
