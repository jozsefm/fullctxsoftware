import { CheckIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Image, Link, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { LinkButton } from 'elements/Button'
import { motion, useMotionValue } from 'framer-motion'
import NextLink from 'next/link'
import { Ref, useCallback, useEffect, useRef, useState } from 'react'

const personalFeatures = ['Lifetime Online Access', 'Community Membership', 'Direct Customer Support', 'All Future Updates']
const organizationFeatures = ['Everything in Personal', 'Better Price Per Account', 'Hassle Free Management', 'Easy Invitation']

export default function BelowFold5() {
  return (
    <>
      <Flex direction='column' w='100%' overflow='hidden' justify='center' align='center' p='15px 0 15px 0' pos='relative' mb='29'>
        <Image src='/img/showcase.png' w='80%' maxW='1000px' mt='50px'/>
        <Flex justify='center' align='center' m='50px 0 40px 0' direction='column'>
          <Text textAlign='center' fontSize='1rem' color='gray.800' fontWeight='700' lineHeight='1.1' mb='15px'>
            Get the online book
          </Text>
          <Text textAlign='center' fontSize='2rem' color='gray.800' fontWeight='700' lineHeight='1.1' mb='15px'>
            Pricing
          </Text>
          <Text textAlign='center' fontSize='1.5rem' color='blue.500' fontWeight='700' lineHeight='1.1' mb='25px' w='82%' maxW='900px' fontStyle='italic' >
            The Full Context Software Development book used to cost money but now all content is completely free and open source!
          </Text>
        </Flex>
      </Flex>
    </>
  )
}


const Slider = styled(motion.div)`
  cursor: grab;
  display: flex;
`

const SliderWrapper = styled.div`
  overflow-x: hidden;
  pointer-events: auto;
  max-width: 100vw;
`

const DragSlider = ({
  children
}) => {
  const ref: Ref<HTMLDivElement> = useRef(null)
  const x = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth]: [number, any] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc: number, node: HTMLElement) => acc + node.clientWidth,
          0
        )
      )
    }

    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth)
    }
    
    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth)
    }

    calcSliderChildrenWidth()
    calcSliderWidth()
    calcSliderConstraints()

    window.addEventListener('resize', calcSliderChildrenWidth)
    window.addEventListener('resize', calcSliderWidth)
    window.addEventListener('resize', calcSliderConstraints)

    return () => {
      window.removeEventListener('resize', calcSliderChildrenWidth)
      window.removeEventListener('resize', calcSliderWidth)
      window.removeEventListener('resize', calcSliderConstraints)
    }
  }, [ref, sliderChildrenWidth, sliderWidth])

  const SliderWrap = useCallback(({ children }) => {
    return (
      <SliderWrapper>
        <Slider
          ref={ref}
          drag='x'
          initial={{ x: 0 }}
          style={{ x }}
          dragConstraints={{
            left: -sliderConstraints,
            right: 0
          }}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20, power: 1 }}
        >
          {children}
        </Slider>
      </SliderWrapper>
    )
  }, [children, sliderConstraints])

  return <SliderWrap>{children}</SliderWrap>
}


const AlternateStyle = {
  bg: 'blue.500',
}

const Card = ({ first = false, title, features }) => {
  return (
    <Center pt={8} pb={14} pl={first ? '30px' : null} pr='30px'>
      <Box
        minW='290px'
        w='full'
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow='2xl'
        rounded='md'
        overflow='hidden'>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align='center'>
          <Text
            fontSize='md'
            fontWeight={500}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            px={3}
            color='blue.500'
            rounded='full'>
            {title}
          </Text>
          {first
            ? <Stack direction='row' align='center' justify='center'>
                <Text fontSize='3xl'>$</Text>
                <Text fontSize='6xl' fontWeight='800'>
                  33
                </Text>
                <Text color='gray.500' decoration='line-through'>$65</Text>
              </Stack>
            : <Flex direction='column' align='center' justify='center'>
                <Text fontSize='4xl' fontWeight='bold' mt='5px'>15% - 30%</Text>
                <Text fontSize='lg' mb='5px'>off of the personal plan</Text>
              </Flex>
          }
        </Stack>

        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={5} py={10}>
          <List spacing={3} pl={first ? null : 6}>
            {features.map((feature, i) => {
              return (
                <ListItem key={i}>
                  <ListIcon as={CheckIcon} color="blue.400" />
                  {feature}
                </ListItem>
              )
            })}
          </List>

          <LinkButton
            lh='40px'
            mt={10}
            w='full'
            bg='blue.400'
            color='white'
            rounded='xl'
            boxShadow='0 5px 20px 0px rgb(72 129 187 / 43%)'
            _hover={AlternateStyle}
            _focus={AlternateStyle}>
            <Link href={first ? '/signup?at=p' : '/signup?at=t'} as={NextLink}>{first ? 'Start Learning' : 'Create Your Team'}</Link>
          </LinkButton>
          <Text fontSize='sm' textAlign='center' color='#696969' mt='20px'>see <Text as='span' decoration='underline'><Link href='/pricing' as={NextLink}>Pricing</Link></Text> for details</Text>
        </Box>
      </Box>
    </Center>
  )
}