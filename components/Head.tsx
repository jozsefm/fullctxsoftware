import Head from 'next/head'

export default function SiteHead({title = 'Full Context Development', children = null}) {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  )
}