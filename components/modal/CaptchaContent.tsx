import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Box,
  Link,
  Spinner,
  Center,
  Fade
} from '@chakra-ui/react'
import { getQuestion, sendAnswer } from 'lib/services/captchaClientService'
import { resultMap, statusMap } from 'lib/services/captchaResponseHelper'
import styled from '@emotion/styled'
import { useContext, useCallback, Ref, useRef, useState, useEffect } from 'react'
import { CaptchaContext, answerInit, defaultCaptchaState } from 'contexts/CaptchaProvider'
import { ExternalLinkIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { normalize } from 'lib/normalizeString'

const Error = styled(Box)`
  display: flex;
`

const modalCloseHoverStyles = { backgroundColor: '#CCC' }

type CaptheModelContentProps = {
  isOpen, handleClose, getCaptchaData, successMessage
}
export function CaptchaModalContent({ isOpen, handleClose, getCaptchaData, successMessage: SuccessMessage }: CaptheModelContentProps) {
  const { questionState, answerState, updateQuestionState, updateAnswerState, updateCaptchaState, captchaError } = useContext(CaptchaContext)

  const answerRef: Ref<HTMLInputElement> = useRef()
  const [isAnswerFilled, setIsAnswerFilled] = useState(false)

  const setAnswerValidity = useCallback(() => {
    const answer = answerRef.current.value
    setIsAnswerFilled(Boolean(answer.length))
  }, [answerRef, setIsAnswerFilled])

  const onAnswerFocus = useCallback(() => {
    if (answerState.result === resultMap.WRONG) {
      updateAnswerState(answerInit)
    }
  }, [answerState])

  const handleSubmit = useCallback(async () => {
    const { action, ...rest } = getCaptchaData()
    const answer = normalize(answerRef.current.value)
    updateAnswerState({
      ...answerInit,
      status: statusMap.SUBMITTING
    })
    const responseData = await sendAnswer(questionState.number, answer, action, { ...rest })
    updateAnswerState(responseData)
  }, [answerRef, questionState, getCaptchaData])

  useEffect(() => {
    if (isOpen) {
      updateCaptchaState(defaultCaptchaState)
      if (answerRef.current) {
        answerRef.current.value = ''
      }
      setIsAnswerFilled(false)
      Promise.all([new Promise((resolve) => {
        setTimeout(resolve, 400)
      }), getQuestion()]).then(([_, result]) => {
        updateQuestionState(result)
      })
    }
  }, [isOpen, answerRef, setIsAnswerFilled])
  
  return (
    <>
      <ModalHeader>Captcha Question</ModalHeader>
      <ModalCloseButton />
      <ModalBody mt='-15px'>
        {answerState.result !== resultMap.CORRECT && !captchaError && (
          <Text fontSize='0.75rem'>
            I'm sorry for putting you through this, I know it's annoying, but you are saving me from the bots right now, you are a hero!
          </Text>
        )}
        {captchaError && (
          <Fade in={true}>
            <Error padding="6" boxShadow="lg" bg="white" mt='20px'>
              <WarningTwoIcon color='#d73232' fontSize='1.8rem' mt='6px'/>
              <Text fontSize='1rem' ml='30px' color='black'>
                {questionState.status === statusMap.ERROR ? questionState.message : null}
                {answerState.status === statusMap.ERROR
                  ? answerState.result === resultMap.CORRECT
                    ? 'The answer is correct but... ' + answerState.message
                    : answerState.message
                  : null
                }
              </Text>
            </Error>
          </Fade>
        )}
        {!captchaError && (
          questionState.question && answerState.result !== resultMap.CORRECT ? (
            <Fade in={true}>
              <Box padding="6" boxShadow="lg" bg="white" mt='20px'>
                <Text fontWeight="bold" fontStyle="italic" fontSize='1.1rem'>{questionState.question}</Text>
              </Box>
              {questionState.status !== statusMap.ERROR && answerState.status !== statusMap.ERROR && (
                <>
                  <Heading as="h4" size="sm" mt='30px' mr="5px" display="inline-block">
                    Hint:
                  </Heading>
                  <Text as="span">Follow the link to find the answer. {questionState.tip}</Text>
                  <br />
                  <Heading as="span" size="sm" mt='10px' mr="5px" display="inline-block">
                    Source: 
                  </Heading>
                  <Link href={questionState.link} isExternal fontSize="14px">{questionState.link}<ExternalLinkIcon mx="2px" /></Link>
                  <FormControl id="answer" isInvalid={answerState.result === resultMap.WRONG}>
                    <FormLabel color='black'>
                      <Heading as="h4" size="md" mt='30px'>
                        Your Answer:
                      </Heading>
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        bg='white'
                        pr="4.5rem"
                        type="text"
                        placeholder="Write it here"
                        color='black'
                        onChange={setAnswerValidity}
                        ref={answerRef}
                        autoFocus
                        onFocus={onAnswerFocus}
                      />
                    </InputGroup>
                    <FormErrorMessage>That is not the correct answer, please try again!</FormErrorMessage>
                    <FormHelperText>Capitalization and white spaces don't matter</FormHelperText>
                  </FormControl>
                </>
              )}
            </Fade>
          ) : answerState.result === resultMap.CORRECT ? (
              <Fade in={true} >
                <SuccessMessage />
            </Fade>
          ) : (
            <Center h='90px' mt='60px'>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )
        )}
      </ModalBody>

      <ModalFooter>
        <Button mr={3} onClick={handleClose} variant="ghost" _hover={modalCloseHoverStyles}>
          Close
        </Button>
        {questionState.question && !captchaError && answerState.result !== resultMap.CORRECT && (
          <Button
            variant="solid"
            colorScheme="green"
            disabled={!isAnswerFilled}
            onClick={handleSubmit}
            isLoading={answerState.status === statusMap.SUBMITTING}
            loadingText="Checking Answer">
              Send Answer
            </Button>
        )}
      </ModalFooter>
    </>
  )
}