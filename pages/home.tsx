import { Flex, Text, Icon, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import withSession, { SSRHandlerWithSession } from 'lib/server/withSession'
import { getSession } from 'lib/db/getSession'
import { HiBookOpen } from 'react-icons/hi'
import { News } from 'components/News'
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'
import { heartbeat } from 'lib/services/sessionClientService'
import { UserContext } from 'contexts/UserProvider'

export const getServerSideProps = withSession(async function (props) {
  const { req, res } = props
  try {
    const sessionId = req.session?.get('session')
    if (sessionId === undefined) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }

    if (sessionId) {
      const { hash } = await getSession({ sessionId })
      if (!hash) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
    }
    const validate = req.url.split('action=')[1] === 'validate'
    return { props: { validate } }
  } catch (error) {
    console.error('Home rendering issue: ', error)
    res.statusCode = 500
    return { props: { error: true } }
  }
} as SSRHandlerWithSession)

const PageWrapper = styled(Flex)`
  .heading-text {
    box-decoration-break: clone;
    -webkit-text-fill-color: transparent;
  }
`
const marginTop = ['87px !important', '87px !important', '100px !important', '91px !important']
const headingMts = { base: null, lg: '25px' }
const insideFontSizes = ['2.7rem', '2.9rem', '60px', '70px']
const headingLh = ['2.8rem', '3.1rem', '68px', '83px']

const homeSEO = {
  title: "User Homepage • Full Context Development",
  description: "The homepage of Full Context Software Development",
  canonical: 'https://www.fullcontextdevelopment.com/home',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com',
    title: 'User Homepage • Full Context Development',
    description: "Learn to write code that makes money - the software engineer's guide to hack profits.",
  },
}

export default function Homepage({ validate }) {
  const { setLoggedIn, setLoggedOut } = useContext(UserContext)

  useEffect(() => {
    if (validate) {
      heartbeat()
        .then(({ loggedIn }) => {
          if (loggedIn !== 'keep') {
            loggedIn === true ? setLoggedIn(true) : setLoggedOut(false, false)
          }
        })
        .finally(() => {
          window.sessionStorage.setItem('pulse', 'true')
        })
    }
  }, [])

  return (
    <PageWrapper
      h='auto'
      w='100%'
      minH='100vh'
      mb='100px'
      mt={marginTop}
      bg='black'
      direction='column'
      align='center'
      fontFamily='Inter,"Trebuchet MS",Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
    >
      <NextSeo {...homeSEO} />
      <Heading
        as='h1'
        mt={headingMts}
        color='transparent'
        textAlign='center'
        letterSpacing='1px'
        lineHeight={headingLh}
        fontSize={insideFontSizes}
        fontWeight='700'
        textDecoration='none'
        bg='linear-gradient(-70deg,#a2facf,#64acff)'
        bgClip='text'
        className='heading-text'
        zIndex='1'
      >
        Welcome inside
      </Heading>
      <Flex direction='column' w='100%' mt='50px' color='#64acff'>
        <Flex direction='row' w='100%' justify='center'>
          <Flex as='a' href='/book' justify='center' align='center' color='#64acff' border='3px solid #64acff' py='1' px='2' borderRadius='8' h='50px'>
            <Icon fontSize='2.5rem' as={HiBookOpen} mr='10px'/>
            <Text textAlign='center' fontSize='1.2rem'>
              Go to the book ➞
            </Text>
          </Flex>
        </Flex>
        <Flex direction='row' w='100%' mt='30px' color='#7eb1ea' justify='center'>
          <Flex justify='center'><Text mt='25px'>CHECK THE LATEST FULL CONTEXT NEWS</Text></Flex>
        </Flex>
        <Flex direction='row' w='100%' mt='30px' color='#7eb1ea' justify='center'>
          <News />
        </Flex>
      </Flex>
    </PageWrapper>
  )
}