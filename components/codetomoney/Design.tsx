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

const prodPoints = [
  () => <>Identify the existing/possible integrations between the tech stack and the design tools that help to increase the efficiency of the process.</>,
  () => <>Are there related organizational units where similar work is done? Can you reuse or integrate their components? Are the tech stacks compatible to allow it? If not would it be worth the effort to align them?</>,
  () => <>Build vs buy. Identify the cases when it's better to simply use/buy a pre-made component library, design system, template or a visual design. It's a collaborative question for development and design.</>,
]

export default function Design({ updateScore = null}) {
  return (
    <>
      <ImageWrapper overlay='#00000066' maximalW>
        <Image priority layout='fill' src='/img/blog/remix/design2.jpg' objectFit='cover' objectPosition='0 0'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/design.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution>Photo by <a href="https://unsplash.com/@themephotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Theme Photos</a> on <a href="https://unsplash.com/s/photos/design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
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
      <InfoBox infoBoxHeader='The building blocks of product design' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>Every relevant type of design about the look & feel of the software product: UI/visual design, interaction design, information design, etc... </Text>
            </ListItem>
            <ListItem>
              <Text>Optimized to realize specific business goals with the target/current customers</Text>
            </ListItem>
            <ListItem>
              <Text>Gives shape and form to the planned functionalities and refines them</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            The outputs of this stage already encode much of the earlier knowledge
            about the user, the market, and the industry within them. They are the
            visual  representation of the expected software product. This way it often
            also hides the insights used to create them from the following stages. 
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: General design methods and best practices, Marketing, Copywriting, SEO</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The characteristics of the current/targeted customers, the existing/planned product, the market and industry trends</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            Detailing the next step of the product strategy execution doesn't involve
            new technical concerns. Issues and limitations can be found out during
            this phase that might lead to refining the strategy, and/or changing the
            roadmap, that way influencing the technical requirements as well.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start' mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              What are the preferences of your users about the look & feel of the product?<br />
              How can you WOW them? (exceed their expectations)
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              Shoul we build a custom design system or buy pre-made designs?<br />
              Your insights are needed to do the cost/benefit evaluation as a developer
              can offer alternative technical solutions based on the tech-stack or system capabilities to reduce costs.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}