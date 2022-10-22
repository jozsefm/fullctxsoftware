import { Flex, Image as ChakraImage, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { ImageContribution, ImageWrapper } from 'components/reviews/common'
import Image from 'next/image'
import { checkListSx, CurrencyList, evalDir, InfoBox, mapToCheckList, QaList, revCostLineW, revCostMb } from 'pages/code-to-money-roadmap'
import { AiOutlineCode } from 'react-icons/ai'
import { BsCheck2Square, BsListCheck } from 'react-icons/bs'
import { CgComponents } from 'react-icons/cg'
import { FaGraduationCap } from 'react-icons/fa'
import { GiChart } from 'react-icons/gi'

const qas = ['SQAs', 'TQAs', 'CQAs', 'PQAs', 'CAPs']

const currencyTypes = [
  { type: 'Customer Experience', code: 'cx', color: '#f5bc5b' },
  { type: 'Productivity', code: 'pr', color: '#64c769' },
  { type: 'Utilization', code: 'ut', color: '#53329c' },
  { type: 'Direct Costs', code: 'co', color: '#e75559' },
]

const orgPoints = [
  () => <>Identify the technical elements of your company- and engineering cultures. (What are the tools or work methodologies that the developers love to use, etc...)</>,
  () => <>Are these aligned with the delivery of successful products?</>,
  () => <>How does your established/planned development process influence those elements?</>,
  () => <>Identify the key technical components of the tech stack and the development process that influence employee engagement on your project.</>,
  () => <>How experienced are the developers in working with the current/planned tools and techniques?</>,
  () => <>How do the used/planned tools and technologies affect the utilization of the workforce?</>,
  () => <>Identify if there are technology specific dependencies of the integrations between task management tools and the build/delivery toolchain.</>,
  () => <>Identify if there are dependencies between your technology stack and the effectiveness of other organizational processe. (HR, hiring, financial decision making, etc...)</>,
]

export default function OrgProc({ updateScore = null}) {
  return (
    <>
      <ImageWrapper maximalW>
        <Image priority layout='fill' src='/img/blog/remix/org1.jpg' objectFit='cover' objectPosition='0 57%'/>   
        <Flex pos='relative' zIndex='2' margin='0 auto' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/org.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution>Photo by <a href="https://unsplash.com/@hugorrocha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Hugo Rocha</a> on <a href="https://unsplash.com/s/photos/sticky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
      <InfoBox infoBoxHeader='Checklist' expanded border='1px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsCheck2Square} boxShadow={'xl'} m={'50px 0 50px 0'}>
        <Flex minW='100%' direction='column' align='flex-start' justify='center' sx={checkListSx}>
          {orgPoints.map(mapToCheckList)}
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='Tech evaluation' expanded border='3px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsListCheck} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} align='flex-start' justify='space-between'>
          <QaList types={qas} />
          <CurrencyList types={currencyTypes} updateScore={updateScore}/>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The building blocks of an organizational setup' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>The role and responsibility structure of the workforce</Text>
            </ListItem>
            <ListItem>
              <Text>The breakdown and scheduling of tasks</Text>
            </ListItem>
            <ListItem>
              <Text>All of these optimized for the realization of the business strategy</Text>
            </ListItem>
            <ListItem>
              <Text>On this level it sounds simple but multiple professions were born to handle each of these aspects</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            The ideal organizational setup is a function of product strategy and even system architecture.
            It involves employee skills, company culture, the used tools and work methodologies,
            the business processes and the whole product development lifecycle. In the end, all these should be
            built around supporting the delivery of the product- and business strategies.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: How to run an organization effectively, efficiently and with optimal resource utilization</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to maximize the organizational performance with the currenty owned or the planned future resources (people, assets, etc...)</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            Ideally the organizational structure and processes are there to support
            the  most effective way of creating and developing the product. In an established organization,
            the current IT skills and capabilities might determine  - in part and temporarily - the possible
            workflows of product development. In that way they can constraint how
            does the optimal set up of the organization looks like.
          </Text>
          <Text mt='10px'>
            Technical factors such as the coupling of the system architecture, the employed CI/CD or design processes
            can all influence how you should structure the organization for optimal performance.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start'  mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              How to set up the development and other processes so that you can offer a competitive product? (price, time-to-market)
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              How does the team and department setup affect the costs of software development?<br />
              Do you have the right skills and expertise at the right place?<br />
              How can you establish processes that produce high quality software while keeping costs to the minimal possible?
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}