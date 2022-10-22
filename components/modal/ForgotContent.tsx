import { Ref, useCallback, useRef, useState } from 'react'
import styled from '@emotion/styled'
import {
  ModalContent,
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
  RadioGroup,
  Radio,
  Stack,
  Flex,
  useBreakpointValue,
  Box,
  Tooltip
} from '@chakra-ui/react'
import Image from 'next/image'
import { BsAt, BsBuilding } from 'react-icons/bs'
import { ModalViews } from '../../constants/singInModal'
import { useEmailValidation } from '../../hooks/useEmailValidation'
import { AdminCheckbox } from 'elements/AdminCheckbox'
import { VscOrganization } from 'react-icons/vsc'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { TextButtonsActiveStyles, TextButtonsFocusStyles, TextButtonsHoverStyles } from 'elements/Button'

const SendButtonHoverStyles = {
  bg: [
    'blue.100',
    'blue.100',
    'blue.600',
    'blue.600',
  ],
}

const ForgotModalContent = ({onNavigation}) => {
  const emailRef: Ref<HTMLInputElement> = useRef()
  const [ isEmailValid, _, setEmailValidity ] = useEmailValidation(emailRef)

  const onBackNavigation = useCallback(() => {
    onNavigation(ModalViews.SIGNIN_VIEW)
  }, [onNavigation])

  const onSendForgotRequest = useCallback(() => {
    const email = emailRef.current.value

    setEmailValidity()
    if (email && isEmailValid ) {
      onNavigation(ModalViews.CAPTCHA_VIEW, email, 'RESET')
    }
  }, [emailRef, isEmailValid, setEmailValidity, onNavigation])

  const resetEmailValidity = useCallback(() => {
    setEmailValidity({reset: true})
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

      <ModalBody mt='-10px'>
        <VStack justify='center' mb='-5px'>
          <Flex alignItems='center' mb='10px'>
            <Heading as='h3' size='sm' mr='10px'>LOST ACCESS LINK</Heading>
          </Flex>
          <Text fontSize='.81rem' textAlign='center'>Request a new one to your registered email address.</Text>
          <FormControl id="email" isRequired isInvalid={!isEmailValid}>
            <InputGroup mb='20px' mt='10px' mx='auto' maxW='300px'>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BsAt} w='1.2rem' h='1.2rem' color='gray.400' />}
              />
              <Input
                fontSize='0.9rem'
                backgroundColor='white'
                pr="1rem"
                type='email'
                placeholder="Email address"
                color='black'
                required
                ref={emailRef}
                onBlur={setEmailValidity}
                onFocus={resetEmailValidity}
              />
            </InputGroup>
            <FormErrorMessage justifyContent='center' >The email address is missing or invalid</FormErrorMessage>
          </FormControl>
          <Button
            size='sm'
            fontSize='1.1rem'
            w='100%'
            maxW='150px'
            h='40px'
            rounded='md'
            color={['white', 'white', 'white', 'white']}
            bg='#64acff'
            _hover={SendButtonHoverStyles}
            onClick={onSendForgotRequest}
          >
            Send
          </Button>
        </VStack>
      </ModalBody>

      <ModalFooter mb='5px'>
        <HStack justify='flex-start' w='100%' p='0 5px'>
          <Button
            size='sm'
            bg='transparent'
            onClick={onBackNavigation}
            _hover={TextButtonsHoverStyles}
            _focus={TextButtonsFocusStyles}
            _active={TextButtonsActiveStyles}>
            <Text fontSize={12} color='#6f6f6f;' fontWeight='bold'>&larr; Back</Text>
          </Button>
        </HStack>
      </ModalFooter>
    </>
  )
}

export default ForgotModalContent