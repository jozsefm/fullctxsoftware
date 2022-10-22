import { ChakraProvider, theme } from '@chakra-ui/react';
import BookLayout from 'components/BookLayout';
import LocalSession from 'components/LocalSession';
import SiteLayout from 'components/SiteLayout';
import { BackgroundProvider } from 'contexts/BackgroundProvider';
import { BlogTOCProvider } from 'contexts/BlogTOCProvider';
import { CaptchaProvider } from 'contexts/CaptchaProvider';
import { HeaderProvider } from 'contexts/HeaderProvider';
import { MobileProvider } from 'contexts/MobileProvider';
import { NavigationProvider } from 'contexts/NavigationProvider';
import { UserProvider } from 'contexts/UserProvider';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useMemo } from 'react';
import 'styles/global.css';
import 'styles/notion.css';

const SEO = {
  openGraph: {
    images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/hotlink-ok/share.png',
        width: 1600,
        height: 900,
        alt: 'Full Context Software Development',
        type: 'image/png',
      },
    ],
    site_name: 'Full Context Development',
    type: 'website'
  },
  twitter: {
    handle: '@fullctxdev',
    site: '@fullctxdev',
    cardType: 'summary_large_image',
  }
}

function FullContextDevelopment({ Component, pageProps }) {
  const router = useRouter()
  const isBook = router.pathname.startsWith('/book')
  const Layout = useMemo(() => isBook ? BookLayout : SiteLayout, [isBook])

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0, width=device-width" />
      </Head>
        <Script defer data-domain="fullcontextdevelopment.com" data-api="/scripts/api/event" src="/scripts/js/ps.js" />
      <DefaultSeo {...SEO}/>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <CaptchaProvider>
            <MobileProvider>
              <BackgroundProvider>
                <NavigationProvider>
                  <HeaderProvider>
                    <BlogTOCProvider>
                      <LocalSession>
                        <Layout>
                          <Component {...pageProps} />
                        </Layout>
                      </LocalSession>
                    </BlogTOCProvider>
                  </HeaderProvider>
                </NavigationProvider>
              </BackgroundProvider>
            </MobileProvider>
          </CaptchaProvider>
        </UserProvider>
      </ChakraProvider>
    </>
  )
}

export default FullContextDevelopment
