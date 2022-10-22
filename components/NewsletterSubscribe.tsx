import { CheckIcon } from '@chakra-ui/icons'
import {
  Button, Container, FormControl, Heading, Input, Stack, Text, useColorModeValue
} from '@chakra-ui/react'
import { newsletterAction } from 'lib/services/newsletterClientService'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { ExternalLink } from './reviews/common'

export function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  )
  const [error, setError] = useState(false)

  const onSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    setError(false)
    setState('submitting')

    const { message } = await newsletterAction('subscribe', email)
    if (message !== 'OK') {
      setError(true)
      setState('initial')
      return
    } else {
      setState('success')
    }

  }, [email])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  return (
    <Container
      maxW={'lg'}
      bg={useColorModeValue('white', 'whiteAlpha.100')}
      boxShadow={'xl'}
      rounded={'lg'}
      p={6}
      direction={'column'}>
      <Heading
        as={'h2'}
        fontSize={{ base: 'xl', sm: '2xl' }}
        textAlign={'center'}
        mb={5}>
        Subscribe to the Newsletter
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        as={'form'}
        spacing={'12px'}
        onSubmit={onSubmit}>
        <FormControl>
          <Input
            variant={'solid'}
            borderWidth={1}
            color={'gray.800'}
            _placeholder={{
              color: 'gray.400',
            }}
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            id={'email'}
            type={'email'}
            required
            placeholder={'Your Email'}
            aria-label={'Your Email'}
            value={email}
            disabled={state !== 'initial'}
            onChange={onChange}
          />
        </FormControl>
        <FormControl w={{ base: '100%', md: '40%' }}>
          <Button
            colorScheme={state === 'success' ? 'green' : 'blue'}
            isLoading={state === 'submitting'}
            w="100%"
            type={state === 'success' ? 'button' : 'submit'}>
            {state === 'success' ? <CheckIcon /> : 'Submit'}
          </Button>
        </FormControl>
      </Stack>
      <Text
        mt={4}
        fontSize='sm'
        textAlign={'center'}
        color={error ? 'red.500' : 'gray.500'}>
        {error
          ? 'Oh no an error occured! 😢 Please try again later.'
          : state === 'success'
            ? 'You have subscribed! 🎉 Please use the confirmation email we sent.'
            : "You won't receive any spam and you can unsubscribe any time! ✌️"
        }
      </Text>
      <Text
        mt={1}
        fontSize='xs'
        textAlign={'center'}
        color={error ? 'red.500' : 'gray.500'}>
        <i>I need to say this, sorry:</i> By subscribing you accept the standard <ExternalLink href='/legal/tos'>
          Terms and Conditions
        </ExternalLink> and <ExternalLink href='/legal/privacy'>
          Privacy Policy
        </ExternalLink> of the site.
      </Text>
    </Container>
  )
}