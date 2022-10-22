import { deleteNewsletterSubscriptionWithSupabase } from 'lib/server/supabase'

export const deleteNewsletterSubscription = async ({ email, unsubToken }: { email?: string, unsubToken?: string }) => {
  const { data, error } = await deleteNewsletterSubscriptionWithSupabase({ email, unsubToken })
  return { subscription: data?.[0], error }

}
