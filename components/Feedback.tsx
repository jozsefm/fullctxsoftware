import { Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Flex,
  Icon,
  Text,
  Textarea,
  Link,
  SlideFade,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaReddit } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { sendMessage, sendRating } from 'lib/services/feedbackClientService'
import { RiMailSendFill } from 'react-icons/ri'
import { getLocalDarkMode } from 'lib/client/localStorage'
import useDarkMode from 'use-dark-mode'

const onFaceHover = {
  filter: 'grayscale(0)',
  transform: 'scale(1.1)'
}

const feedbackWrapperMinW = {
  base: '330px',
  md: '450px'
}

const feedbackTextMaxW = {
  base: '360px',
  md: '405px',
}

const inputPlaceholderStyles = {
  color: 'var(--color)'
}

let timeoutStart

export const Feedback = ({ chapter, loggedIn = false, footer = false }) => {
  const [selected, setSelected] = useState(null)
  const [hideText, setHideText] = useState(false)
  const [sending, setSending] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const messageRef: Ref<HTMLTextAreaElement> = useRef()
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

  const onMessageChange = useCallback(({ target }) => {
    if (target?.value?.length < 10) {
      setEnabled(false)
    } else {
      setEnabled(true)
    }
  }, [])

  const onSendMessage = useCallback(() => {
    setSending(true)
    setTimeout(() => {
      setHideText(true)
      setSending(false)
    }, 1000)
    sendMessage({ chapter, message: messageRef.current.value })
  }, [chapter])

  const reactionHandlers = useMemo(() => {
    return [1, 2, 3, 4].reduce((handlers, rating) => {
      handlers[rating] = () => {
        setSelected(rating)
        timeoutStart = Date.now()
        let ownId = setTimeout(() => {
          if (Date.now() - timeoutStart < 4000) {
            clearTimeout(ownId)
          } else {
            sendRating({ rating, chapter })
          }
        }, 4000)
      }
      return handlers
    }, {})
  }, [chapter])

  return (
    <Flex direction='column' w={footer ? '90%' : '100%'} align='center' mb={footer? '30px' : null} justify='center' zIndex={repaint ? 1 : 2}>
      <Text textAlign='center' mb='30px'>
        How did you like this chapter{!footer ? ' so far' : ''}?
      </Text>
      <Flex w='100%' justify='center' fontSize={`${footer ? '1.65' : '2'}rem`}>
        <Text as='button' filter='grayscale(1)' style={selected === 1 ? onFaceHover : null} _hover={onFaceHover} _focus={onFaceHover} onClick={reactionHandlers[1]} mr='15px'>
          😭
        </Text>
        <Text as='button' filter='grayscale(1)' style={selected === 2 ? onFaceHover : null} _hover={onFaceHover} _focus={onFaceHover} onClick={reactionHandlers[2]} mr='15px'>
          🤔
        </Text>
        <Text as='button' filter='grayscale(1)' style={selected === 3 ? onFaceHover : null} _hover={onFaceHover} _focus={onFaceHover} onClick={reactionHandlers[3]} mr='15px'>
          🙂
        </Text>
        <Text as='button' filter='grayscale(1)' style={selected === 4 ? onFaceHover : null} _hover={onFaceHover} _focus={onFaceHover} onClick={reactionHandlers[4]}>
          🤩
        </Text>
      </Flex>
      
      {loggedIn && !hideText && <SlideFade in={!hideText} delay={0.18}>
        <Flex direction='column' minW={feedbackWrapperMinW} align='center'>
          <Textarea
            maxW={feedbackTextMaxW}
            w='100%'
            placeholder="Would you like to share your thoughts? Let me know! There's only one rule. It has to be between 10 and 500 characters."
            size="sm"
            resize='none'
            maxLength={500}
            minHeight='90px'
            borderRadius='md'
            zIndex={repaint ? 1 : 2}
            bg={footer ? (darkMode.value ? '#0000002e' : '#f5f5f5a1') : 'white'}
            mt='30px'
            ref={messageRef}
            onChange={onMessageChange}
            _placeholder={inputPlaceholderStyles}
          />
          {(footer && enabled) || !footer ?
            <Button variant={footer? 'outline' : 'ghost'} colorScheme={footer? 'blue' : 'green'} size='sm' mt='20px' bg={footer? 'transparent' : 'white'} onClick={onSendMessage} leftIcon={<Icon fontSize='1rem' as={RiMailSendFill}/>} isLoading={sending} disabled={!enabled}>
              Send message
            </Button>
          : null}
        </Flex>
      </SlideFade>}
      {loggedIn && hideText && <SlideFade in={hideText} delay={0.18}>
        <Flex direction='column' minW={feedbackWrapperMinW} align='center'>
          <Text textAlign='center' maxW='350px' mb='20px' mt='30px' fontWeight='bold'>
            Thank you for your feedback! <br /> It means a lot to me!
          </Text>
        </Flex>
      </SlideFade>}
      {!footer && <Flex direction='column' align='center' justifý='center' maxW='390px' m='20px auto 0 auto'>
        <Text textAlign='center' mb='15px'>We can talk at other places too:</Text>
        <Flex pos='relative' left='8px'>
          {loggedIn && <Link
            href='https://discord.com/channels/720263958262710332'
            target='_blank'
            bg={`url(/img/discord-dark.svg) 50% no-repeat`}
            w='99px'
            h='27px'
            backgroundSize='88px 27px'
            display='inline-block'
            mr='10px'
          ></Link>}
          <Link href='https://twitter.com/fullctxdev' as={NextLink} passHref mb='10px'>
            <Text as='a' fontSize='1rem' display='flex' alignItems='center' target='_blank' minW='99px'>
              <Icon as={IoLogoTwitter} color='rgb(29, 161, 242)' fontSize='1.5rem' mr='5px' ml='5px' filter='saturate(70%)' />
              <Text fontSize='1rem' mr='10px'>Twitter</Text>
            </Text>
          </Link>
          <Link href='https://www.reddit.com/r/fullcontextdev' as={NextLink} passHref mb='10px'>
            <Text as='a' fontSize='1rem' display='flex' alignItems='center' target='_blank' minW='99px'>
              <Icon as={FaReddit} color='#FF4500' fontSize='1.5rem' mr='5px' ml='5px' filter='saturate(70%)' />
              <Text fontSize='1rem' mr='10px'>Reddit</Text>
            </Text>
          </Link>
        </Flex>
      </Flex>}
    </Flex>
  )
}