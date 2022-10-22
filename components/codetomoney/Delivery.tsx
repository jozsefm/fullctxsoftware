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
  () => <>How fast can you deliver a new version of the software to the users? Identify it's technical factors.</>,
  () => <>Is your system prone to issues during a release? Identify it's technical factors.</>,
  () => <>Is it easy to detect the issues when they happen? Identify it's technical factors.</>,
  () => <>Is it easy to roll back changes when issues happen? Identify it's technical factors.</>,
  () => <>Identifty external system or teams you need to synchronize the release with. How can you get (more) independent?</>,
  () => <>How easy it is to document the contents of a release? Identify it's technical factors. Are there automation tools/integrations to help?</>,
  () => <>Can your product auto update when a new version is available? If not how easy it is for the users to install a new version? Identify it's technical factors.</>,
  () => <>Can you notify your users when a new version is available? Identify it's technical factors.</>,
  () => <>Does your infrastructure and system design support A/B testing, feature-flags, etc...? Identify it's technical factors.</>,
]

export default function Delivery({ updateScore = null}) {
  return (
    <>
      <ImageWrapper lessBlur maximalW>
        <Image priority layout='fill' src='/img/blog/remix/dv18.jpg' objectFit='cover' objectPosition='0 35%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/delivery.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://pixabay.com/illustrations/monitor-binary-binary-system-1307227/' target='_blank'>Binary System image from pixabay.com</a></ImageContribution>
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
      <InfoBox infoBoxHeader='The building blocks of delivering software' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>Turning the implemented code into a usable product.</Text>
            </ListItem>
            <ListItem>
              <Text>The result can manifest as many things like: a patch, update, DLC, DVD, web, desktop or mobile app, or a physical product with a software component and more...</Text>
            </ListItem>
            <ListItem>
              <Text>Processes and infrastructure to deliver it to the customers.</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            The release of the product is the real entry point to the customer lifecycle
            where the encoded, collective business and other professional knowledge
            of the creators is put to the test. How and when it's done is itself a factor 
            in the success of the product. 
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: Software build & deployment best practices, tools and techniques</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The requirements and designs prepared so far</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to ensure the systems remain operational or that the downtime is minimal during a release</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to integrate the related organizational and development processes with software rollout</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: When is the right time to do the releasing</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            Some of the CQAs and TQAs affect how easy it is to do the releasing of
            the product, through that they influence the effectiveness and ultimately
            the costs of the process. It can also have an impact over the customer
            experience if  releasing is slow and error-prone so it can influence the
            revenue of a company  as well.
          </Text>
          <Text mt='10px'>
            Target efficiency levels of this stage can serve as a criteria for choosing a 
            tech stack, system design or architecture.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start' mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              Communicate the release of the software to the users.<br />
              Minimize the disruption caused by an update.
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              The goal is to automate most of the work possible to reduce the costs of manual work and reduce the chance of human error.<br />
              Eliminating error sources also reduces the costs of supporting the product.<br /><br />
              This, of course, has to be balanced with the costs of manual work, if it's low don't invest in the setup of automation that much.<br /><br />
              A relevant hidden cost factor is the cost of quality.
              Make sure to avoid disrupting the users as much as possible.
              So write code which does not break releasing or updating the software.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}