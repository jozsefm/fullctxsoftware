
import { createContext, useCallback, useEffect, useState } from 'react'
import { statusMap } from '../lib/services/captchaResponseHelper'
export const questionInit = { status: '', message: '', question: '', tip: '', link: '', number: -1 }
export const answerInit: { status: string; message: string; result?: string } = { status: statusMap.INITIAL, message: '', result: '' }

export const defaultCaptchaState = {
  question: questionInit,
  answer: answerInit
}

export const CaptchaContext = createContext(defaultCaptchaState as any)
export const CaptchaProvider = ({ children }) => {
  const [questionState, setQuestionState] = useState(defaultCaptchaState.question)
  const [answerState, setAnswerState] = useState(defaultCaptchaState.answer)
  const [captchaError, setCaptchaError] = useState(false)

  const updateQuestionState = useCallback((state) => {
    setQuestionState({ ...questionState, ...state })
  }, [questionState, setQuestionState])

  const updateAnswerState = useCallback((state) => {
    setAnswerState({ ...answerState, ...state })
  }, [answerState, setAnswerState])

  const updateCaptchaState = useCallback((state) => {
    setQuestionState({ ...questionState, ...state.question })
    setAnswerState({ ...answerState, ...state.answer })
  }, [questionState, answerState])

  useEffect(() => {
    setCaptchaError(questionState.status === statusMap.ERROR || answerState.status === statusMap.ERROR)
  }, [questionState.status, answerState.status])

  return (
    <CaptchaContext.Provider value={{ questionState, answerState, captchaError, updateQuestionState, updateAnswerState, updateCaptchaState }}>
      {children}
    </CaptchaContext.Provider>
  )
}