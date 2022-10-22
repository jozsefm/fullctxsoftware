import { useState, useCallback, useRef, Ref, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Text,
  Heading,
  Box,
  Link,
  Container,
  Checkbox,
  Flex,
  RadioGroup,
  Radio,
  Icon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  HStack,
  Progress,
  Image,
  Skeleton,
  ScaleFade,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { IoPersonOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'
import { VscOrganization } from 'react-icons/vsc'
import { GoCreditCard } from 'react-icons/go'
import { IoMdLogIn } from 'react-icons/io'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import Head from 'components/Head'
import { unselectable } from 'styles/util'
import { useEmailValidation } from 'hooks/useEmailValidation'
import { noBg } from 'elements/Button'
import { inputPlaceholderStyles } from 'elements/Input'
import { MdCheckCircle } from 'react-icons/md'
import { FaBook, FaRegCircle, FaRegDotCircle } from 'react-icons/fa'
import { GiCheckMark } from 'react-icons/gi'
import { FiShoppingCart } from 'react-icons/fi'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { checkAccountData, clientSignup } from 'lib/services/signupClientService'
import { login } from 'lib/services/sessionClientService'
import { statusMap } from 'lib/services/sessionResponseHelper'
import { UserContext } from 'contexts/UserProvider'
import { useRouter } from 'next/router'
import { BackgroundContext } from 'contexts/BackgroundProvider'
import { CustomLink } from 'components/CustomLink'
import { CgSun } from 'react-icons/cg'
import TopBackground from 'components/TopBackground'

const SignupButton = styled(Button)`
  min-width: 100px;
`

const LegalLink = styled.a`
  position: relative;
  z-index: 1;

  &::after{
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 1px;
    border-bottom: 4px solid #3182ce;
    z-index: -1;
  }
  &:hover {
    &::after {
      border-bottom-width: 12px;
    }
    cursor: pointer;
  }
`

const Agreement = styled(Text)`
  ${unselectable}
`

const FilteringBox = ({ hideContent, ...rest }) => <Box {...rest}/>

const PaddleWrapper = styled(FilteringBox)`
  border-radius: 8px;

  ${({ hideContent }: any) => {
    if (hideContent) {
      return 'iframe { display: none; }'
    }
  }}

  iframe {
    border-radius: 8px; 
  }
`

const StyledMotionDivOne = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 48em) {
    width: 45%;
    padding-left: 50px;
  }

  @media screen and (min-width: 62em) {
    width: 40%;
    padding-left: 0;
  }
`

const StyledMotionDivTwo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 48em) {
    width: 55%;
    order: 2;
  }

  @media screen and (min-width: 62em) {
    width: 60%;
    padding-left: 50px;
  }
`

const showPasswordIconHoverStyles = { color: '#319795' }

const flexDirections: any = ['column', 'column', 'row']
const flexOrders: any = ['-1', '-1', '2', '2']
const firstColWidths = ['100%', '100%', '45%', '40%']
const secondColWidths = ['100%', '100%', '55%', '60%']
const brandMt = [ '0', '0', '0', '0', '20px']
const brandFs = ['45px', '45px', '50px', '60px', '65px', '70px']
const sloganFontSizes = ['0', '0', '20px', '24px', '30px', '42px']
const accTypeFs = { base: '24px', xl: '36px'}
const featuresFs = { base: '1rem', md: '1.1rem', xl: '1.4rem'}
const featureListFs = { base: '1rem', md: '1.1rem', xl: '1.3rem'}
const featureListW = { base: '360px', md: '370px', xl: '430px'}
const featuresMinH = { base: '295px', md: '410px', xl: '490px'}
const secondColPl = { base: '0', md: '20px', lg: '0'}
const paddleMinW = { base: '312px', md: '360px', xl: '500px'}
const paddleW = { base: '90%', xl: 'auto'}
const bookFs = { base: '1.5rem', xl: '2rem' }
const thankYouFs = { base: '36px', lg: '48px'}
const welcomeFs = { base: '1.8rem', lg: '2.5rem'}
const welcomeMt = { base: '20vw', xl: '15vw', '2xl': '10vw' }
const headingTextAligns: any = ['center', 'center', null]
const firstHeadingMarginTs = ['0', '0', '20px', '20px', '60px']
const firstHeadingMarginBs = ['35px', '35px', '30px', '35px', '50px']
const firstColPaddingLs: any = [null, null, '50px', '0']
const typeChooserMarginBs = ['20px', '20px', '30px', '50px', '50px']
const signupFormBoxShadows = ['4px 4px 10px 3px #797979', '4px 4px 10px 3px #797979', '5px 5px 30px black']
const descriptionWidths = ['100%', '100%', '100%', '100%', null]
const descriptionMargins = ['10px 0', '10px 0', '160px 0 0 0', '160px 0 0 0', '180px 0 0 0']
const priceMargins = ['58px 8px 80px 8px', '58px 8px 80px 8px', '120px 0 0 0', '120px 0 0 0', '160px 0 0 0']
const descriptionBoxShadows = ['none']
const descriptionPl = ['10px', '0']
const sloganPl = { base: 0, '2xl': '60px'}
const sloganW = { base: '100%', '2xl': 'auto'}
const subTextMarginTs = { base: '30px', lg: '20px'}
const thanksPadding = { base: '0', lg: null }
const descriptionBg = ['transparent']
const descIconSize = { base: '1.8rem', lg: '2.5rem'}
const marginTopsNotAtTop = ['63px', '63px']
const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']
const mobileMarginTops = ['149px !important', '149px !important', '175px !important', '166px !important']
const accountInfoInit = { email: '', type: '', quantity: '', name: '', teamName: '' }
const paddleLoaderAnimate = { scale: [0.8, 1.2], opacity: [0.3, 1] }
const paddleLoaderTransition: any = { repeat: Infinity, repeatType: "reverse", duration: 0.6 }

const eventCallback = (data) => {
  const win = window as any
  if (data.event === 'Checkout.Loaded') {
    win.FCD.setPaddleLoading(false)
  }

  if (data?.eventData) {
    const tax = data.eventData.checkout.prices.customer.total_tax
    const total = data.eventData.checkout.prices.customer.total
    const sub = total - tax

    win.FCD.setSubTotal(sub)
    win.FCD.setTax(tax)
    win.FCD.setTotal(total)
  }
}

const mobileBackgroundHeight = { accountType: '530px', account: '320px', finishSignup: '375px' }

export default function Signup() {
  const membersRef: Ref<HTMLInputElement> = useRef()
  const teamNameRef: Ref<HTMLInputElement> = useRef()
  const nameRef: Ref<HTMLInputElement> = useRef()
  const emailRef: Ref<HTMLInputElement> = useRef()
  const [accountType, setAccountType]: [string, any] = useState('personal')
  const [currentPage, setCurrentPage] = useState(1)
  const [accountData, setAccountData] = useState(accountInfoInit)
  const [isAgreed, setIsAgreed] = useState(false)
  const [isTeamNameValid, setIsTeamNameValid] = useState(true)
  const [isTeamNameValidated, setIsTeamNameValidated] = useState(false)
  const [isMembersValid, setIsMembersValid] = useState(true)
  const [isMembersValidated, setIsMembersValidated] = useState(false)
  const [isNameValid, setIsNameValid] = useState(true)
  const [isNameValidated, setIsNameValidated] = useState(false)
  const [isEmailValid, isEmailValidated, setEmailValidity] = useEmailValidation(emailRef)
  const handleAgreedClick = useCallback(() => setIsAgreed(!isAgreed), [isAgreed])
  const isMobile: boolean = useBreakpointValue({ base: true, sm: true, md: false })
  const [paddleLoading, setPaddleLoading] = useState(false)
  const [perMemberPrice, setPerMemberPrice] = useState(28)
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)
  const [revealWelcome, setRevealWelcome] = useState(false)
  const [generationError, setGenerationError] = useState(0)
  const [loginProgress, setLoginProgress] = useState(false)
  const {setLoggedIn} = useContext(UserContext)
  const toast = useToast()
  const router = useRouter()
  const [checkingAccountData, setCheckingAccountData] = useState(false)
  const [signupIssues, setSignupIssues] = useState(null)
  const [showIssues, setShowIssues] = useState(true)
  const [mobileStep, setMobileStep] = useState(1)
  const { bgView, setBgView } = useContext(BackgroundContext)
  const [cartOpen, setCartOpen] = useState(false)
  const [ loginHash, setLoginHash ] = useState(null)

  useEffect(() => {
    cleanupPaddle()
    const win = window as any
    win.FCD = {
      setSubTotal,
      setTax,
      setTotal,
      setPaddleLoading
    }
    setBgView('accountType') // for mobile
    const { at } = getAccountType()
    if (at) {
      setAccountType(at === 't' ? 'team' : 'personal')
    }
    let paddleUnload
    if (!win.paddleLoaded) {
      const paddleScript = document.createElement('script')
      paddleScript.src = 'https://cdn.paddle.com/paddle/paddle.js'
      paddleScript.async = true
      const onScriptLoad = () => {
        const Paddle = (window as any).Paddle
        if (process.env.NEXT_PUBLIC_DEV !== 'false') {
          Paddle.Environment.set('sandbox')
          Paddle.Setup({
            vendor: 2447,
            eventCallback
          })
        } else {
          Paddle.Setup({
            vendor: 117982,
            eventCallback
          })
        }
      }
      paddleScript.addEventListener('load', onScriptLoad)
      paddleUnload = () => {
        paddleScript.removeEventListener('load', onScriptLoad)
      }
      document.head.appendChild(paddleScript)
      win.paddleLoaded = true
    }

    return () => {
      paddleUnload?.()
      delete win.FCD
      setBgView('generic') // to make sure it's cleaned up on back navigation 
    }
  }, [])

  const setTeamNameValidity = useCallback(() => {
    const teamName = teamNameRef.current?.value
    if (!teamName || teamName.length > 100) {
      setIsTeamNameValid(false)
    } else {
      setIsTeamNameValid(true)
    }
    setIsTeamNameValidated(true)
  }, [])
  
  const setMembersValidity = useCallback(() => {
    const members = membersRef.current?.value
    if (members === '') {
      setIsMembersValid(false)
    } else {
      setIsMembersValid(true)
    }
    setIsMembersValidated(true)
  }, [])

  const setNameValidity = useCallback(() => {
    const name = nameRef.current?.value
    if (!name || name.length > 100) {
      setIsNameValid(false)
    } else {
      setIsNameValid(true)
    }
    setIsNameValidated(true)
  }, [])

  const finishSignup = useCallback(async (checkoutId) => {
    cleanupPaddle()
    setBgView('finishSignup')
    window.scrollTo(0, 0)
    const win = window as any
    const { type, name, email, teamName, quantity } = win.FCD.accountData

    const signupData: any = {
      email,
      checkoutId,
      type
    }

    if (type === 'team') {
      signupData.team = teamName
      signupData.size = parseInt(quantity)
    } else {
      signupData.name = name
    }
    
    const fiveSec = setTimeout(() => {
      setGenerationError(5)
    }, 5000)

    const thirtySec = setTimeout(() => {
      setIsGenerating(false)
      setGenerationError(30)
    }, 30000)

    try {
      setIsGenerating(true)
      const { hash, message } = await clientSignup(signupData)
      setLoginHash(hash)
      clearTimeout(fiveSec)
      clearTimeout(thirtySec)
      setIsGenerating(false)
      setGenerationError(message ? 30 : 0)
    } catch (error) {
      clearTimeout(fiveSec)
      clearTimeout(thirtySec)
      setIsGenerating(false)
      setGenerationError(30)
    }
  }, [])
  
  const onRadioChange = useCallback((radioValue) => {
    setAccountType(radioValue)
    setSignupIssues(null)
    if (!nameRef.current?.value) {
      setIsNameValid(true)
      setIsNameValidated(false)
    }
    if (!emailRef.current?.value || signupIssues?.email || signupIssues?.burner) {
      if (emailRef.current?.value) {
        setEmailValidity()
      } else {
        setEmailValidity({ reset: true })
      }
    }
    if (!teamNameRef.current?.value) {
      setIsTeamNameValid(true)
      setIsTeamNameValidated(false)
    }
    if (!membersRef.current?.value) {
      setIsMembersValid(true)
      setIsMembersValidated(false)
    }
  }, [signupIssues])

  const toPayClickHandler = useCallback(() => {
    const next = async () => {
      const accountData = {
        type: accountType,
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        teamName: teamNameRef.current?.value,
        quantity: membersRef.current?.value || '1'
      }
      setSignupIssues(null)
      setCheckingAccountData(true)
      const { message, issues } = await checkAccountData({
        email: accountData.email
      })
      setCheckingAccountData(false)
      if (message) {
        toast({
          title: 'Error',
          description: message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } else if (issues) {
        setSignupIssues(issues)
        setShowIssues(true)
        if (issues.burner) {
          setEmailValidity({ force: { value: false } })
        }
        if (issues.email) {
          setEmailValidity({ force: { value: false } })
        }
      } else {
        const win = window as any
        win.FCD.accountData = { ...accountData }

        setBgView('accountType')
        setMobileStep(3)
        window.scrollTo(0, 0)
        setAccountData(accountData)
        setPerMemberPrice(getMemberPrice(accountData.quantity))
        setCurrentPage(2)
        setPaddleLoading(true)

        const Paddle = win.Paddle
        const { email, type, quantity } = accountData

        const checkout = {
          method: 'inline',
          email,
          product: getProductId(type, quantity, process.env.NEXT_PUBLIC_DEV !== 'false'),
          allowQuantity: false,
          quantity: type === 'team' ? quantity : 1,
          disableLogout: true,
          frameTarget: 'paddle-checkout',
          frameInitialHeight: 600,
          frameStyle: 'width:100%; min-width:312px; background-color: white; border: none;',
          successCallback: (data) => {
            setCurrentPage(3)
            finishSignup(data.checkout.id)
          }
        }

        Paddle.Checkout.open(checkout) 
      }
    }

    const commonFieldsAreValid = isNameValid && isEmailValid && nameRef.current?.value && emailRef.current?.value
    const teamFieldsAreValid = isTeamNameValid && teamNameRef.current?.value && isMembersValid && membersRef.current?.value && emailRef.current?.value && isEmailValid
    
    if (accountType === 'personal') {
      if (commonFieldsAreValid) {
        next()
      } else {
        setNameValidity()
        setEmailValidity()
      }
    }

    if (accountType === 'team') {
      if (teamFieldsAreValid) {
        next()
      } else {
        setTeamNameValidity()
        setMembersValidity()
        setNameValidity()
        setEmailValidity()
      }
    }
  }, [isTeamNameValid, isMembersValid, isNameValid, isEmailValid, accountType])

  const onPrevStepClick = useCallback(() => {
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    if (currentPage === 1 && accountData.type !== '') {
      const { name, email, teamName, quantity } = accountData
      emailRef.current.value = email
      if (nameRef.current) nameRef.current.value = name
      if (teamNameRef.current) teamNameRef.current.value = teamName
      if (membersRef.current) membersRef.current.value = quantity
      setIsAgreed(true)
    }
    if (currentPage === 3) {
      setTimeout(() => {
        setRevealWelcome(true)
      }, 1200)
    }
  }, [currentPage, accountData])

  const onLogin = useCallback(async () => {
    setLoginProgress(true)
    const result = await login({ hash: loginHash })
    setLoginProgress(false)
    if (result.status === statusMap.LOGGEDIN) {
      setLoggedIn(true)
      router.push('/')
    } else if (result.status === statusMap.ERROR) {
      toast({
        title: 'Failed to log in',
        description: "I'm extremly sorry to fail you at the first time! Please try again later and if the problem persists contact support.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [router, loginHash])

  const forwardMobileStep = useCallback(() => {
    const nextStep = mobileStep + 1
    if (nextStep === 2) {
      setBgView('account')
    } else {
      setBgView('accountType')
    }
    if (nextStep === 3) {
      setCurrentPage(2)
    }
    setMobileStep(nextStep)
    window.scrollTo(0, 0)
  }, [mobileStep])

  const backwardMobileStep = useCallback(() => {
    const prevStep = mobileStep - 1
    
    if (prevStep === 1) {
      setBgView('accountType')
    } else if (prevStep === 2) {
      setBgView('account')
      setTotal(0)
      setSubTotal(0)
      setTax(0)
    } else {
      setBgView('accountType')
    }
    if (prevStep === 2) {
      setCurrentPage(1)
    }
    setMobileStep(prevStep)
    window.scrollTo(0, 0)
  }, [mobileStep])

  const dismissIssues = useCallback(() => {
    setShowIssues(false)
  }, [])

  const toggleCart = useCallback(() => {
    setCartOpen(!cartOpen)
  }, [cartOpen])
  
  return (
    <Box w='100%' mb={!isMobile ? '120px' : null} minH={mobileStep === 0 ? '525px' : mobileStep === 3 ? '770px' : '570px'} mt={isMobile && currentPage !== 3 ? mobileMarginTops : marginTops}>
      <Head title='Signup • Full Context Development'></Head>
      <TopBackground top='266px' height='425px' mHeight={mobileBackgroundHeight[bgView]}/>
      {isMobile && currentPage !== 3 && <Flex w='100%' h={!cartOpen ? '60px' : accountType === 'team' ? '260px' : '220px'} align='flex-start' justify='space-between' pos='fixed' top={marginTopsNotAtTop} transition='top 0.5s ease-in-out, height 0.2s ease-out' zIndex='2' bg='#215dcce6' p='18px 20px 0 20px' backdropFilter='blur(3px)' wrap='wrap'>
        <Flex w={mobileStep === 3 ? '60%' : '90%'} align='center'>
          <Text color='white'>Sign up</Text>
          <Text color='white' m='0 12px'>/</Text>
          <Text color='white' fontWeight='bold'>{mobileStep === 1
            ? 'Choose Account Type'
            : mobileStep === 2
              ? 'Create Account'
              : mobileStep === 3
                ? 'Payment'
                : null}</Text>
        </Flex>
        <Flex w={mobileStep === 3 ? '40%' : '10%'} align='center' justify={mobileStep === 3 ? 'flex-end' : 'center'}>
          {mobileStep === 3 && <Text fontWeight='bold' color='white' mr='5px'>{total ? `$${total}` : null}</Text>}
          {mobileStep >= 2 && <Flex as='button' align='center' justify='center' onClick={toggleCart}>
            <Icon as={FiShoppingCart} fontSize='1.4rem' color='white' />
            {!cartOpen && <ChevronDownIcon color='white' ml='5px' />}
            {cartOpen && <ChevronUpIcon color='white' ml='5px' />}
          </Flex>}
        </Flex>
        {cartOpen && <Flex w='100%' pb='20px' borderTop='1px solid white' m='15px 0' direction='column'>
          <Text w='100%' color='white' mt='10px' fontWeight='bold'>You are buying:</Text>
          <Flex w='100%' justify='space-between' color='white' mt='5px'>
            <Text>The Online Book </Text>
            <Text>-</Text>
            <Text>{accountType === 'personal' ? 'Personal' : 'Team'} Account</Text>
          </Flex>
          {accountType === 'team' && mobileStep === 3 ? <Flex w='100%' justify='space-between'>
            <Text color='white'>Team size: {accountData.quantity}</Text>
            <Text color='white'>${perMemberPrice} / member</Text>
          </Flex> : null}
          {mobileStep === 3 && <Flex w='100%' color='white' direction='column' mt='15px' p='0 15px'>
            <Flex>
              <Flex w='50%'>Tax</Flex>
              <Flex w='50%' justify='flex-end'>${tax}</Flex>
            </Flex>
            <Flex>
              <Flex w='50%'>Subtotal</Flex>
              <Flex w='50%' justify='flex-end'>${subTotal}</Flex>
            </Flex>
            <Flex>
              <Flex w='50%'>Total</Flex>
              <Flex w='50%' justify='flex-end'>${total}</Flex>
            </Flex>
          </Flex>}
        </Flex>}
      </Flex>}
      <Flex direction={flexDirections}>
        {currentPage === 1 ? <>
          {<StyledMotionDivOne style={{ display: (!isMobile || mobileStep === 1 || mobileStep === 2) ? 'flex' : 'none' }}>
            <Flex flexDir='column' alignItems='center'>
              <motion.div style={{ display: (!isMobile || mobileStep === 1) ? 'block' : 'none' }}>
                <AccountChooser
                  headingMb={firstHeadingMarginBs}
                  headingTa={headingTextAligns}
                  headingMt={firstHeadingMarginTs}
                  onRadio={onRadioChange}
                  radioMb={typeChooserMarginBs}
                  radioValue={accountType}
                  isMobile={isMobile}
                />
              </motion.div>
              <motion.div style={{ display: (!isMobile || mobileStep === 2) ? 'block' : 'none' }}>
                <Stack
                  direction='column'
                  spacing='24px'
                  align='center'
                  backgroundColor={isMobile ? 'white' : '#5635ca'}
                  p='20px'
                  minW='352px'
                  borderRadius='10px'
                  zIndex='1'
                  mb={isMobile ? '200px' : '60px'}
                  boxShadow={signupFormBoxShadows}
                >
                  <Stack
                    direction='column'
                    spacing='24px'
                    minW='312px'
                  >
                    {accountType === 'personal' ?
                      <FormControl id="name" isRequired isInvalid={!isNameValid}>
                        <FormLabel fontWeight='600' color={isMobile ? 'black' : 'white'}>User name</FormLabel>
                        <InputGroup>
                          <Input
                            pr="4.5rem"
                            type='text'
                            color={isMobile ? 'black' : 'white'}
                            borderColor={(isNameValidated && isNameValid) ? (isMobile ? '#20ab61' : '#31FF91') : (isMobile ? '#656565' : 'white')}
                            required
                            ref={nameRef}
                            onBlur={setNameValidity}
                            _placeholder={inputPlaceholderStyles}
                          />
                          {isNameValidated && isNameValid && <InputRightElement children={<CheckIcon color={isMobile ? '#20ab61' : '#31FF91'} />} />}
                        </InputGroup>
                        <FormErrorMessage>The name is missing or invalid</FormErrorMessage>
                        <FormHelperText color={isMobile ? '#292929' : '#cacaca'}>To know how to call you</FormHelperText>
                      </FormControl>
                    : <FormControl id="teamName" isRequired isInvalid={!isTeamNameValid}>
                        <FormLabel fontWeight='600' color={isMobile ? 'black' : 'white'}>Team name</FormLabel>
                        <InputGroup>
                          <Input
                            pr="4.5rem"
                            type='text'
                            color={isMobile ? 'black' : 'white'}
                            borderColor={isTeamNameValidated && isTeamNameValid ? (isMobile ? '#20ab61' : '#31FF91') : isMobile ? '#656565' : 'white'}
                            required
                            ref={teamNameRef}
                            onBlur={setTeamNameValidity}
                            _placeholder={inputPlaceholderStyles}
                          />
                          {isTeamNameValidated && isTeamNameValid && <InputRightElement children={<CheckIcon color={isMobile ? '#20ab61' : '#31FF91'} />} />}
                        </InputGroup>
                        <FormErrorMessage>The name is missing or invalid</FormErrorMessage>
                        <FormHelperText color={isMobile ? '#292929' : '#cacaca'}>Can be anything you want</FormHelperText>
                      </FormControl>
                    }
                    {accountType === 'team' && <FormControl id="members" isRequired isInvalid={!isMembersValid}>
                      <FormLabel fontWeight='600' color={isMobile ? 'black' : 'white'}># of members</FormLabel>
                      <NumberInput defaultValue={3} min={3} max={100} onBlur={setMembersValidity} borderColor={isMembersValidated && isMembersValid ? (isMobile ? '#20ab61' : '#31FF91') : isMobile ? '#656565' : 'white'}>
                        <NumberInputField color={isMobile ? 'black' : 'white'} ref={membersRef} />
                        <NumberInputStepper>
                          <NumberIncrementStepper color={isMobile ? 'black' : 'white'} />
                          <NumberDecrementStepper color={isMobile ? 'black' : 'white'} />
                        </NumberInputStepper>
                      </NumberInput>
                      <FormErrorMessage>You must provide a number between 3 and 100. For more please contact support.</FormErrorMessage>
                      <FormHelperText color={isMobile ? '#292929' : '#cacaca'}>The number of accounts that will use the services</FormHelperText>
                    </FormControl>}
                    <FormControl id="email" isRequired isInvalid={!isEmailValid}>
                      <FormLabel fontWeight='600' color={isMobile ? 'black' : 'white'}>Email</FormLabel>
                      <InputGroup>
                        <Input
                          type='email'
                          color={isMobile ? 'black' : 'white'}
                          borderColor={isEmailValidated && isEmailValid ? (isMobile ? '#20ab61' : '#31FF91') : isMobile ? '#656565' : 'white'}
                          required
                          ref={emailRef}
                          onBlur={setEmailValidity}
                          textOverflow='ellipsis'
                          _placeholder={inputPlaceholderStyles}
                        />
                        {isEmailValidated && isEmailValid && <InputRightElement children={<CheckIcon color={isMobile ? '#20ab61' : '#31FF91'} />} />}
                      </InputGroup>
                      <FormErrorMessage>The email address is missing or invalid</FormErrorMessage>
                      <FormHelperText color={isMobile ? '#292929' : '#cacaca'}>I won't share it with anyone</FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack
                    direction='column'
                    spacing='24px'
                    mt='0 !important'
                    minW='312px'
                  >
                    {signupIssues && showIssues && <SignupIssuesInfo issues={signupIssues} dismiss={dismissIssues} />}
                  </Stack>
                  <Stack
                    direction='column'
                    spacing='24px'
                    w='100%'
                  >
                    <Flex direction='row' justifyContent='center'>
                      <Checkbox size='md' mr='6px' onChange={handleAgreedClick} isChecked={isAgreed} />
                      <Agreement color={isMobile ? 'black' : 'white'} fontSize='0.7rem'>I read and agree to the <Link href='/legal' as={NextLink} passHref><LegalLink target='_blank'>legal stuff</LegalLink></Link></Agreement>
                    </Flex>
                    <Flex direction='row' justifyContent='center' alignItems='center' w='100%' pos='relative' mt='24px'>
                      <SignupButton colorScheme="teal" variant="solid" onClick={toPayClickHandler} disabled={!isAgreed} isLoading={checkingAccountData} loadingText='Processing'>
                        To pay
                      </SignupButton>
                    </Flex>
                  </Stack>)
                </Stack>
                {isMobile && <Flex direction='column' pos='absolute' bottom='60px' left='0' justify='center' w='100%'>
                  <MobileStepper currentPage={mobileStep} goForward={forwardMobileStep} goBack={backwardMobileStep} />
                </Flex>}
              </motion.div>
            </Flex>
          </StyledMotionDivOne>}
          <StyledMotionDivTwo>
            <Flex h='100%' direction='column' justify='flex-start' align='flex-start' pl={secondColPl} >
              <motion.div style={{ display: !isMobile || mobileStep === 0 ? 'block' : 'none' }}>
                <Heading as="h1" size="lg" mt={brandMt} color={isMobile ? 'rgb(91, 99, 117)' : 'rgb(53, 61, 77)'} fontSize={brandFs} textAlign={headingTextAligns} p={thanksPadding}>{
                  isMobile
                    ? <>
                      <Text
                        fontSize='48px'
                        lineHeight='48px'
                        p='0 20px'
                      >Thanks for signing up to</Text>
                      <Text
                        fontSize='40px'
                        lineHeight='40px'
                        mt='40px'
                        fontWeight='600'
                        fontFamily='Rubik, Helvetica Neue, Helvetica, Arial, sans-serif'
                      >Full Context Development</Text>
                    </>
                    : 'Full Context Development'
                }</Heading>
                <Heading as="h2" size='2xl' fontSize={sloganFontSizes} mt={subTextMarginTs} color={isMobile ? 'rgb(105, 113, 132)' : 'rgb(53, 61, 77)'} textAlign='center' fontStyle='italic' pl={sloganPl} w={sloganW}>Master the road from code to money</Heading>
                {isMobile && <Flex direction='column' pos='absolute' bottom='50px'>
                  <Text textAlign='center' p='0 20px' fontSize='1.1rem'>The site is launching in <CustomLink to='/pricing#early-access' fontSize='1rem'>early access</CustomLink>, click the link to learn what does it mean. TLDR: Cheap prices and some expected issues.</Text>
                  <MobileStepper currentPage={mobileStep} goForward={forwardMobileStep} goBack={backwardMobileStep} />
                </Flex>}
              </motion.div>
              <motion.div style={{ display: !isMobile || mobileStep === 1 ? 'block' : 'none', width: '100%' }}>
                <Box
                  w={descriptionWidths}
                  maxW='880px'
                  minH={featuresMinH}
                  m={descriptionMargins}
                  backgroundColor={descriptionBg}
                  color={isMobile ? 'white' : '#6a6a6a'}
                  boxShadow={descriptionBoxShadows}
                >
                  {accountType === 'personal'
                    ? <>
                      {!isMobile && <Heading as="h2" size='xl' textAlign='center' fontSize={accTypeFs} display='flex' justifyContent='center'>
                        <Icon
                          as={IoPersonOutline}
                          w={descIconSize}
                          h={descIconSize}
                          mr='11px'
                        />The Personal Account
                      </Heading>}

                      <Text fontSize={featuresFs} fontWeight='bold' textAlign='center' mb='25px'>{isMobile ? 'IT INCLUDES' : 'GIVES YOU'}</Text>
                      <List
                        fontSize={featureListFs}
                        pl={isMobile ? '15px' : null}
                        fontWeight='400'
                        fontFamily='Inter,sans-serif'
                        m='15px auto 0 auto'
                        w={featureListW}
                        spacing={1}
                        textAlign='start'
                      >
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />Lifetime access to the online book</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />Simultanious login from up to 4 devices</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />Membership in our private community*</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />All future updates</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />30 days money back guarantee</ListItem>
                        <ListItem><ListIcon as={CgSun} color='yellow.500' fontSize='1.3rem' />Early Access: <CustomLink to='/pricing#early-access' fontSize='1rem'>Read the details</CustomLink></ListItem>
                      </List>
                      {!isMobile && <Text textAlign='center' mt='20px' color='#888'><sup>*</sup>See the <CustomLink to='/pricing#community'>Pricing</CustomLink> page for the details</Text>}
                    </>
                    : <>
                      {!isMobile && <Heading as="h2" size='xl' textAlign='center'  fontSize={accTypeFs}  display='flex' justifyContent='center'>
                        <Icon
                          as={VscOrganization}
                          w={descIconSize}
                          h={descIconSize}
                          mr='11px'
                        />The Team Account
                      </Heading>}

                      <Text fontSize={featuresFs} fontWeight='bold' textAlign='center' mb='25px'>{isMobile ? 'IT INCLUDES' : 'GIVES YOU'}</Text>
                      <List
                        fontSize={featureListFs}
                        pl={isMobile ? '15px' : null}
                        fontWeight='400'
                        fontFamily='Inter,sans-serif'
                        m='15px auto 0 auto'
                        w={featureListW}
                        spacing={1}
                        textAlign='start'
                      >
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />Everything in the Personal plan</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />A discounted per member price</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />Easy team management*</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />Access on 2 devices per member</ListItem>
                        <ListItem><ListIcon as={GiCheckMark} color='teal.500' fontSize='1.3rem' />30 days money back guarantee</ListItem>
                        <ListItem><ListIcon as={CgSun} color='yellow.500' fontSize='1.3rem' />Early Access: <CustomLink to='/pricing#early-access' fontSize='1rem'>Read the details</CustomLink></ListItem>
                      </List>
                      {!isMobile && <Text textAlign='center' mt='20px' color='#888'><sup>*</sup>See the <CustomLink to='/pricing#teams'>Pricing</CustomLink> page for an in depth explanation of how Teams work</Text>}
                    </>
                  }
                </Box>
                {isMobile && <Flex direction='column' pos='absolute' bottom='80px' justify='center' w='100%'>
                  <MobileStepper currentPage={mobileStep} goForward={forwardMobileStep} goBack={backwardMobileStep} />
                </Flex>}
              </motion.div>
            </Flex>
          </StyledMotionDivTwo>
        </>
          : currentPage === 2 ? <>
            <Flex flexDir='column' alignItems='center' w={firstColWidths} pl={firstColPaddingLs} zIndex='1'>
              <Heading as="h1" display='flex' size={isMobile ? 'md' : "lg"} color='white' mt={firstHeadingMarginTs} mb={isMobile ? '15px' : '33px'} textAlign={headingTextAligns} fontWeight='400'>
                <Icon as={IoShieldCheckmarkOutline} fontSize={isMobile ? '1.8rem' : '2.5rem'} mr='6px' /> Pay securely using our partner
                </Heading>
              <Link href='https://paddle.com' target='_blank' mb={isMobile ? '5px' : '33px'} minH='45px'>
                <Image src='/img/paddle.svg' width={isMobile ? '85px' : '120px'}/>
              </Link>
              <PaddleWrapper className="paddle-checkout" minW={paddleMinW} w={paddleW} boxShadow={isMobile ? '4px 4px 15px 0px #484848' : signupFormBoxShadows} mb={isMobile ? '200px' : '80px'} hideContent={paddleLoading} pos='relative'>
                {paddleLoading ? <Flex
                  direction='column'
                  justify='center'
                  align='center'
                  pos='absolute'
                  top='50%'
                  left='0'
                  right='0'
                  bg='white'
                  boxShadow={isMobile ? '4px 4px 15px 0px #484848' : signupFormBoxShadows}
                  minH='500px'
                  borderRadius='8px'
                >
                  <motion.div
                    animate={paddleLoaderAnimate}
                    transition={paddleLoaderTransition}
                  >
                    <Icon as={GoCreditCard} fontSize='4rem' color='rgb(53, 61, 77)'/>
                  </motion.div>
                </Flex> : null}
              </PaddleWrapper>
              {isMobile && <Flex direction='column' pos='absolute' bottom='50px' justify='center' w='100%'>
                  <MobileStepper currentPage={mobileStep} goForward={forwardMobileStep} goBack={backwardMobileStep} />
                </Flex>}
            </Flex>
            {!isMobile && <Flex w={secondColWidths} h='100%' order={flexOrders} zIndex='1' direction='column' justify='center' align='flex-start' pl='50px' pr='20px'>
              <Box>
                <Heading as="h1" size="lg" mt={brandMt} color='rgb(53, 61, 77)' fontSize={brandFs} textAlign={headingTextAligns}>
                  Full Context Development
                </Heading>
                <Heading as="h2" size='2xl' fontSize={sloganFontSizes} mt={subTextMarginTs} color={isMobile ? 'rgb(105, 113, 132)' : 'rgb(53, 61, 77)'} textAlign='center' fontStyle='italic' pl={sloganPl} w={sloganW}>Master the road from code to money</Heading>
                </Box>
              <Box
                w={descriptionWidths}
                maxW='880px'
                minH='490px'
                m={priceMargins}
                borderRadius='10px'
                backgroundColor='transparent'
                pl={descriptionPl}
                color='#6a6a6a'
              >
                <Flex w='100%' maxW='470px' fontFamily='Inter, sans-serif' m='0 auto 0 auto' justify='center' align='center' direction='column'>
                  <Icon as={FiShoppingCart} fontSize='2.2rem' />
                  <Text fontSize='2rem'>You are purchasing</Text>
                </Flex>
                <Flex w='100%' maxW='470px' fontFamily='Inter, sans-serif' m='20px auto 0 auto' bg='#eee' p='20px' borderRadius='8px' border='1px solid #dbdbdb' color='black'>
                  <Flex direction='column' w={accountType === 'personal' ? '90%' : '70%'} justify='flex-start' align='flex-start'>
                    <Text fontSize={bookFs} lineHeight='2.2rem' fontWeight='bold' color='#64acff'><Icon as={FaBook} mr='10px' pos='relative' top='-3px' />The Online Book</Text>
                    <Text mt='20px'>Account type: {accountType === 'personal' ? 'Personal' : 'Team'}</Text>
                    {accountType === 'team' ? <Text>Team size: {accountData.quantity}</Text> : null}
                    <Box w='100%' m='25px 0 20px 0' borderBottom='2px solid #8e8e8e59'></Box>
                    {paddleLoading ? <Skeleton h='10px' w='90%' mb='15px' /> : <Text>Tax:</Text>}
                    {paddleLoading ? <Skeleton h='10px' w='90%' mb='15px' /> : <Text>Subtotal:</Text>}
                    {paddleLoading ? <Skeleton h='10px' w='90%' /> : <Text fontWeight='bold'>Final price:</Text>}
                  </Flex>
                  <Flex direction='column' w={accountType === 'personal' ? '10%' : '30%'} justify='flex-start' align='flex-end'>
                    <Text lineHeight='2.2rem'>Price</Text>
                    <Text mt='20px'>${accountType === 'personal' ? '33' : `${perMemberPrice} / member`}</Text>
                    {accountType === 'team' ? <Text>${parseInt('' + accountData.quantity) * perMemberPrice}</Text> : null}
                    <Box w='100%' m='25px 0 20px 0' borderBottom='2px solid #8e8e8e59'></Box>
                    {paddleLoading ? <Skeleton h='10px' w='90%' mb='15px' /> : <Text>${tax}</Text>}
                    {paddleLoading ? <Skeleton h='10px' w='90%' mb='15px' /> : <Text>${subTotal}</Text>}
                    {paddleLoading ? <Skeleton h='10px' w='90%' /> : <Text fontWeight='bold'>${total}</Text>}
                  </Flex>
                </Flex>
              </Box>
            </Flex>}
        </>
        : <>
          <Flex direction='column' align='center' w='100%' minH='86vh' zIndex='1'>
            <Icon as={IoMdCheckmarkCircleOutline} fontSize='4rem' color='#44ff41' mt={isMobile ? null : '20px'}/>
            <Heading size='2xl' fontSize={thankYouFs} color='white' mt='30px' textAlign={isMobile ? 'center' : null}>Thank you for your purchase</Heading>
            <Text color='white' mt='30px' fontSize='1.2rem'>The payment was successful</Text>
            <ScaleFade in={revealWelcome} initialScale={0.7}>
              <Flex direction='column' align='center' mt={isMobile ? '120px' : null}>
                {!isMobile && <Text color='#585e75' mt={welcomeMt} mb='50px' fontSize={welcomeFs} fontWeight='600' maxW='1000px' textAlign='center' lineHeight='3rem' p='0 20px'>Welcome to the <Text as='span' whiteSpace='nowrap'>Full Context Development</Text> community!</Text>}
                {isGenerating && <Text color='#585e75' fontSize='1.1rem' maxW='700px' w='90%' textAlign='center' fontWeight='600'>Your account is being generated.</Text>}
                <Text color='#585e75' fontSize='1.1rem' maxW='700px' w='90%' textAlign='center' fontWeight='600'>{isGenerating ? 'Once done ' : null}You can log in automatically using the button below.</Text>
                {generationError === 5
                  ? <Text color='#64acff' mt='20px' fontSize='1.1rem' maxW='700px' w='90%' textAlign='center' fontWeight='600'>The process seems to take more time than usual but it's still normal, please wait a bit more, for maximum a half minute.</Text>
                  : generationError === 30
                  ? <Text color='red.500' mt='20px' fontSize='1.1rem' lineHeight='1.5rem' maxW='700px' w='90%' textAlign='center' fontWeight='600'>It's so emberassing but the system likely run into a major technical issue. Don't worry, your payment is recorded. Check out if you received the email with the access link and try using that, if that does not work out please contact support and I will get your account ready ASAP.</Text>  
                  : null
                }
                {!isGenerating &&
                  <Text color='#585e75' mt='10px' fontSize='0.95rem' maxW='700px' w='90%' textAlign='center' fontStyle='italic'>Your personal access link and receipt are sent to the provided email address.</Text>
                }
                <Button m='50px' variant="solid" size='md' onClick={onLogin} colorScheme='green' isLoading={isGenerating || loginProgress} loadingText={isGenerating ? 'The cogs are turning' : 'Logging in'} leftIcon={<Icon as={IoMdLogIn} fontSize='1.5rem' m='0 -3px'/>}>
                  <Text fontWeight='bold'>Get Started</Text>
                </Button>  
              </Flex>
            </ScaleFade>  
          </Flex>
        </>
      }
      </Flex>
      {!isMobile && <RegStepper currentPage={currentPage} goBack={onPrevStepClick}/>}
    </Box>
  )
}

const RegStepper = ({ currentPage, goBack }) => {
  return <>
    <HStack justify='center'>
      {currentPage === 2 ? 
        <Button mr='15px' variant="outline" size='sm' onClick={goBack}>
          <Text fontSize={12} color='#6f6f6f;' fontWeight='bold'>&larr; Previous Step</Text>
        </Button>
      : null}
      <Icon as={currentPage === 1 ? FaRegDotCircle : MdCheckCircle} color={currentPage > 1 ? 'green.500' : 'rgb(53, 61, 77, 0.8)'} fontSize={currentPage === 1 ? null : '1.25rem'} ></Icon>
      <Text color='rgb(53, 61, 77, 0.8)'>Step 1: Account info</Text>
      <Progress value={currentPage >= 2 ? 100 : 0} w='10%' colorScheme='blackAlpha' size='xs'/>
      <Icon as={currentPage < 2 ? FaRegCircle : currentPage === 2 ? FaRegDotCircle : MdCheckCircle} color={currentPage === 3 ? 'green.500' : 'rgb(53, 61, 77, 0.8)'} fontSize={currentPage < 2 ? null : currentPage === 2 ? null : '1.25rem'}></Icon>
      <Text color='rgb(53, 61, 77, 0.8)'>Step 2: Payment</Text>
      <Progress value={currentPage === 3 ? 100 : 0} w='10%' colorScheme='blackAlpha' size='xs'/>
      <Icon as={currentPage < 3 ? FaRegCircle : FaRegDotCircle} color='rgb(53, 61, 77, 0.8)' fontSize={currentPage < 3 ? null : '1.25rem'}></Icon>
      <Text color='rgb(53, 61, 77, 0.8)'>Step 3: Start reading</Text>
    </HStack>
  </>
}

const MobileStepper = ({ currentPage, goBack, goForward }) => {
  return <>
    <VStack justify='center' mt='30px'>
      {currentPage === 2 || currentPage === 3 ? 
        <Button  variant="outline" size='md' onClick={goBack}>
          <Text fontSize={12} color='#6f6f6f;' fontWeight='bold'>&larr; Previous</Text>
        </Button>
      : null}
      {currentPage === 1 ? 
        <Button variant='solid' size='md' onClick={goForward} colorScheme='teal' >
          <Text fontSize={14} color='white' fontWeight='bold'>{currentPage === 1 ? 'Get Started' : 'Next'} &rarr;</Text>
        </Button>
      : null}
      <Text color='rgb(53, 61, 77, 0.8)'>Step {currentPage} / 3</Text>
    </VStack>
  </>
}

const getMemberPrice = (memberCount) => {
  if (memberCount === 1) {
    return 33
  }
  if (memberCount <= 10) {
    return 28
  }
  if (memberCount <= 50) {
    return 25
  }
  return 23
}

const getProductId = (type, quantiy, isDev) => {
  if (type === 'personal') {
    return isDev ? 12736 : 744850
  } else {
    if (quantiy <= 10) {
      return isDev ? 19984 : 744851
    }
    if (quantiy <= 50) {
      return isDev ? 19987 : 744852
    }
    return isDev ? 19988 : 744854
  }
}

const SignupIssuesInfo = ({ issues, dismiss }) => {
  return (
    <Container pl='1.7rem' mt='20px' bg='teal.500' pt='10px' pb='10px' maxW='300px' color='white' borderRadius='5px' fontSize='var(--chakra-fontSizes-sm)' lineHeight='1.1rem' pos='relative'>
      <Button
        h="1rem"
        size="sm"
        onClick={dismiss}
        _hover={showPasswordIconHoverStyles}
        _active={noBg}
        variant='ghost'
        color='white'
        pos='absolute'
        right='0'
        top='10px'
      >
        X
      </Button>
      <Text pos='relative' left='-1.1rem' fontWeight='600' mb='10px'>
        There are some problems:<br />
      </Text>
      <ul>
        {issues.limited && <li>You exceeded the maximum number of attempts for a while.</li>}
        {issues.email && <li>The email address is already in use.</li>}
        {issues.burner && <li>You tried to use a burner or low reputation email provider.</li>}
      </ul>
    </Container>
  )
}

const AccountChooser = ({ headingMb, headingMt, headingTa, onRadio, radioValue, radioMb, isMobile }) => {
  return <>
    {!isMobile && <Heading as="h1" size='lg' color='white' mb={headingMb} mt={headingMt} textAlign={headingTa}>CHOOSE THE ACCOUNT TYPE</Heading>}
    <RadioGroup onChange={onRadio} value={radioValue} color='white' mb={radioMb}>
      <Stack direction="row" fontWeight='bold'  justify='center'>
        <Radio value="personal" minW={isMobile ? '150px' : null} size={isMobile ? 'lg' : null}>PERSONAL</Radio>
        <Radio value="team" size={isMobile ? 'lg' : null}>TEAM</Radio>
      </Stack>
    </RadioGroup>
  </>
}

function cleanupPaddle() {
  // const win = window as any
  // // otherwise Paddle didn't load if I abandoned a payment by navigating away and then coming back and starting over
  // win.Paddle = null
  // delete win.Paddle

  // // otherwise Paddle fired multiple signup events after finishig if it was reloaded multiple times.
  // if (win._activeCheckout) {
  //   win._activeCheckout.successCallback = null
  //   delete win._activeCheckout.successCallback
  //   win._activeCheckout = { frameTarget: '' } // to prevent issues inside paddle.js, just to keep the console clean of errors, works correctly even without this
  // }
  // win.paddleSuccessCallback = null
  // delete win.paddleSuccessCallback
  // win.PaddleFrame = null
  // delete win.PaddleFrame 
}

const getAccountType = () => {
  const url = new URL(window.location.href)
  const query: {
    at?: string
  } = {}
  for (let entry of url.searchParams.entries()) {
    query[entry[0]] = entry[1]
  }

  return query
}