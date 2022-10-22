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
  () => <>How do the tools and techniques you use support rapid development? Do you quickly see the results of code changes? Is debugging painless?</>,
  () => <>How well can the tools and system design support replicating or simulating the production environment during development and testing? Identify it's technical factors.</>,
  () => <>How efficient are the automated testing tools supported by your stack and architecture? (unit, integration, performance, e2e testing and more...) Identify it's technical factors.</>,
  () => <>How easy is it to define and enforce common coding and formatting conventions on your project? How do the ecosystem of the tech stack you use support these?</>,
  () => <>How's the documentation? Both for 3rd party and for your internal tools. What's their quality?</>,
  () => <>Is there support to automate the documentation and report generation for newly created code? Document what enables it.</>,
  () => <>Identify the level of community support for the common issues you can face while working with the tools. Include the quality of the available training material when relevant.</>
]

export default function Implementation({ updateScore = null}) {
  return (
    <>
      <ImageWrapper maximalW>
        <Image priority layout='fill' src='/img/blog/remix/impl2.jpg' objectFit='cover' objectPosition='0 85%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/implementation.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution>Photo by <a href="https://unsplash.com/@israelandrxde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Israel Andrade</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
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
      <InfoBox infoBoxHeader='The building blocks of implementing software' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>Creating the product according to the designs, plans and roadmaps</Text>
            </ListItem>
            <ListItem>
              <Text>Close collaboration between developers and other professions</Text>
            </ListItem>
            <ListItem>
              <Text>Quality assurance that increases the delivered value and goal alignment</Text>
            </ListItem>
            <ListItem>
              <Text>Managed, tracked and continuously refined process</Text>
            </ListItem>
            <ListItem>
              <Text>Naturally involves uncertainty, exploration and failure as parts of eventually creating the desired solution (just as all the earlier stages)</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            The result is the next version of the code base. At this point the majority of the 
            business knowledge discussed so far has been encoded into source
            code and maybe data and config files. Around 80% of our part in 
            creating money is done at this point. 
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
        <Flex minW='100%'>
          <UnorderedList>
            <ListItem>
              <Text>GENERIC: Software development best practices, tools and techniques</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The requirements and designs prepared so far</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to best execute the implementation with the current/planned tools and processes</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The business priority of functional and non-functional properties of the software</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: How to best check and ensure the quality of the current/planned product</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            The process of creating the software itself is a source of costs so
            the usage of any tool that makes us more productive or increases
            the utilization of the owned assets is a factor in the total financial performance
            of the company.
          </Text>
          <Text mt='10px'>
            Investing in QA tasks is a mid- to long-term reduction in total costs.
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start'  mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              Write software that delivers those SQAs, TQAs and CQAs. Make sure to not degrade them when modifying the existing systems.
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              What are the developers good at using and what do they love to use?<br />
              The speed and quality of the development work are the key cost factors that
              we can influence through technical means.<br />
              Using tools that the developers know and love are the main contributor in this regard.<br /><br />
              This has to be balanced with paying the costs of the productivity
              drop if they have to learn something new, in case those tool or technique will pay out on mid to long-term.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}