import { Flex, Heading, Text, Icon, useBreakpointValue, Button, FormControl, InputGroup, Input, FormErrorMessage, useToast, Link } from '@chakra-ui/react'
import withSession, { SSRHandlerWithSession } from 'lib/server/withSession'
import Head from 'components/Head'
import { Ref, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { IoPersonOutline, IoTrashBinSharp } from 'react-icons/io5'
import { UserContext } from 'contexts/UserProvider'
import { cancelEmailChange, deleteAccount, updateEmailAddress, updateUserName } from 'lib/services/profileClientService'
import { BiEdit, BiIdCard, BiQuestionMark } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { ActionButton } from 'elements/Button'
import { VscAccount } from 'react-icons/vsc'
import { ConfirmAction } from 'components/ConfirmAction'
import { useEmailValidation } from 'hooks/useEmailValidation'
import { ImCancelCircle } from 'react-icons/im'
import { FiCheckCircle } from 'react-icons/fi'
import { ControlledTooltip } from 'components/ControlledTooltip'
import { Explanation } from 'components/Explanation'
import { SiDiscord } from 'react-icons/si'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { getSession } from 'lib/db/getSession'
import { getLogger } from 'lib/server/logger'
import { getUser } from 'lib/db/getUser'
import { CustomLink } from 'components/CustomLink'
import { getUpdate } from 'lib/db/getUpdate'

export const getServerSideProps = withSession(async function (props) {
  const { req } = props
  const sessionId = req.session.get('session')
  
  if (sessionId === undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const logger = getLogger({ worker: 'PROFILE_SSR', action: 'fetch-profile', dbSession: sessionId }) // getSession uses the 'pushLog' that needs an existing global logger
  
  const { hash, error } = await getSession({ sessionId })

  if (error) {
    await logger.send({ message: 'Failed to render Profile', severity: 'ERROR' })
    return {
      props: {
        error: true
      }
    }
  }

  const result = await getUser({ hash, info: true })
  if (result.error) {
      return {
        props: {
          data: {},
          error: true
        }
      }
  }
  const { user } = result
  const authorized = req.session.get('team-auth')

  if (user.role === 'personal' || authorized) {
    let newEmail = null
    if (user.updateToken) {
      const { update, error } = await getUpdate({ token: user.updateToken })

      if (error) {
        await logger.send({ message: 'Failed to render Profile', error })
        return {
          props: {
            data: {},
            error: true
          }
        }
      }

      if (!update) { // it is an inconsistent state that should not happen.
        await logger.send({ message: 'No update found for update-token in User record', token: user.updateToken, severity: 'ERROR' })
        newEmail = null
      } else {
        const { new: address } = update
        newEmail = address
      }
    }
      
    return {
      props: {
        data: {
          name: user.name || null,
          email: user.email  || null,
          type: user.role || null,
          size: user.sessionLimit ? user.sessionLimit / 2 : null,
          invite: user.discordInvite || null,
          newEmail
        }
      }
    }
  } else if (user.role === 'team') {
      return {
        redirect: {
          destination: '/team-auth',
          permanent: false,
        }
      }
  }
} as SSRHandlerWithSession)

const deleteButtonHoverStyles = {
  opacity: 1,
  color: 'red.500',
  borderColor: 'red.500'
}

const errorTA: any = { base: 'start', md: 'center' }
const pageMaxW = { base: '100%', md: null }
const pageMinW = { base: null, md: '790px' }
const pagePaddingX = { base: '2', md: '0' }
const contentPl = { base: '10px', md: '20px' }
const buttonsMinW = { base: '70px', md: '80px' }

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function MyAccount({ data, error }) {
  const [ profile, setProfile ]: [any, any] = useState(error ? {} : {
    name: data.name,
    email: data.email,
    type: data.type,
    size: data.size || 'FAILED TO LOAD',
    newEmail: data.newEmail
  })
  const { setLoggedOut } = useContext(UserContext)
  const nameRef: Ref<HTMLInputElement> = useRef()
  const emailRef: Ref<HTMLInputElement> = useRef()
  const tooltipStart: any = useBreakpointValue({ sm: 'auto-end', md: 'right-end' })
  const [ editingName, setEditingName ] = useState(false)
  const [ editingEmail, setEditingEmail ] = useState(false)
  const [ isNameValid, setIsNameValid ] = useState(true)
  const [ isNameValidated, setIsNameValidated ] = useState(false)
  const [ isEmailValid, isEmailValidated, setEmailValidity ] = useEmailValidation(emailRef)
  const [ savingName, setSavingName ] = useState(false)
  const [ savingEmail, setSavingEmail ] = useState(false)
  const [ deletingUser, setDeletingUser ] = useState(false)
  const [ cancellingEmail, setCancellingEmail ] = useState(false)
  const toast = useToast()

  // This maxW sets the width of the whole page.
  const DeleteAccountRenderFn = useCallback(onClick => (
    <Flex direction='column' align='center' maxW='420px'>
      <Button
        maxW='150px'
        minH='32px'
        mb='10px'
        leftIcon={<IoTrashBinSharp fontSize='1.4rem' />}
        variant='outline'
        size='sm'
        colorScheme='gray'
        opacity='0.5'
        _hover={deleteButtonHoverStyles}
        onClick={onClick}
        isLoading={deletingUser}
      >Delete Account</Button>
      {profile.type === 'team' && <Text fontSize='0.85rem' pl='15px'>
        You can transfer your account to another person instead of deleting it by
        changing the email address to theirs. After confirming the address they can request
        a new access link through the Login menu -&gt; Need a new access link? functionality.
      </Text>}
    </Flex>
  ), [profile, deletingUser])

  const EditNameRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      leftIcon={<BiEdit fontSize='1.4rem' />}
      variant='outline'
      size='sm'
      colorScheme='green'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onEditName}
    />
  }, [])

  const SaveNameChangesRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      leftIcon={<FiCheckCircle fontSize='1.2rem' />}
      variant='outline'
      size='sm'
      colorScheme='green'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onSaveName}
      disabled={!isNameValid || !isNameValidated}
      isLoading={savingName}
    />
  }, [isNameValidated, isNameValid, savingName])
  
  const CancelNameChangesRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      leftIcon={<ImCancelCircle fontSize='1.2rem' />}
      variant='outline'
      size='sm'
      colorScheme='black'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onCancelEditName}
    />
  }, [])
  
  const EditEmailRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      leftIcon={<BiEdit fontSize='1.4rem' />}
      variant='outline'
      size='sm'
      colorScheme='green'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onEditEmail}
    />
  }, [])
  
  const SaveEmailChangesRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      leftIcon={<FiCheckCircle fontSize='1.2rem' />}
      variant='outline'
      size='sm'
      colorScheme='green'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onSaveEmail}
      disabled={!isEmailValid || !isEmailValidated}
      isLoading={savingEmail}
    />
  }, [isEmailValidated, isEmailValid, savingEmail])
  
  const CancelEmailChangesRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      leftIcon={<ImCancelCircle fontSize='1.2rem' />}
      variant='outline'
      size='sm'
      colorScheme='black'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onCancelEditEmail}
    />
  }, [])

  const CancelChangingEmailRenderFn = useCallback((openTooltip, closeTooltip) => {
    return <ActionButton
      {...(cancellingEmail ? { isLoading: true} : null)}
      leftIcon={<ImCancelCircle fontSize='1.2rem' />}
      variant='outline'
      size='sm'
      colorScheme='black'
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onClick={onCancelEmailChange}
    />
  }, [cancellingEmail])

  const ExplainRenderFn = useCallback((openPopup) => {
    return <ActionButton
      leftIcon={<BiQuestionMark fontSize='1.3rem' />}
      variant='outline'
      size='sm'
      colorScheme='black'
      onClick={openPopup}
    />
  }, [])

  const onDeleteAccount = useCallback(async () => {
    setDeletingUser(true)
    const { error } = await deleteAccount()
    setDeletingUser(false)

    if (error) {
      toast({
        title: 'Failed to delete your account',
        description: 'Please try again later! If the problem persists contact support!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    setLoggedOut()
  }, [])
  
  const onEditName = useCallback(() => { setEditingName(true) }, [])
  const onEditEmail = useCallback(() => { setEditingEmail(true) }, [])
  
  const onCancelEditName = useCallback(() => { setEditingName(false) }, [])
  const onCancelEditEmail = useCallback(() => { setEditingEmail(false) }, [])
  
  const onSaveName = useCallback(async () => {
    setSavingName(true)
    const name = nameRef.current.value
    const { error } = await updateUserName(name)
    if (error) {
      toast({
        title: 'Failed to update name',
        description: 'Please try again later! If the problem persists contact support!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      setProfile({
        ...profile,
        name,
      })
    }
    setSavingName(false)
    setEditingName(false)
  }, [profile])

  const onSaveEmail = useCallback(async () => {
    setSavingEmail(true)
    const email = emailRef.current.value
    const { message } = await updateEmailAddress(email)
    if (message) {
      toast({
        title: 'Failed to update email address',
        description: `${message ? message : 'Please try again later! If the problem persists contact support!'}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      setProfile({
        ...profile,
        newEmail: email
      })
    }
    setSavingEmail(false)
    setEditingEmail(false)
  }, [profile])

  const onCancelEmailChange = useCallback(async () => {
    setCancellingEmail(true)
    const { message } = await cancelEmailChange()
    if (message) {
      toast({
        title: 'Failed to revert email address',
        description: `${message ? message : 'Please try again later! If the problem persists contact support!'}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      const { newEmail, ...updatedProfile } = profile
      setProfile(updatedProfile)
    }
    setCancellingEmail(false)
  }, [])

  useEffect(() => {
    if (editingEmail) {
      emailRef.current.value = profile.newEmail || profile.email
    } else {
      setEmailValidity({ reset: true })
    }
  }, [editingEmail, emailRef, profile])
  
  useEffect(() => {
    if (editingName) {
      nameRef.current.value = profile.name
    } else {
      setIsNameValid(true)
      setIsNameValidated(false)
    }
  }, [editingName, nameRef, profile])

  useEffect(() => {
    if (editingEmail) {
      emailRef.current.value = profile.newEmail || profile.email
    } else {
      setEmailValidity({ reset: true })
    }
  }, [editingEmail, emailRef, profile])
  
  const setNameValidity = useCallback(() => {
    const name = nameRef.current?.value
    if (!name || name.length > 100) {
      setIsNameValid(false)
    } else {
      setIsNameValid(true)
    }
    setIsNameValidated(true)
  }, [nameRef, setIsNameValid, setIsNameValidated])

  return <>
    <Head title='My Account • Full Context Development' />
    <Flex minW={pageMinW} maxW={pageMaxW} px={pagePaddingX} justifyContent='center' align='center' flexDir='column' mt={marginTops}>
      {error
        ? <Heading as='h1' size='md' color='black' textAlign={errorTA} mt='50px' maxW='600px' px='10px'>
            <Text>The system encontered an error while fetching your profile data. Please try again and if the problem persists <CustomLink b={6} h={26} to='/support'>contact support</CustomLink>.</Text>
          </Heading>
        : <>
          <Heading as='h1' size='lg' color='black' textAlign='center' mt='20px'>
            <Text>Your Profile</Text>
          </Heading>
          <>
            <Heading as='h2' size='md' mb='25px' mt='8px' textTransform='uppercase' fontSize='1rem' textAlign='center'>
              <Icon as={IoPersonOutline} w='1.5rem' h='1.5rem' m='0 auto' mb='8px' display='block' /><Text as='span' lineHeight='1.5rem'>basic info</Text>
            </Heading>
            <Flex flexDir='column' mt='20px' maxW='500px' minW='300px' ml='auto' mr='auto'>
              <Flex w='100%' justifyContent='space-between' alignItems='flex-start' mb='20px'>
                <Flex
                  h='40px'
                  minW='85px'
                  justifyContent='flex-start'
                  alignItems='center'
                  backgroundColor='#e3e3e3'
                  color='black'
                  borderRadius='6px'
                  p='2px 5px 3px 7px'
                >
                  <Icon as={VscAccount} mr='5px' /><Text>Type:</Text>
                </Flex>
                <Flex h='40px' w='100%' justifyContent='left' alignItems='center' pl={contentPl}>{profile.type === 'team' ? `Team Account - ${profile.size} Members` : 'Personal Account'}</Flex>
              </Flex>
              <Flex w='100%' justifyContent='space-between' alignItems='flex-start' mb='20px'>
                <Flex
                  h='40px'
                  minW='85px'
                  justifyContent='flex-start'
                  alignItems='center'
                  backgroundColor='#e3e3e3'
                  color='black'
                  borderRadius='6px'
                  p='2px 5px 3px 7px'
                >
                  <Icon as={BiIdCard} mr='5px' /><Text>Name:</Text>
                </Flex>
                <Flex w='100%' justifyContent='flex-start' alignItems='center' pl={contentPl}>{
                  editingName
                    ? <>
                        <FormControl id='name' isRequired isInvalid={!isNameValid}>
                          <InputGroup>
                            <Input
                              type='text'
                              placeholder='Enter your name'
                              color='black'
                              required
                              ref={nameRef}
                              onChange={setNameValidity}
                              pr={savingName ? '40px' : null}
                            />
                          </InputGroup>
                          <FormErrorMessage>The name is missing or invalid</FormErrorMessage>
                        </FormControl>
                      </>
                    : <Flex h='40px' alignItems='center'>{profile.name}</Flex>
                }</Flex>
                <Flex
                  h='40px'
                  pl='12px'
                  minW={buttonsMinW}
                  align='center'
                  justify='flex-end'
                >{
                  editingName
                    ? <>
                        {!isNameValid || !isNameValidated ? SaveNameChangesRenderFn(null, null)
                        : <ControlledTooltip
                            label='Save Changes'
                            aria-label='A tooltip saying: Save Changes'
                            fontSize='sm'
                            placement={tooltipStart}
                            closeOnClick
                          >
                            {SaveNameChangesRenderFn}
                          </ControlledTooltip>
                        }
                        <ControlledTooltip
                          label='Cancel Editing'
                          aria-label='A tooltip saying: Cancel Editing'
                          fontSize='sm'
                          placement={tooltipStart}
                          closeOnClick
                        >
                          {CancelNameChangesRenderFn}
                        </ControlledTooltip>
                      </>
                    : <>
                        <ControlledTooltip
                          label='Edit Name'
                          aria-label='A tooltip saying: Edit Name'
                          fontSize='sm'
                          placement={tooltipStart}
                          closeOnClick
                        >
                          {EditNameRenderFn}
                        </ControlledTooltip>
                        <Explanation
                          explanation="Changing you display name only affects what you will see in
                            correspondence and on the website, it won't make a difference anywhere else.
                            By the way, it doesn't have to be your real name, use whatever you want."
                        >
                          {ExplainRenderFn}
                        </Explanation>
                      </>
                }
                </Flex>
              </Flex>
              <Flex w='100%' justifyContent='space-between' alignItems='flex-start' mb='20px'>
                <Flex
                  h='40px'
                  minW='85px'
                  justifyContent='left'
                  alignItems='center'
                  backgroundColor='#e3e3e3'
                  color='black'
                  borderRadius='6px'
                  p='2px 5px 3px 7px'
                >
                  <Icon as={HiOutlineMail} mr='5px' /><Text>Email:</Text>
                </Flex>
                <Flex w='100%' justify='flex-start' align='flex-start' pl={contentPl} flexDir='column'>{
                  editingEmail
                    ? <>
                      <FormControl id='name' isRequired isInvalid={!isEmailValid}>
                        <InputGroup>
                          <Input
                            type='email'
                            placeholder='Enter email address'
                            color='black'
                            required
                            ref={emailRef}
                            onChange={setEmailValidity}
                            pr={savingEmail ? '40px' : null}
                          />
                        </InputGroup>
                        <FormErrorMessage>The email address is missing or invalid</FormErrorMessage>
                      </FormControl>
                    </>
                    : <>
                        <Flex h='40px' alignItems='center' color={profile.newEmail ? 'gray' : 'black'}>{profile.newEmail || profile.email}</Flex>
                        {profile.newEmail ? <Text fontSize='0.75rem'><sup>*</sup> pending confirmation</Text> : null}
                      </>
                }</Flex>
                <Flex
                  h='40px'
                  pl='12px'
                  minW={buttonsMinW}
                  align='center'
                  justify='flex-end'
                >{
                  editingEmail
                ?   <>
                      {!isEmailValid || !isEmailValidated ? SaveEmailChangesRenderFn(null, null)
                      : <ControlledTooltip
                          label='Save Changes'
                          aria-label='A tooltip saying: Save Changes'
                          fontSize='sm'
                          placement={tooltipStart}
                          closeOnClick
                        >
                          {SaveEmailChangesRenderFn}
                        </ControlledTooltip>
                      }
                      <ControlledTooltip
                        label='Cancel Editing'
                        aria-label='A tooltip saying: Cancel Editing'
                        fontSize='sm'
                        placement={tooltipStart}
                        closeOnClick
                      >
                        {CancelEmailChangesRenderFn}
                      </ControlledTooltip>
                    </>
                  : <>
                        {profile.newEmail
                          ? <ControlledTooltip
                              label='Cancel Change'
                              aria-label='A tooltip saying: Cancel Change'
                              fontSize='sm'
                              placement={tooltipStart}
                              closeOnClick
                            >
                              {CancelChangingEmailRenderFn}
                            </ControlledTooltip>
                          : <ControlledTooltip
                              label='Edit Email'
                              aria-label='A tooltip saying: Edit Email'
                              fontSize='sm'
                              placement={tooltipStart}
                              closeOnClick
                            >
                              {EditEmailRenderFn}
                            </ControlledTooltip>
                        }
                      <Explanation
                        explanation='Changing your email address is a multi step process.
                          You start by setting the new one here. The system will send a confirmation email to that address.
                          Once you validate the change by using the link in the message, you will be able to
                          log in to your account with the new email.
                          If the process fails you can try again by changing the address here.
                          You can cancel the change with the "X" button, that will invalidate the code sent in the
                          confirmation email.'
                      >
                        {ExplainRenderFn}
                      </Explanation>
                    </>
                }
                </Flex>
              </Flex>
              <Flex w='100%' justifyContent='space-between' alignItems='flex-start'>
                <Flex
                  h='40px'
                  minW='85px'
                  justifyContent='left'
                  alignItems='center'
                  backgroundColor='#e3e3e3'
                  color='black'
                  borderRadius='6px'
                  p='2px 5px 3px 7px'
                >
                  <Icon as={SiDiscord} mr='5px' /><Text>Invite:</Text>
                </Flex>
                <Flex h='40px' w='100%' justifyContent='left' alignItems='center' pl={contentPl}><Link color='#235fa9' href={data.invite} target='_blank' >Join Discord<ExternalLinkIcon fontSize='1rem' ml='5px' pos='relative' top='-2px'/></Link></Flex>
                <Flex
                  h='40px'
                  pl='12px'
                  minW={buttonsMinW}
                  align='center'
                  justify='flex-end'
                >
                  <Explanation
                    explanation={`
                      This is a ${profile.type === 'team' ? 'multipe use' : 'singe use'} invite link to join the community Discord server. ${profile.type === 'team' ? 'Share it with your team, it can be used as many times as the team capacity. ' : ' '}
                      You are more than welcome to hop in and discuss all your ideas!
                      The link won't expire ever so you can't miss the opportunity. For now, it will also stay here on the profile page after you used it.
                    `}
                  >
                    {ExplainRenderFn}
                  </Explanation>
                </Flex>
              </Flex>
              <Flex w='100%' justifyContent='center' mt='50px' alignItems='center'>
                <Heading as='h2' size='md' mt='8px' textTransform='uppercase' fontSize='1rem' textAlign='center' pos='relative'>
                  <Text as='span' lineHeight='1.5rem'>danger zone</Text>
                </Heading>
              </Flex>
              <Flex w='100%' justifyContent='center' mt='20px' h='150px' mb='50px'>
                <ConfirmAction
                  clickHandler={onDeleteAccount}
                  action={`You won't be able to log into this account anymore.`}
                  longText
                >
                  {DeleteAccountRenderFn}
                </ConfirmAction>
              </Flex>
            </Flex>
          </>
        </>
      }
    </Flex>
  </>
}