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
  { type: 'Customer Experience', code: 'cx', color: '#f5bc5b' },
  { type: 'Productivity', code: 'pr', color: '#64c769' },
  { type: 'Utilization', code: 'ut', color: '#53329c' },
  { type: 'Direct Costs', code: 'co', color: '#e75559' },
]

const prodPoints = [
  () => <>It's time to ensure you know every NFR (non-functional requirement) that increases user satisfaction and engagement.</>,
  () => <>Then translate them to sofware quality attributes (SQA).</>,
  () => <>Identify the relevant technology- and code quality attributes (TQA & SQA) needed to deliver those SQAs.</>,
  () => <>Consider the whole lifetime of the project. How will the tech stack and system design keep up those quality attributes over time?</>,
  () => <>What external dependencies do you have? (3rd party solutions, APIs provided by other teams, SaaS, etc...)</>,
  () => <>How do these affect the quality attributes of the software you create? What can you do to improve them?</>,
  () => <>Identify the possible architectural design limitations imposed by the current system.</>,
  () => <>Can you efficiently implement the planned features and non-functional requirements with the current setup? If not how can you improve the situation? Think about extendibility and maintainability.</>,
  () => <>How easy it is to understand your existing codebase? How will the current changes affect it? Is it worth it?</>,
  () => <>How easy it is to modify and extend your codebase? How will the current changes affect it? Is it worth it?</>,
  () => <>How will your design decisions affect the different workflows? Will it change how you do implementation, QA, releasing or operation?</>,
  () => <>If yes, identify how will they infuelnce the performance of these processes. What can you do to avoid degradation or even to create improvements?</>,
  () => <>How uniform is your development process? Are there differences or redundancies between the different units of the organization working on similar goal? How will the change affect this?</>,
]

export default function Design({ updateScore = null}) {
  return (
    <>
      <ImageWrapper overlay='#00000087' maximalW>
        <Image priority layout='fill' src='/img/blog/remix/software1.jpg' objectFit='cover' objectPosition='0 51%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/software.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/photos/methodology' target='_blank'>Methodology photo created by rawpixel.com - www.freepik.com</a></ImageContribution>
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
      <InfoBox infoBoxHeader='The building blocks of software design' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <UnorderedList>
            <ListItem>
              <Text>The planning of the software solution including every relevant aspect of the:</Text>
              <chakra.ul pl='20px'>
                <li>System Design</li>
                <li>Architecture</li>
                <li>Project Structure</li>
              </chakra.ul>
            </ListItem>
            <ListItem>
              <Text>Tech stack choices</Text>
            </ListItem>
            <ListItem>
              <Text>Build and deployment pipeline</Text>
            </ListItem>
            <ListItem>
              <Text>Testing pipeline</Text>
            </ListItem>
            <ListItem>
              <Text>Monitoring and Observability</Text>
            </ListItem>
            <ListItem>
              <Text>Project standards and coding conventions</Text>
            </ListItem>
          </UnorderedList>
          <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
          <Text mt='10px'>
            This stage can be executed very formally or informally. The results
            describe how  to implement the the requirements and designs. 
            What system components to use, the details of their connections
            and interdependencies. It might also describe the process of
            creating, verifying, releasing and operating the solution.  Likely it 
            will also contain a roadmap or schedule for the work. 
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
              <Text>DOMAIN SPECIFIC: The architecture and project structure of the current/planned solution</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The relevant factors of the business goals, user needs and development process performance</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The characteristics of the will be/already integrated 3rd party systems and APIs (dependencies)</Text>
            </ListItem>
            <ListItem>
              <Text>DOMAIN SPECIFIC: The planed/in place pipelines and workflows for the whole software delivery process</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
        <Flex minW='100%' direction='column'>
          <Text>
            At this stage most factors that our technical choices should support are
            already defined by the earlier steps. If we were not involved so far, this is the 
            time to explore what are the related TQAs, SQAs and CQAs. Most of
            the limitations imposed by the current skills and capabilities should be
            discovered now, at the latest.  These can influence the earlier stages
            and trigger a realignment of the plans.
          </Text>
          <Text mt='10px'>
            How well our system architecture, project structure, coding 
            conventions and the consumed APIs support extendibility can
            influence the productivity of this design stage. 
          </Text>
        </Flex>
      </InfoBox>
      <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
        <Flex minW='100%' direction={evalDir} justify='space-between'>
          <Flex direction='column' w={revCostLineW} justify='flex-start'  mb={revCostMb}>
            <Text fontWeight='bold'>Revenue</Text>
            <Text>
              This is the most important step for a software developer.
              Identify the quality attributes of the tech stack, system 
              architecture and codebase that best match the needs and
              preferences of the users.<br /><br />
              This is translating the knowledge
              about the users to technical requirements. If you do that,
              your part in preparing the product for success is done. 
            </Text>
          </Flex>
          <Flex direction='column' w={revCostLineW} justify='flex-start'>
            <Text fontWeight='bold'>Costs</Text>
            <Text>
              Consider the planned product lifetime. How can
              you build a system that keeps the user
              satisfaction level high over it while also keeping
              up with the changing demands?<br /><br />
              Choose the tech-stack, system design, infrastructure, project
              structure and conventions along with the CI/CD and QA
              related setup in order to keep costs low without
              compromising the previous.<br /><br />
              Common concerns: Build vs buy.
              Maintainability and extendibility vs development speed.
            </Text>
          </Flex>
        </Flex>
      </InfoBox>
    </>
  )
}