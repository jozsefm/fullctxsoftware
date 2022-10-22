import { chakra, Flex, Image as ChakraImage, ListItem, Text, UnorderedList } from '@chakra-ui/react'
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
  { type: 'Business Opportunity', code: 'bo', color: '#14b7b7' },
  { type: 'Customer Experience', code: 'cx', color: '#f5bc5b' },
  { type: 'Productivity', code: 'pr', color: '#64c769' },
  { type: 'Utilization', code: 'ut', color: '#53329c' },
  { type: 'Direct Costs', code: 'co', color: '#e75559' },
]

const strategyPoints = [
  () => <>Identify the sustainable competitive advantages of the product. <i>Why is it the "best"?</i></>,
  () => <>What are the essential system components to deliver, support and improve them?</>,
  () => <>Which are the critical software quality attributes in delivering and keeping them?</>,
  () => <>Who are the targets of the current strategic goals?</>,
  () => <>What are the required technical capabilities to reach them? Define it regarding:
    <chakra.ul pl='20px' mt='10px'>
      <li>Scale of the workload and the necessary system resources to meet it</li>
      <li>Language and payment support</li>
      <li>Requirements to be present on the target platforms</li>
      <li>Technical factors of legal and standards compliance</li>
    </chakra.ul>
  </>,
]

export default function Strategy({ updateScore = null}) {
  return (
    <>
      <ImageWrapper maximalW>
        <Image priority layout='fill' src='/img/blog/remix/strategy1.jpg' objectFit='cover' objectPosition='0 91%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/strategy.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/photos/people' target='_blank'>People photo created by tirachardz - www.freepik.com</a></ImageContribution>
      <InfoBox infoBoxHeader='Checklist' expanded border='1px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsCheck2Square} boxShadow={'xl'} m={'50px 0 50px 0'}>
        <Flex minW='100%' direction='column' align='flex-start' justify='center' sx={checkListSx}>
          {strategyPoints.map(mapToCheckList)}
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='Tech evaluation' expanded border='3px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsListCheck} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} align='flex-start' justify='space-between'>
          <QaList types={qas} />
          <CurrencyList types={currencyTypes} updateScore={updateScore}/>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The building blocks of a business plan' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text fontWeight='bold'>DESCRIPTION: <Text fontWeight='400' as='span'>The defined scope, values and aims of the organization for a given time period, regarding the outcomes over the following:</Text></Text>
          <UnorderedList mt='20px'>
            <ListItem>
              <Text>The company's influence over its targeted geographical and societal areas</Text>
            </ListItem>
            <ListItem>
              <Text>The lives of its users / customers</Text>
            </ListItem>
            <ListItem>
              <Text>The company's financial performance</Text>
            </ListItem>
            <ListItem>
              <Text>The company's internal matters and organizational performance</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            The business- vision, mission and strategy manifests the leadership's plans with
            the above points and shows their understanding of the required knowledge of this stage.
            One key goal of all these efforts is to create sustainable competitive advantages.
            They should also show it clearly for every employee and customer what are the goals of the company. Our
            ultimate task is the realization of the business strategy. Every decisions we make should be aligned with it. 
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: How to build a sustainable business, all aspects included (financial, organizational, marketing, sales, HR, etc...)</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to maximize the business' performance in the current/targeted industry with the current/planned products and available resources</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            The vision and mission statements are not closely related to technical
            concerns but if your IT skills and capabilities are limited in any way you might
            have to align your goals with them.
          </Text>
          <Text mt='10px'>
            If a scientific project you want to develop requires a supercomputer but you 
            can't get access to one you need to rethink your goals/product ideas. 
            (or work on getting founding, networking, etc... to alleviate the issue)
          </Text>
          <Text mt='10px'>
            On the other hand, the targeted people and scope of operation determines
            many quality attributes about the software, the codebase and the processes
            alike. Technically these can be inferred: Scale of workload,
            Language support, Platform support, Law and standards compliance
            even some of the Functionality. 
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start' mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              Why do the users love the product?<br />
              Why do they prefer it over the competition?<br />
              How will you keep them happy long term?
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              What's the budget for realizing the strategy?<br />
              Identify the cost factors in implementing the strategy
              and make sure to understand their contribution
              to the revenue made by the product. If needed
              balance them using these two factors.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}