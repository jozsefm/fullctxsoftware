import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useContext, useCallback, FunctionComponent } from 'react'
import { CaptchaContext, defaultCaptchaState } from '../contexts/CaptchaProvider'
import { CaptchaModalContent } from './modal/CaptchaContent'

const StyledModalContent = styled(ModalContent)`
  background-color: #EEE;
`

const modalMarginLefts = ['10px', '10px', '0']
const modalMarginRights = ['10px', '10px', '0']

type CaptchaProps = { 
  isOpen: boolean
  onClose: (...args) => void
  getCaptchaData:  () => void
  successMessage: FunctionComponent
}
export function Captcha({ isOpen, onClose, getCaptchaData, successMessage }: CaptchaProps) {
  const { answerState, updateCaptchaState, captchaError } = useContext(CaptchaContext)

  const handleClose = useCallback(() => {
    updateCaptchaState(defaultCaptchaState)
    onClose(answerState, captchaError)
  }, [answerState, captchaError])
  
  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size='xl'>
      <ModalOverlay />
      <StyledModalContent marginLeft={modalMarginLefts} marginRight={modalMarginRights}>
        {<CaptchaModalContent isOpen={isOpen} handleClose={handleClose} getCaptchaData={getCaptchaData} successMessage={successMessage}/>}
      </StyledModalContent>
    </Modal>
  )
}