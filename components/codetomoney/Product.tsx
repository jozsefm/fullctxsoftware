import { Flex, Text, Image as ChakraImage, UnorderedList, ListItem, chakra } from '@chakra-ui/react'
import { BsCheck2Square, BsListCheck } from 'react-icons/bs'
import Image from 'next/image'
import { FaGraduationCap } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { CgComponents } from 'react-icons/cg'
import { ImageContribution, ImageWrapper } from 'components/reviews/common'
import { checkListSx, CurrencyList, evalDir, InfoBox, mapToCheckList, QaList, revCostLineW, revCostMb } from 'pages/code-to-money-roadmap'
import { GiChart } from 'react-icons/gi'

const qas = ['SQAs', 'TQAs', 'CQAs', 'PQAs', 'CAPs']

const currencyTypes = [
  { type: 'Business Opportunity', code: 'bo', color: '#14b7b7' },
  { type: 'Customer Experience', code: 'cx', color: '#f5bc5b' },
  { type: 'Productivity', code: 'pr', color: '#64c769' },
  { type: 'Utilization', code: 'ut', color: '#53329c' },
]

const prodPoints = [
  () => <>Identify the limitations of what's possible or efficient to design with the used/planned tech stack.</>,
  () => <>Find what's quick and easy to implement and what's hard. The most common bottlenecks are data access and the contents of the UI libraries/design systems.</>,
  () => <>Who should know about these limitation from the decision makers of this stage? Share this knowledge with them.</>,
  () => <>Based on the specific feature ideas and user characteristics defined at this stage, identify what further software and technology quality attributes our solutions should deliver.</>,
]

export default function Product({ updateScore = null}) {
  return (
    <>
      <ImageWrapper maximalW>
        <Image priority layout='fill' src='/img/blog/remix/product11.jpg' objectFit='cover' objectPosition='0 49%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/product.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/vectors/infographic' target='_blank'>Infographic vector created by freepik - www.freepik.com</a></ImageContribution>
      <InfoBox infoBoxHeader='Checklist' expanded border='1px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsCheck2Square} boxShadow={'xl'} m={'50px 0 50px 0'}>
        <Flex minW='100%' direction='column' align='flex-start' justify='center' sx={checkListSx}>
          {prodPoints.map(mapToCheckList)}
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='Tech evaluation' expanded border='3px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsListCheck} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} align='flex-start' justify='space-between'>
          <QaList types={qas} />
          <CurrencyList types={currencyTypes} updateScore={updateScore}/>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The building blocks of product strategy' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>Depending on the scope of the business strategy this stage can involve a whole service portfolio or product line or just a single product.</Text>
            </ListItem>
            <ListItem>
              <Text>
                On the highest-level this describe a chosen set of problems, the
                company tries to solve, through the development of the product that
                would take them the closest to the business vision out of all the 
                possible actions they could do.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                The end result is a description of an exact software solution in
                terms of business functionality (features) to realize the product strategy
                by solving the problems of the users.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Usually a roadmap is also created to prioritize and schedule the strategy implementation.</Text>
            </ListItem>
            <ListItem>
              <Text>
                Most likely it will involve some kind of research into the user problems,
                needs, preferences and the competitor solutions on the market. It might also
                involve introspection of the current working of the company to identify bottlenecks in delivery.
              </Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            By the end of this stage you will have the plans for what the next product
            versions should do and also a good enough understanding of how they
            should do it. The specific details will be worked out in Stage 5.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: Product design, User Experience, User Research, Market Research, Organizational Performance</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The characteristics of the current/targeted customers, the existing/planned product, the market and the organization's capabilities</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            The user expectations about the product in terms of functionality
            and non-functional requirements are determined in details here. This serves
            as the basis of what kind of software and technology quality attributes
            we should choose to implement them.
          </Text>
          <Text mt='10px'>
            In established organizations, IT skills and capabilities can create restrictions on what's possible or 
            what's effective to develop, like what components the UI can be easily built
            from or what kinds of data can be presented to the users with low 
            implementation effort. This way they can influence the effectiveness
            of these processes.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start' mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              What are the most needed features of the product by your customers right now that you don't offer yet? <br />
              Developer insights are needed to estimate how much effort it is to deliver them, which is essential for setting up an effective roadmap.
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              What are the features that will have the highest ROI and generate the highest overall revenue?<br />
              How do these match with the user needs?<br />
              Your insights are needed to create realistic estimations about the costs of development for these features.<br />
              Find the right balance between the cost of delivery and the expected profits.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}