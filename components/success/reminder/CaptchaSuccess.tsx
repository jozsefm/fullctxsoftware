import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
} from '@chakra-ui/react'

export const CaptchaSuccess = () => {
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="auto"
        mt='20px'
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Request received!
        </AlertTitle>
        <AlertDescription>
          If an account is already registered with this email, you will soon receive a new access link.
          All sessions started with the old link are automatically terminated.
          <br />
          <br />
          <i>I hope you learned something fun!</i> 😀
        </AlertDescription>
      </Alert>
    </>)
}