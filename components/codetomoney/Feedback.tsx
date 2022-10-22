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
  { type: 'Business Opportunity', code: 'bo', color: '#14b7b7' },
  { type: 'Customer Experience', code: 'cx', color: '#f5bc5b' },
  { type: 'Productivity', code: 'pr', color: '#64c769' },
  { type: 'Utilization', code: 'ut', color: '#53329c' },
  { type: 'Direct Costs', code: 'co', color: '#e75559' },
]

const implPoints = [
  () => <>How do you support collecting feedback from the software itself? (Ratings, Comments, Explicit feedback functionality) What system properties/components enable these?</>,
  () => <>Can your product do automatic error and usage-statistics reporting? Do you collect crash and error data? What system properties/components enable these?</>,
  () => <>(Non-technical) Do you participate in or host user communities? </>,
  () => <>Can you use the data from your system together with user feedback to find new insights and help the product development? What system properties/components enable it?</>,
  () => <>How much human effort is required to gather this data? How well can your tools support automating it? What system properties/components enable these?</>,
]

export default function Feedback({ updateScore = null}) {
  return (
    <>
      <ImageWrapper maximalW>
        <Image priority layout='fill' src='/img/blog/remix/feedback.jpg' objectFit='cover' objectPosition='0 13%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/feedback.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/vectors/label' target='_blank'>Label vector created by freepik - www.freepik.com</a></ImageContribution>
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
      <InfoBox infoBoxHeader='The building blocks of customer feedback' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>Collecting user feedback</Text>
            </ListItem>
            <ListItem>
              <Text>Engaging with the user community</Text>
            </ListItem>
            <ListItem>
              <Text>Gathering operational statistics and reports</Text>
            </ListItem>
            <ListItem>
              <Text>Analyzing the available information to turn it into actionable insights</Text>
            </ListItem>
            <ListItem>
              <Text>Evaluating the performance of the product in meeting its intended purposes in light of those insights</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            With gaining external (user) and internal (operational) feedback
            the process can start again by utilizing the gained insights to
            create new business ideas big or small, ranging from a feature
            improvement to the concept of completely new products.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: How to effectively engage the customers through the product and other mediums</Text>
            </ListItem>
            <ListItem>
              <Text>GENERIC: How to turn data into usable insights</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The current business goals, metrics, KPIs, OKRs to track and measure</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The userbase: where to reach them, what tone to use, etc...</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            Gathering feedback from the product, both about usage patterns,
            events and its internal state might require certain technical
            capabilities, SQAs and TQAs.
          </Text>
          <Text mt='10px'>
            This way we have to consider if a tech stack, the tools or system 
            architecture can provide them and to what degree and with how much effort.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start' mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              This is a very important step. Listen to the users as much as possible.
              React to their feedback.
              Involve them in the product development.<br /><br />
              Do that faster and more often than the competition and you will be well off to create an engaged and loyal customer base.
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              You can roll your own solutions or use both online and offline paid services to handle feedback gathering, user insights and analytics.
              Integration work might be required for some of them.<br /><br />
              The relevant costs come from the service fees and the needed development work.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}