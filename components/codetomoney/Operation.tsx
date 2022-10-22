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

const implPoints = [
  () => <>Identify how the tools and system architecture support observability.</>,
  () => <>Is it easy to integrate your system with monitoring, logging and analytics tools? Identify it's technical factors.</>,
  () => <>Can you easily alert someone when issues happen? Identify it's technical factors.</>,
  () => <>How well can you trace back the errors to their root cause with the tools and system design? Identify it's technical factors.</>,
  () => <>Is it easy to connect the events to the relevant parts of code? (sourcemaps, debugging info) Identify it's technical factors.</>,
  () => <>Can the customers easily report their usage issues? Identify it's technical factors.</>,
  () => <>How well can your systems auto recover? Identify it's technical factors.</>,
  () => <>If needed, how well can your system auto scale? Identify it's technical factors.</>,
  () => <>Is it possible to gracefully degrade the functionality in case of system failures? Identify it's technical factors.</>,
  () => <>How well protected is the system from attacks? How fast can you detect such attempts? Identify it's technical factors.</>,
]

export default function Operation({ updateScore = null}) {
  return (
    <>
      <ImageWrapper maximalW>
        <Image priority layout='fill' src='/img/blog/remix/operation2.jpg' objectFit='cover' objectPosition='0 65%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/operation.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/vectors/internet' target='_blank'>Internet vector created by macrovector - www.freepik.com</a></ImageContribution>
      <InfoBox infoBoxHeader='Checklist' expanded border='1px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsCheck2Square} boxShadow={'xl'} m={'50px 0 50px 0'}>
        <Flex minW='100%' direction='column' align='flex-start' justify='center' sx={checkListSx}>
          {implPoints.map(mapToCheckList)}
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='Tech evaluation' expanded border='3px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsListCheck} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} align='flex-start' justify='space-between'>
          <QaList types={qas} />
          <CurrencyList types={currencyTypes} updateScore={updateScore}/>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The building blocks of operating software' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>Keeping the product functional for the users</Text>
            </ListItem>
            <ListItem>
              <Text>Monitoring its properties like performance, availability, integrity, etc...</Text>
            </ListItem>
            <ListItem>
              <Text>Detecting and reacting to issues</Text>
            </ListItem>
            <ListItem>
              <Text>Offering support for the customers</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            This is the dominant part of the solution's service aspect. It requires
            great familiarity with the working and usage patterns of the product,
            and has heavy impact on the customers' satisfaction and
            engagement.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: Maintenance, observability, analytics and support tools and activities</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The operation and interdependencies of the system</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The recurring processes and events during the operation of the system</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to effectively analyze and introspect the internal state of the system</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to offer high quality customer service</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            Many aspects of the operational tasks require certain SQAs and
            TQAs in order to be effective. This way technology choices concerning this stage
            can influence both revenue and costs. 
          </Text>
          <Text mt='10px'>
            The targeted efficiency levels and specific operational tasks or
            capabilities can serve as a criteria for choosing a specific tech stack,
            components or system designs.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start'  mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              It's simple. Keep the product working flawlessly as much as possible.
              That way you will raise (or not lower) trust and confidence in your product.<br /><br />
              Communicate issues early if they happen.<br />
              Offer stellar customer support.
              The ability to understand the inner workings of the system helps with that.
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              There's a cost of observability unique to the product that has to be balanced with the costs of not-detecting issues or not detecting them early in addition to the costs of not gaining new insights into the usage patterns of software.
              This tends to grow as projects mature but its importance is also significantly increasing.<br /><br />
              There's also a cost of support that has to be balanced with the costs of user dissatisfaction.<br /><br />
              You can influence these factors by delivering the right levels of availability, resiliency, integrity, security and varying other SQAs. 
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}