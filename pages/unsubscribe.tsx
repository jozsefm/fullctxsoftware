import {useState, useCallback} from 'react'
import {
  Text,
  Heading,
  Flex,
  Spinner,
  Button
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Head from 'components/Head'
import { newsletterAction } from 'lib/services/newsletterClientService'
import { CustomLink } from 'components/CustomLink'

const errorMessage = {
  title: 'An unexpected issue happened in the system.',
  desc: 'Please try to use the link again in a few minutes and if the problem persists'
}

const ContentFooter = styled(Flex)`
  color: gray;
`

const marginTops = ['114px !important', '134px !important', '160px !important', '151px !important']

export default function Unsubscribe() {
  const [error, setErrorState] = useState(null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const onUnsubscribe = useCallback(() => {
    try { // url parsing might fail
      const { unsubToken, token } = getActionTokens()
      setLoading(true)
      newsletterAction('unsubscribe', unsubToken, token)
        .then((res) => {
          setLoading(false)
          setDone(true)
          const error = res.message !== 'OK' ? errorMessage : false
          if (error) {
            setErrorState(error)
          }
        })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        setDone(true)
        setErrorState(errorMessage)
      })

    } catch (error) {
      console.error(error)
      setLoading(false)
      setDone(true)
      setErrorState(errorMessage)
    }
    
  }, [])

  return (
    <>
      <Head title={`Confirm Subscription • Full Context Development`} />
      <Heading as="h1" size="lg" color='black' mb={['40px', '60px']} mt={marginTops}>
        {error ? 'UNSUBSCRIBING FAILED 😓' : !done || loading ? 'CANCEL SUBSCRIPTION' : 'SUBSCRIPTION CANCELLED 📪'}
      </Heading>
      {error && <>
        <Heading as="h2" size="md" color='black' mt='-20px' mb='40px' maxW='600px' textAlign='center' px='2%'>{error.title}</Heading>
        <Text mb='40px' maxW='600px' textAlign='center' px='2%'>
          {error.desc} contact <CustomLink to='/support'>Support</CustomLink>.
        </Text>
      </>}
      {(!error && !done && !loading) && <>
        <Heading as="h2" size="md" color='black' mt='-20px' mb='40px' maxW='600px' textAlign='center' px='2%'>If you've made your mind, what else could I do...</Heading>
        <Button colorScheme='blue' onClick={onUnsubscribe}>
          Goodbye Newsletter
        </Button>
      </>}
      {(!error && !done && loading) && <>
        <Spinner mb='10px' />
        <Text>👾 Erasing the existence of subscription is in progress</Text>
      </>}
      {(!error && done && !loading) && <>
        <Heading as="h2" size="md" color='black' mt='-20px' mb='10px' maxW='600px' textAlign='center' px='2%'>I'm sorry to see you go.</Heading>
        <Text mb='40px' maxW='600px' textAlign='center' px='2%'>
          Have a great time even without the newsletter!
        </Text>
      </>}
      <ContentFooter m='80px 10px'>
        <Flex maxW='600px' flexDir='column' alignItems='center'>
          <Text fontSize='0.8rem' textAlign='center'>You are always welcome to join the newsletter again. Just go to <CustomLink to='/#newsletter'>the homepage</CustomLink> and hit Subscribe.</Text>
        </Flex>
      </ContentFooter>
    </>
  )
}


const getActionTokens = () => {
  const url = new URL(window.location.href)
  const query: {
    unsubToken?: string
    token?: string
  } = {}
  for (let entry of url.searchParams.entries()) {
    query[entry[0]] = entry[1]
  }

  return query
}