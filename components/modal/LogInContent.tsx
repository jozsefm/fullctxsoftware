import styled from '@emotion/styled'
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  VStack,
  Text,
  Heading,
  FormControl,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  FormErrorMessage,
  Button,
  Box,
  Tooltip,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react'
import Image from 'next/image'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Ref, useCallback, useRef, useState, useContext, useEffect } from 'react'
import { ModalViews } from 'constants/singInModal'
import { login } from 'lib/services/sessionClientService'
import { UserContext } from 'contexts/UserProvider'
import { SESSION_ERROR, statusMap } from 'lib/services/sessionResponseHelper'
import { AdminCheckbox } from 'elements/AdminCheckbox'
import { TextButtonsActiveStyles, TextButtonsFocusStyles, TextButtonsHoverStyles } from 'elements/Button'
import { useRouter } from 'next/router'
import { HiLink } from 'react-icons/hi'
import { FiCheckCircle } from 'react-icons/fi'
import { deleteHash, getHash, storeHash } from 'lib/client/localStorage'

const SendButtonHoverStyles = {
  bg: [
    'blue.100',
    'blue.100',
    'blue.600',
    'blue.600',
  ],
}

const ErrorMessage = styled(Text)`
  &::after{
    content: '';
    display: block;
    width: 55px;
    position: absolute;
    left: 4.5vw;
    bottom: 23px;
    border-bottom: 17px solid #ffb6b6;
    z-index: -1;
    transform: skewX(-15deg);
  }

  &.other-error::after {
    content: none;
  }
`

const LogInModalContent = ({ onNavigation, onModalClose }) => {
  const { setLoggedIn } = useContext(UserContext)
  const [urlValid, setHashValid] = useState(true)
  const [remember, setRemember] = useState(true)
  const [hashCode, setHashCode] = useState(null)
  const [storedHash, setStoredHash] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loginProgress, setLoginProgress] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(true)
  const hashRef: Ref<HTMLInputElement> = useRef()
  const router = useRouter()
  const tooltipStart: any = useBreakpointValue({ base: 'auto-end', md: 'right-end' })

  const onForgotNavigation = useCallback(() => {
    onNavigation(ModalViews.FORGOT_VIEW)
  }, [onNavigation])

  const onSend = useCallback(async () => {
    setErrorMessage('')
    if (hashCode) {
      setLoginProgress(true)
      if (remember) {
        storeHash(hashCode)
      }
      const { status, message } = await login({hash: hashCode})
      setLoginProgress(false)
      if (status === statusMap.LOGGEDIN) {
        setLoginSuccess(true)
        setLoggedIn(true)
        onModalClose()
      } else if (status === statusMap.ERROR) {
        setErrorMessage(message)
      }
    }
  }, [hashCode, onModalClose, router, remember])

  const onCheckboxChange = useCallback((event) => {
    const checked = event.target.checked
    if (!checked) {
      deleteHash()
      setHashCode(null)
      hashRef.current.value = ''
      setStoredHash(false)
    }
    setRemember(event.target.checked)
  }, [])

  const toggleTooltip = useCallback(() => {
    setIsTooltipOpen(!isTooltipOpen)
  }, [isTooltipOpen])

  const openTooltip = useCallback(() => {
    setIsTooltipOpen(true)
  }, [])

  const closeTooltip = useCallback(() => {
    setIsTooltipOpen(false)
  }, [])

  const setHashValidity = useCallback(() => {
    const linkOrCode = hashRef.current?.value
    if (!linkOrCode || !linkOrCode.length) {
      return setHashValid(false)
    }
    const parts = linkOrCode.split('/')
    const code = parts[parts.length - 1]
    setHashCode(code)
    return setHashValid(code.length === 64)
  }, [hashRef])

  const resetHashValidity = useCallback(() => {
    setHashValid(true)
  }, [])

  useEffect(() => {
    const hash = getHash()
    if (hash) {
      hashRef.current.value = hash
      setHashCode(hash)
      setStoredHash(true)
    }
    setLoginSuccess(false)
  }, [])
  
  return (
    <>
      <ModalHeader>
        <ModalCloseButton />
        <HStack justify='center' >
          <Image src='/img/fullctx-full.svg'
            alt='The logo of full context development. A frame that represents the context sorrounding development.'
            width={22}
            height={22}
            priority
          />
          <Text fontWeight='500' fontFamily='Rubik, Helvetica Neue, Helvetica, Arial, sans-serif;' letterSpacing='-.015em'>Full Context Development</Text>
        </HStack>
      </ModalHeader>

      <ModalBody mt='-15px'>
        <VStack justify='center' mb='-5px'>
          <Heading as='h3' size='sm' >LOG IN</Heading>
          <form autoComplete='on'>
            <FormControl id="link" isRequired isInvalid={!urlValid}>
              <InputGroup mt='20px' mb='15px'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={HiLink} w='1.2rem' h='1.2rem' color='gray.400' />}
                />
                <Input
                  fontSize='0.9rem'
                  minW='300px'
                  backgroundColor='white'
                  pr="1rem"
                  type={storedHash ? 'password' : 'text'}
                  placeholder="Access link/code"
                  color='black'
                  required
                  ref={hashRef}
                  onFocus={resetHashValidity}
                  onBlur={setHashValidity}
                />
              </InputGroup>
              <FormErrorMessage mb='10px'>The access link/code is invalid or missing</FormErrorMessage>
            </FormControl>
            {Boolean(errorMessage) && (<Box mb='0.5rem' textAlign='center' pos='relative'>
              <ErrorMessage 
                color='#000' 
                fontWeight='bold' 
                fontSize='0.9rem' 
                className={errorMessage !== SESSION_ERROR ? 'other-error' : null}>
                {errorMessage}
              </ErrorMessage>
            </Box>)}
            <Box w='100%' mb='15px'>
              <AdminCheckbox color='#6f6f6f' isChecked={remember} onChange={onCheckboxChange} mr='5px'>Remember me</AdminCheckbox>
              <Tooltip
                label="Check this if you want to store your access code in the browser for later use."
                aria-label="A tooltip saying: Check this if you want to store your access code in the browser for later use."
                fontSize="sm"
                placement={tooltipStart}
                closeOnClick
                isOpen={isTooltipOpen}>
                <Button
                  as={InfoOutlineIcon}
                  onClick={toggleTooltip}
                  onMouseEnter={openTooltip}
                  onMouseLeave={closeTooltip}
                  width='15px'
                  minWidth='15px'
                  padding='0'
                  height='15px'
                  backgroundColor='transparent'
                />
              </Tooltip>
            </Box>
            <Flex w='100%' justify='center'>
              <Button
                size='sm'
                fontSize='1.1rem'
                w='100%'
                maxW='150px'
                m='0 auto'
                h='40px'
                rounded='md'
                color={['white', 'white', 'white', 'white']}
                bg='#64acff'
                _hover={SendButtonHoverStyles}
                onClick={onSend}
                isLoading={loginProgress}
                loadingText="Signing in"
                leftIcon={loginSuccess ? <Icon as={FiCheckCircle}/>: null}
              >
                {loginSuccess ? 'Success' : "Let's go"}
              </Button>
            </Flex>
          </form>
        </VStack>
      </ModalBody>

      <ModalFooter mb='5px'>
        <HStack justify='center' w='100%' p='0 5px'>
          <Button
            size='sm'
            bg='transparent'
            onClick={onForgotNavigation}
            _hover={TextButtonsHoverStyles}
            _focus={TextButtonsFocusStyles}
            _active={TextButtonsActiveStyles}>
            <Text fontSize={12} color='#6f6f6f;' fontWeight='bold'>Need a new access link?</Text>
          </Button>
        </HStack>
      </ModalFooter>
    </>
  )
}

export default LogInModalContent
