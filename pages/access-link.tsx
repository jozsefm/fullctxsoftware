import { Flex, Text, Icon, Code } from '@chakra-ui/react'
import { CustomLink } from 'components/CustomLink'
import Head from 'components/Head'
import { useMemo } from 'react'
import { FaUnlink } from 'react-icons/fa'
import {  GiMineExplosion } from 'react-icons/gi'
import { FiCheckCircle } from 'react-icons/fi'
import NextLink from 'next/link'

const titleM = { base: '60px auto 25px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const textW90 = {base: '90%', md: '100%'}
const textP20 = {base: '0 20px', md: '0'}
const introIconFs = {base: '2rem', md: '3rem'}
const introHeaderFs = {base: '1.3rem', md: '1.6rem'}
const introTextFs = {base: '1rem', md: '16px'}

export default function AccessLink() {
  const { state, hash } = useMemo(() => {
    const { state, hash } = getQueryParams()
    let decodedHash = null
    try {
      decodedHash = atob(decodeURIComponent(hash))
    } catch (error) {
      console.error(error)
    }
    return { state, hash: decodedHash }
  }, [])

  const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

  return (
    <>
      <Head title='New Access Link • Full Context Development'/>
      <Flex
        h='auto'
        w='100%'
        direction='column'
        align='center'
        fontFamily='Inter,"Trebuchet MS",Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
        mt={marginTops}
      >
        <Text
          textAlign='center'
          fontSize={sloganFontSize}
          color='black'
          lineHeight='1.2'
          m={titleM}
          w='80%'
          minW='270px'
          textTransform='uppercase'
          letterSpacing='0.08rem'
          textShadow='0px 0px 6px #00000038'
        >
          {(state === 'success' && hash) ? 'Your ' : null }New Access Link
        </Text>

        <Flex maxW='620px' direction='column' align='center' mb='50px' id='list'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='15px'>
            <Icon as={state !== 'success' ? state === 'expired' ? FaUnlink : GiMineExplosion : FiCheckCircle} />
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            {state !== 'success' ? state === 'expired'  ? 'This link has already expired' : 'Something went wrong' : "Is ready"}
          </Text>
          {state !== 'success' ?
            state === 'expired'
            ? <Text textAlign='center' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={textP20} >
                The reset links are only good for an hour. Please requeset a new one.
              </Text>
            : <Text textAlign='center' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={textP20} >
                It seems the system has run into some issues processing your request. Please try again, maybe even from the start
                and if the problem doesn't go away <CustomLink to='/support'>contact support</CustomLink>.
              </Text>
            : <>
              <Text textAlign='center' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={textP20} >
                You can use it to log in right now. It's also sent to your email.
              </Text>
              <Code p='20px' mt='20px'><NextLink href={`/api/auth/${hash}`}>{`https://www.fullcontextdevelopment.com/api/auth/${hash}`}</NextLink></Code>
            </>
          }
        </Flex>
      </Flex>
    </>
  )
}

const getQueryParams = () => {
  if (process.browser) {
    const url = new URL(window.location.href)
    const query: {
      state?: string,
      hash?: string
    } = {}
    for (let entry of url.searchParams.entries()) {
      query[entry[0]] = entry[1]
    }
  
    return query
  }
  return {
    state: '',
    hash: ''
  }
}