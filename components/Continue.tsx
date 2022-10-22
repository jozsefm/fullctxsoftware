import { Flex, Text, Icon, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { VscUnlock } from 'react-icons/vsc'
import { LinkButton } from 'elements/Button'
import { useEffect, useMemo, useState } from 'react'
import { getLocalDarkMode } from 'lib/client/localStorage'
import useDarkMode from 'use-dark-mode'

const lightAlt = {
  backgroundColor: '#ccc',
  borderColor: '#aaa'
}
const darkAlt = {
  backgroundColor: 'black'
}

export const ContinueReading = () => {
  const [repaint, triggerRepaint] = useState(false)
  const isDark = useMemo(() => {
    const systemSetting = process.browser ? window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false : false
    const userSetting = process.browser ? getLocalDarkMode() : null // local storage also returns null if the value is not found
    return userSetting !== null ? userSetting === 'true' : systemSetting
  }, [])

  const darkMode = useDarkMode(isDark)

  useEffect(() => {
    // this is a hack to force a redrawing of the page with the correct darkMode value
    // because that doesn't happen automatically for some reason
    triggerRepaint(true)
  }, [])

  return (
    <Flex direction='column' justify='flex-start' align='center' color={darkMode.value ? '#f9f9f9' : '#2f3437'} textOverflow={repaint ? 'unset' : 'initial'}>
      <Text textAlign='center' p='0 25px 0 25px' maxW='680px' fontSize='1.6rem' lineHeight='2.1rem'>
        I'm really happy that you're interested in learning more about Full Context Software Development!
      </Text>
      <Text textAlign='center' m='20px 0' maxW='680px' fontSize='2rem' >🔏</Text>
      <Text textAlign='start' p='0 30px 0 45px' maxW='680px'>
        This part of the book however is not available for free. Consider buying an account to access it or if
        you want to enjoy similar content check out the blog or the (upcoming) Youtube channel. I hope to see you around in our communities!
      </Text>
      <LinkButton
        lh='38px'
        pl='30px'
        variant='outline'
        textAlign='center'
        color={darkMode.value ? '#d6d6d6' : '#777'}
        fontWeight='500'
        fontSize='1rem'
        mt='50px'
        shadow='xl'
        bg={darkMode.value ? '#171717' : '#f5f5f5'}
        borderColor={darkMode.value ? '#171717' : '#e0e0e0'}
        minW='280px'
        _hover={darkMode.value ? darkAlt : lightAlt}
        _focus={darkMode.value ? darkAlt : lightAlt}
      >
        <Icon
          as={VscUnlock}
          fontSize='1.3rem'
          pos='absolute'
          top='8px'
          bottom='0'
          left='30px'
        />
        <Link
          href='/signup'
          as={NextLink}
        >UNLOCK THE FULL BOOK</Link>
      </LinkButton>
    </Flex>
  )
}

export default ContinueReading