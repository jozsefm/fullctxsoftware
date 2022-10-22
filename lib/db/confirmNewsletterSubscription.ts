import { confirmNewsletterSubscriptionWithSupabase } from 'lib/server/supabase'

export const confirmNewsletterSubscription = async ({ confirmToken }) => {
  const { data, error } = await confirmNewsletterSubscriptionWithSupabase({ confirmToken })
  return { subscription: data?.[0], error }
}
