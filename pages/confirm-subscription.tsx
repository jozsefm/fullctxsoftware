import {useState, useEffect} from 'react'
import {
  Text,
  Heading,
  Link,
  Flex,
  Spinner
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Head from 'components/Head'
import { newsletterAction } from 'lib/services/newsletterClientService'
import { CustomLink } from 'components/CustomLink'

const errorMessages = {
  1: {
    title: 'An unexpected issue happened on our side.',
    desc: 'Please try to use the link again in a few minutes and if the problem persists'
  },
  2: {
    title: 'This confirmation link was not recognized by our system.',
    desc: "You might be a victim of spam or a phising attack. It's a good idea to review where that link came from. We only use info@fullcontextdevelopment.com to send out messages. However if you think this is a fault on our side, please"
  },
  3: {
    title: 'This confirmation token is invalid.',
    desc: 'It might be already used or expired! If you disabled the use of cookies our system will not process the request. However if you think this is an issue on my side, please'
  }
}

const ContentFooter = styled(Flex)`
  color: gray;
`

const marginTops = ['114px !important', '134px !important', '160px !important', '151px !important']

export default function ConfirmSubscription() {
  const [error, setErrorState] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try { // url parsing might fail
      const { confirmToken, token } = getActionTokens()
      // TPDP do the confirmation and set progress statuses
      newsletterAction('confirmSubscribe', confirmToken, token)
        .then((res) => {
          setLoading(false)
          const error = errorMessages[res.message]
          if (error) {
            setErrorState(error)
          }
        })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        setErrorState(errorMessages[1])
      })

    } catch (error) {
      console.error(error)
      setLoading(false)
      setErrorState(errorMessages[1])
    }
    
  }, [])

  return (
    <>
      <Head title={`Confirm Subscription • Full Context Development`} />
      <Heading as="h1" size="lg" color='black' mb={['40px', '60px']} mt={marginTops} textAlign='center'>
        {loading ? 'CONFIRMING NEWSLETTER SUBSCRIPTION' : error ? 'CONFIRMING FAILED 😓' : 'SUBSCRIPTION CONFIRMED ✔️'}
      </Heading>
      {error
        ? <>
            <Heading as="h2" size="md" color='black' mt='-20px' mb='40px' maxW='600px' textAlign='center'  px='2%'>{error.title}</Heading>
            <Text mb='40px' maxW='600px' textAlign='center'  px='2%'>
              {error.desc} contact <CustomLink to='/support'>Support</CustomLink>.
            </Text>
          </>
        : loading
          ? <>
              <Spinner /><Text as='span'>in progress</Text>
            </>
          : <>
              <Heading as="h2" size="md" color='black' mb='40px' mt='-20px' maxW='600px' textAlign='center'>Thanks for your care!</Heading>
              <Text mb='40px' maxW='600px' px='2%'>
                I'm really thankful to you for taking the extra time and effort to confirm your address.
                This allows me to better protect my system from spam subscriptions!
                That was an awesome act of kindness! I can't wait to see you around in our communities or to hear from you through any channel!
              </Text>
              <Text mb='40px' maxW='600px' fontStyle='italic'>
                Best Regards,
                Joe
              </Text>
            </>
      }
      <ContentFooter m='80px 10px'>
        <Flex maxW='600px' flexDir='column' alignItems='center'>
          <Text fontSize='0.8rem' textAlign='center'><b>*</b>By subscribing to the newsletter you agreed to our <Link href='/legal/tos' color='#5b5eff'>Terms of Service</Link> and <Link href='/legal/privacy' color='#5b5eff'>Privacy Policy</Link>.</Text>
        </Flex>
      </ContentFooter>
    </>
  )
}


const getActionTokens = () => {
  const url = new URL(window.location.href)
  const query: {
    confirmToken?: string
    token?: string
  } = {}
  for (let entry of url.searchParams.entries()) {
    query[entry[0]] = entry[1]
  }

  return query
}