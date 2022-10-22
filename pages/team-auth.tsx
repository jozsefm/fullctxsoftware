import { Flex, Text, Icon, Button, HStack, PinInput, PinInputField, Container } from '@chakra-ui/react'
import { CustomLink } from 'components/CustomLink'
import Head from 'components/Head'
import { useCallback, useState } from 'react'
import { BiDoorOpen, BiMailSend } from 'react-icons/bi'
import { GrUserAdmin } from 'react-icons/gr'
import { initCode, submitCode } from 'lib/services/teamAuthClientService'
import { statusMap } from 'lib/services/teamAuthResponseHelper'
import { useRouter } from 'next/router'
import { errorMap } from 'lib/services/commonResponseHelper'

const titleM = { base: '60px auto 25px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const introIconFs = {base: '2rem', md: '3rem'}
const introHeaderFs = { base: '0.9rem', md: '1rem' }

const progress = {
  INITIAL: 'INITIAL',
  PROCESSING: 'PROCESSING',
  ERROR: 'ERROR',
  REQUESTED: 'REQUESTED',
  SUMBITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  LIMITED: 'LIMITED'
}

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function TeamAuth() {
  const [code, setCode] = useState(false)
  const [current, setCurrent] = useState(progress.INITIAL)
  const [codeSet, setCodeSet] = useState(false)
  const router = useRouter()

  const onRequestCode = useCallback(async () => {
    setCurrent(progress.PROCESSING)
    const { status, message } = await initCode()
    if (status === statusMap.ERROR) {
      if (message === errorMap['027']) {
        setCurrent(progress.LIMITED)
      } else {
        setCurrent(progress.ERROR)
      }
    } else {
      setCurrent(progress.REQUESTED)
    }
    
  }, [])

  const onSendCode = useCallback(async () => {
    setCurrent(progress.SUMBITTING)
    const { status } = await submitCode({ code })
    if (status === statusMap.ERROR) {
      setCurrent(progress.ERROR)
    } else {
      setCurrent(progress.SUCCESS)
    }
  }, [code])

  const onAlready = useCallback(() => {
    setCurrent(progress.REQUESTED)
  }, [])

  const onHavent = useCallback(() => {
    setCurrent(progress.INITIAL)
  }, [])

  const onCodeChanged = useCallback((e) => {
    if (e?.length !== 5) {
      setCodeSet(false)
    } else {
      setCode(e)
    }
  }, [])
  
  const onCodeFilled = useCallback(() => {
    setCodeSet(true)
  }, [])
  
  const onOpenProfile = useCallback(() => {
    router.push('/account')
  }, [router])
  
  return (
    <>
      <Head title='Team Admin Authorization • Full Context Development'/>
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
          Team Admin Authorization
        </Text>

        <Flex maxW='600px' direction='column' align='center' mb='50px' id='list'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='20px'>
            <Icon as={GrUserAdmin} pos='relative' right='-10px'/>
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' lineHeight='1.3' mb='15px' w={textW80} maxW='400px' >
            {current === progress.INITIAL || current === progress.PROCESSING
              ? `Request an authorization code to access your team's profile. It will be sent to the admin email address.
                Once verified you will be able to use the profile for the rest of this login session.`
              : null
            }
            {current === progress.REQUESTED || current === progress.SUMBITTING
              ? `The system has sent you the code. Please copy&paste it down below. It's only valid for 5 minutes.`
              : null
            }
            {current === progress.LIMITED
              ? <>
                  <Text as='span'>You have exceeded the allowed number of attempts for a while. If you think this is not the case please </Text>
                  <CustomLink to='/support'>contact support</CustomLink>.
                </>
              : null
            }
            {current === progress.ERROR
              ? <>
                  <Text as='span'>I'm really sorry, but the process failed. Please try again later and if the problem persits </Text>
                  <CustomLink to='/support'>contact support</CustomLink>.
                </>
              : null
            }
            {current === progress.SUCCESS
              ? <>
                  <Text as='span'>Successful verification! You can now access the profile.</Text>
                </>
              : null
            }
          </Text>
          <Flex justify='center' align='çenter' mt='10px' direction='column'>
            {current === progress.INITIAL || current === progress.PROCESSING
              ? <>
                  <Button
                    colorScheme='blue'
                    variant='outline'
                    leftIcon={<Icon as={BiMailSend} fontSize='1.5rem' />}
                    isLoading={current === progress.PROCESSING}
                    onClick={onRequestCode}
                  >
                    Request Code
                  </Button>
                  <Flex as='button' m='25px auto 0 auto' fontSize='0.75rem' color='#6089a1' onClick={onAlready}>Already have one? &rarr;</Flex>
                </>
              : null
            }
            {current === progress.REQUESTED || current === progress.SUMBITTING || current === progress.ERROR
              ? <>
                  <Container borderRadius='xl' p='30px' border='1px solid #eee' boxShadow='xl' mt='30px' centerContent>
                    <HStack mb='30px' borderColor='#b6b6b6'>
                      <PinInput type="alphanumeric" onComplete={onCodeFilled} onChange={onCodeChanged}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>
                    <Button
                      size='sm'
                      colorScheme='green'
                      variant='outline'
                      isLoading={current === progress.SUMBITTING}
                      onClick={onSendCode}
                      disabled={!codeSet}
                    >
                      Authenticate
                    </Button>
                  </Container>
                  <Flex as='button' m='25px auto 0 auto' fontSize='0.75rem' color='#6089a1' onClick={onHavent}>&larr; Haven't requested it yet?</Flex>
                </>
              : null
            }
            {current === progress.SUCCESS
              ? <>
                  <Button
                    colorScheme='blue'
                    variant='outline'
                    leftIcon={<Icon as={BiDoorOpen} fontSize='1.5rem' />}
                    isLoading={current === progress.PROCESSING}
                    onClick={onOpenProfile}
                  >
                    Open Profile
                  </Button>
                </>
              : null
            }
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}