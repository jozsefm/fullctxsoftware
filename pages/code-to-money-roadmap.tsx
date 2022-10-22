import { Box, Button, ButtonGroup, chakra, Checkbox, Collapse, Flex, Heading, Icon, IconButton, Image as ChakraImage, Img, Input, ListItem, SkeletonText, Text, Textarea, UnorderedList, useDisclosure } from '@chakra-ui/react'
import { PostHeading, Quote } from 'components/blog/PostElements'
import Exchange from 'components/codetomoney/Exchange'
import { ExternalLink, ImageContribution, ImageWrapper, InternalLink } from 'components/reviews/common'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Scrollbars from 'rc-scrollbars'
import { cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AiOutlineCode } from 'react-icons/ai'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { BsCheck2Square, BsInfoCircle, BsListCheck } from 'react-icons/bs'
import { CgChevronDoubleDownR, CgChevronDoubleUpR, CgCloseO, CgComponents } from 'react-icons/cg'
import { FaGraduationCap } from 'react-icons/fa'
import { FiCheckCircle, FiEdit } from 'react-icons/fi'
import { GiChart } from 'react-icons/gi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { VscAdd, VscCheck, VscNote, VscTrash } from 'react-icons/vsc'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const roadmapSEO = {
  title: "Code To Money Roadmap Guide • Full Context Development",
  description: "The programmers' interactive guide to making tech decisions that maximize revenue and minimize costs",
  canonical: 'https://www.fullcontextdevelopment.com/code-to-money-roadmap',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/code-to-money-roadmap',
    title: 'Code To Money Roadmap Guide',
    description: "The programmers' interactive guide to making tech decisions that maximize revenue and minimize costs",
    site_name: 'Full Context Development',
    type: 'article',
    images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/hotlink-ok/cmrShare.png',
        width: 1600,
        height: 900,
        alt: "Code to Money Roadmap - The programmers' interactive guide to maximize revenue and minimize costs",
        type: 'image/png',
      },
    ],
  }
}

const marginTop = {
  base: '50px'
}
const marginBottom = {
  base: '100px'
}
const paddingTops = ['65px !important', '65px !important', '91px !important', '91px !important']
const layoutMW: any = {
  base: '100%',
  md: '760px',
  lg: '790px',
}
const layoutW: any = {
  base: '100%'
}
const layoutM: any = {
  base: '0',
  md: '0 auto',
}

const layoutP: any = {
  base: '0 5%',
  md: '0',
}

const titleFs = { base: '1.5rem', md: '1.8rem' }
const sloganFs = { base: '0.9rem', md: '0.9rem' }
const instructionsMt = { base: '50px' }

const tracksMt = {
  base: '50px'
}

const stageMt = {
  base: '100px'
}

export const checkListSx = {
  '.chakra-checkbox': {
    alignItems: 'flex-start'
  },
  '.chakra-checkbox__control': {
    position: 'relative',
    top: '3px'
  },
  '.chakra-checkbox__label': {
    fontSize: '1rem'
  }
}

export const evalDir: any = {
  base: 'column',
  md: 'row'
}

const featureImgW: any = {
  base: '100%',
  md: '49%'
}

const desktopDisplay: any = {
  base: 'none',
  md: 'inline-flex'
}

const mobileDisplay: any = {
  base: 'inline-flex',
  md: 'none',
}

const secondaryAltFs = ['2.2rem', '2.7rem', '2.5rem', '2.5rem']
const secondaryAltLh = ['2.8rem', '3.1rem', '3rem', '2.9rem']

const calloutFs = ['2rem', '2.5rem', '2.2rem', '2.2rem']
const calloutLh = ['2.6rem', '2.9rem', '2.7rem', '2.7rem']

export const revCostLineW: any = {
  base: '100%',
  md: 'calc(50% - 10px)',
}

export const revCostMb: any = {
  base: '20px',
  md: '0',
}

const infoIcon = () => <Icon as={BsInfoCircle} mr='10px' color='#50a35e' />

export const mapToCheckList = (Point, i, arr) => {
  const [show, setShow] = useState(false)
  const chkRef = useRef(null)
  
  const onClick = useCallback(({ target }) => {
    setShow(target.checked)
  }, [])

  return <Flex mb={i !== arr.length -1 ? '10px' : null} direction='column' w={'100%'} key={i}>
    <Checkbox size='lg' ref={chkRef} onChange={onClick}>
      <Point />
    </Checkbox>
    <Collapse  in={show} animateOpacity>
      <Flex
        w='100%'
        pl='28px'
        direction='column'
        align='flex-start'
        mt='10px'
      >
        <Text display='flex' alignItems='center' fontSize='0.7rem' pos='relative' left='-1px' mb='10px'><Icon fontSize='1.1rem' as={VscNote} mr='5px' />DESCRIPTION:</Text>
        <Textarea bg='white' fontStyle='italic' />
        <Flex pb='30px' mb='20px' w='100%' borderBottom={i !== arr.length -1 ? '1px solid #bbbbbb' : null} />
      </Flex>
    </Collapse >
  </Flex>
}

const currencyTypes = [{ type: 'Business Opportunity', code: 'bo', color: '#14b7b7'}]

const businessIdeaPoints = [
  () => <>What is the business problem the product/feature/improvement aims to solve? <br /> Describe it without mentioning anything - <i>or as little as possible</i> - about software.</>,
  () => <>Identify what constitutes a high quality - <i>or a good enough</i> - solution to the problem from the customer's perspective, in real-life terms. Focus on the most cruical factors.</>,
  () => <>Translate those factors into software quality attributes.</>,
  () => <>Identify the fundamental system components to implement such a solution. Keep it high-level, don't go into the details here.</>,
  () => <>Identify the basic programming tools and technologies needed to create such a system.</>,
  () => <>Define the required skills, software and infrastructure to use those tools and technologies. Ensure you have them or change the idea to match your capabilities.</>,
]

const getTypeIndex = (code) => code === 'bo' ? 0 : code === 'cx' ? 1 : code === 'pr' ? 2 : code === 'ut' ? 3 : 4 
const getTypeCode = (type) => type === 'Business Opportunity' ? 'bo' : type === 'Customer Experience' ? 'cx' : type === 'Productivity' ? 'pr' : type === 'Utilization' ? 'ut' : 'co'

export default function CodeToMoneyTool() {
  const [ Strategy, setStrategy ] = useState(null) 
  const [ OrgProc, setOrgProc ] = useState(null)
  const [ Product, setProduct ] = useState(null)
  const [ Design, setDesign ] = useState(null)
  const [ Software, setSoftware ] = useState(null)
  const [ Implementation, setImplementation ] = useState(null)
  const [ Delivery, setDelivery ] = useState(null)
  const [ Operation, setOperation ] = useState(null)
  const [ Feedback, setFeedback ] = useState(null)
  const [ Impact, setImpact ] = useState(null)
  const [ scoreUpdate, setScoreUpdate ] = useState(null)
  const [ finishedInternalUpdate, setFinishedInternalUpdate ] = useState(false)
  const [ totalScore, setTotalScore ] = useState({
    total: 0,
    types: [
      { name: 'Business Opportunity', code: 'bo', score: 0 },
      { name: 'Customer Experience', code: 'cx', score: 0 },
      { name: 'Productivity', code: 'pr', score: 0 },
      { name: 'Utilization', code: 'ut', score: 0 },
      { name: 'Costs', code: 'co', score: 0 },
    ]
  })

  // the useEffect extra step is there to remove the direct dependency between this
  // callback and all the dynamic Stage components so they won't rerender on each update
  // of any impact score everywhere.
  const updateScore = useCallback((update) => {
    setFinishedInternalUpdate(false)
    setScoreUpdate(update)
  }, [])

  useEffect(() => {
    if (scoreUpdate && !finishedInternalUpdate) {
      const { code, value } = scoreUpdate
      const types = [...totalScore.types]
      types[getTypeIndex(code)].score = types[getTypeIndex(code)].score + value
      setTotalScore({
        total: totalScore.total + value,
        types
      })
      setFinishedInternalUpdate(true)
      setScoreUpdate(null)
    }
  }, [scoreUpdate, totalScore, finishedInternalUpdate])

  
  useEffect(() => {
    const Impact = dynamic(
      () => import('../components/codetomoney/Impact'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setImpact(({...props}) => <Impact {...props} />)

    const Strategy = dynamic(
      () => import('../components/codetomoney/Strategy'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setStrategy(({...props}) => <Strategy {...props}/>)

    const OrgProc = dynamic(
      () => import('../components/codetomoney/OrgProc'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setOrgProc(() => <OrgProc />)

    const Product = dynamic(
      () => import('../components/codetomoney/Product'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setProduct(() => <Product />)

    const Design = dynamic(
      () => import('../components/codetomoney/Design'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setDesign(() => <Design />)

    const Software = dynamic(
      () => import('../components/codetomoney/Software'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setSoftware(() => <Software />)

    const Implementation = dynamic(
      () => import('../components/codetomoney/Implementation'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setImplementation(() => <Implementation />)

    const Delivery = dynamic(
      () => import('../components/codetomoney/Delivery'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setDelivery(() => <Delivery />)

    const Operation = dynamic(
      () => import('../components/codetomoney/Operation'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setOperation(() => <Operation />)

    const Feedback = dynamic(
      () => import('../components/codetomoney/Feedback'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setFeedback(() => <Feedback />)
  }, [])

  const strategyWithScoreUpdater = useMemo(() => {
    return !Strategy ? null : cloneElement(Strategy, { updateScore })
  }, [Strategy, updateScore])

  const orgProcWithScoreUpdater = useMemo(() => {
    return !OrgProc ? null : cloneElement(OrgProc, { updateScore })
  }, [OrgProc, updateScore])

  const productWithScoreUpdater = useMemo(() => {
    return !Product ? null : cloneElement(Product, { updateScore })
  }, [Product, updateScore])

  const designWithScoreUpdater = useMemo(() => {
    return !Design ? null : cloneElement(Design, { updateScore })
  }, [Design, updateScore])

  const softwareWithScoreUpdater = useMemo(() => {
    return !Software ? null : cloneElement(Software, { updateScore })
  }, [Software, updateScore])

  const implementationWithScoreUpdater = useMemo(() => {
    return !Implementation ? null : cloneElement(Implementation, { updateScore })
  }, [Implementation, updateScore])

  const deliveryWithScoreUpdater = useMemo(() => {
    return !Delivery ? null : cloneElement(Delivery, { updateScore })
  }, [Delivery, updateScore])

  const operationWithScoreUpdater = useMemo(() => {
    return !Operation ? null : cloneElement(Operation, { updateScore })
  }, [Operation, updateScore])

  const feedbackWithScoreUpdater = useMemo(() => {
    return !Feedback ? null : cloneElement(Feedback, { updateScore })
  }, [Feedback, updateScore])

  const impactWithScore = useMemo(() => {
    return !Impact ? null : cloneElement(Impact, { scores: totalScore })
  }, [Impact, totalScore])

  return (
    <>
      <NextSeo {...roadmapSEO} />
      <Flex
        h='auto'
        w='100%'
        direction={'column'}
        align={'center'}
        fontFamily='Inter,"Trebuchet MS",Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
        mt={marginTop}
        mb={marginBottom}
        pt={paddingTops}
      >
        <Flex maxW={layoutMW} p={layoutP} w={layoutW} m={layoutM} minH='calc(100vh - 91px)' align='center' justify='flex-start' direction='column' pos='relative'>
          <Text
            textAlign={'center'}
            fontSize={titleFs}
            color='black'
            lineHeight='1.2'
            mb={'20px'}
            w='100%'
            minW='270px'
            letterSpacing='0.08rem'
            textShadow='0px 0px 6px #00000038'
          >
            CODE TO MONEY ROADMAP 
          </Text>
          <Text
            textAlign={'center'}
            fontSize={sloganFs}
            color='black'
            lineHeight='1.5'
            m={'0'}
            w='100%'
            maxW='387px'
            textTransform='uppercase'
            letterSpacing='0rem'
            textShadow='0px 0px 6px #00000038'
            fontStyle='italic'
          >
            The programmer's checklist for making technical decisions that maximize revenue and minimize costs
          </Text>
          <InfoBox infoBoxHeader="READ FIRST: What's this why and how should you use it?" icon={infoIcon} mt={instructionsMt} maxW='100%' w='790px' minor textToggle bg='#ecefff' border={'1px solid #bdc7ff'}>
            <Text mt='20px' fontWeight='800'>
              WHAT'S THIS?
            </Text>
            <Text mt='10px'>
              This is an interactive tool to help software engineers in identifying and estimating the financial consequences of their technical decisions.
            </Text>
            <Text mt='10px'>
              It's also an educational material detailing how the creation and delivery of a software product generates revenue and costs, in detail, from the ground up.
            </Text>
            <Text mt='10px'>
              <b><i>Please keep in mind this is also a work-in-progress.</i></b> What you currently see is more like a prototype than a finished product.
            </Text>
            <Text mt='30px' fontWeight='800'>
              WHY SHOULD YOU USE IT?
            </Text>
            <Text mt='10px'>
              As Patrick McKenzie (<ExternalLink href='https://twitter.com/patio11'>@patio11</ExternalLink>) famously <ExternalLink href='https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/'>said</ExternalLink>:
            </Text>
            <Quote>
              Engineers are hired to create business value, not to program things: ...
              Producing beautiful software is not a goal.
              Solving complex technical problems is not a goal.
              Writing bug-free code is not a goal.
              Using sexy programming languages is not a goal.
              Add revenue.
              Reduce costs.
              Those are your only goals.
            </Quote>
            <Text>
              I spent my last 2 years with identifying the exact ways how we can do just that. (Insipred by other reasons.)
              I wanted to share the gist of it with everyone for free. This <b>"Code To Money Roadmap"</b> contains the essence of my book <InternalLink newTab href='/'>Full Context Software Development</InternalLink> to
              help every software engineer with:
              <chakra.ul pl='20px' my='15px'>
                <li>understanding exactly how our work influences revenue and costs</li>
                <li>evaluating our technical decision in the light of their financial consequences</li>
              </chakra.ul>
              I believe a programmer-focused, practical and complete overview of this topic has never been done before.
            </Text>
            <Text mt='30px' fontWeight='800'>
              HOW DOES IT WORK?
            </Text>
            <Text mt='10px'>
              <b>Usage</b>: The main purpose of this tool is to help you with making tech-decisions. The first step is to identify how things work in your given situation.
              The chekclists help with doing that without missing anything. Fill out what's relevant for the thing you are evaluating. Second is to identify the impact of the change.
              The evaluation tool gives structured guidance in how to do that at each stage. Identify the influence of the change over the elements in the checklist with that.
            </Text>
            <Text mt='20px'>
              <b>Disclaimer</b>: If you are like me, a lot of these things will feel boring, especially the first 5 stages, you are free to skip any parts. Even
              when you are using it seriously, most of the stuff won't be relevant, so don't bother with completing everything.
            </Text>
            <Text mt='10px'>
              We will follow how money turns into code and then how code turns into money through the extended software development lifecycle.
              There are two components of the process that need some introduction.
            </Text>
            <Text mt='20px'>
              <b>1. The structure of the application</b>: It's very basic stuff. The main components are the following:
            </Text>
            <Text mt='10px'>
              You will find 4 different types of explanations at each stage. They describe what is the function of the current step and what are
              the connection points between it, the financial results and the developers' responsibilities. 
            </Text>
            <Flex mt='10px' direction={evalDir} wrap='wrap'>
              <Flex direction='column' w={featureImgW}>
                <Flex p='20px 0' minH='159px' display={mobileDisplay}>
                  <Zoom zoomMargin={10}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/checklist.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex p='20px' minH='159px' display={desktopDisplay}>
                  <Zoom zoomMargin={100}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/checklist.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex fontSize='0.9rem'>
                  <Text pl='10px'>
                    <b>The checklist</b>: The practical factors from the given stage that have influence over
                    financial performance and also the technical considerations. Define them to see the full impact
                    of the ideas you are evaluating.
                  </Text>
                </Flex>
              </Flex>
              <Flex direction='column' w={featureImgW}>
                <Flex p='20px 0' minH='159px' display={mobileDisplay}>
                  <Zoom zoomMargin={10}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/eval.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex p='20px' minH='159px' display={desktopDisplay}>
                  <Zoom zoomMargin={100}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/eval.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex fontSize='0.9rem'>
                  <Text pl='10px'>
                    <b>The evaluation tool</b>: Its 2 parts should be used separately. Identify the involved <b>TIPs</b> and the <b>currencies</b>.
                    It's a good idea to include the explanation of how/why they are relevant.
                  </Text>
                </Flex>
              </Flex>
              <Flex direction='column' w={featureImgW}>
                <Flex p='20px 0' minH='159px' display={mobileDisplay}>
                  <Zoom zoomMargin={10}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/graph.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex p='20px' minH='159px' display={desktopDisplay}>
                  <Zoom zoomMargin={100}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/graph.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex fontSize='0.9rem'>
                  <Text pl='10px'>
                    <b>The business impact graph</b>: The somewhat simplified, visual representation of how the currencies turn into financial results.
                    It's live updated with the points you assign.
                  </Text>
                </Flex>
              </Flex>
              <Flex direction='column' w={featureImgW}>
                <Flex p='20px 0' minH='182px' display={mobileDisplay}>
                  <Zoom zoomMargin={10}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/totals.png"
                      width="250px"
                    />
                  </Zoom>
                </Flex>
                <Flex p='20px' maxH='182px' display={desktopDisplay}>
                  <Zoom zoomMargin={100}>
                    <Img
                      borderRadius='lg'
                      alt=""
                      src="/img/roadmap/totals.png"
                      width="159px"
                    />
                  </Zoom>
                </Flex>
                <Flex fontSize='0.9rem'>
                  <Text pl='10px'>
                    <b>The total score</b>: As you go around and gather currencies you will be able to see a summary of the total score here.
                    Toggle it by hovering/tapping on the small bar at the bottom of the screen then on the up/down arrow.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Text mt='20px'>
              <b>2. The basics of the full context framework</b>: On the highest level it's only concerned with 5 things.
              In the book I call them the <ExternalLink href='/book/chapter-2#658c459131154aa682fa637120e0db8f'>Financial API</ExternalLink>,
              here I use the name: the "5 currencies".
              These are the factors we are trying to "collect" as we walk the code-to-money road that we can "exchange" for inceased revenue and reduced costs.
              This is an all encompassing set, every financial consequence of our actions can be derived from them.
            </Text>
            <Flex w='100%' mt='10px' ml='20px' direction='column'>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <ChakraImage src={`/img/blog/review/bo-currency.svg`} />
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Business Opportunity</b>: Anything that has influence over the capability of developing a product or feature that enables the company to do business.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <ChakraImage src={`/img/blog/review/cx-currency.svg`} />
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Customer Experience</b>: Anything that will improve the experience of the users at any stage of the customer lifecycle.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <ChakraImage src={`/img/blog/review/pr-currency.svg`} />
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Productivity</b>: The efficiency of working which can translate to reduced costs and through faster delivery to improved customer experience and higher revenue.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <ChakraImage src={`/img/blog/review/ut-currency.svg`} />
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Utilization</b>: The utilization of all available resources including manpower but also the owned infrastructure, budged and intellectual property.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' direction='row'>
                <Flex w='40px'>
                  <ChakraImage src={`/img/blog/review/co-currency.svg`} />
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)' align='center'>
                  <Text><b>Direct Costs</b>: Directly affected costs like service fees or purchase of tools, licenses, etc...</Text>
                </Flex>
              </Flex>
            </Flex>
            <Text mt='20px'>
              <b>TIPs</b>: Or technical impact points. The exact technical factors that will influence the 5 currencies 
            </Text>
            <Flex w='100%' mt='10px' ml='20px' direction='column'>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>SQA</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Software Quality Attributes</b>: Properties exclusive to software that will affect how much the users are satisfied with the product.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>TQA</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Tech(nology) Quality Attributes</b>: Properties exclusive to the programming tools we use that will affect how much the users are satisfied with the product.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>CQA</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Code Quality Attributes</b>: Properties of the codebase we write that will affect how much the users are satisfied with the product.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>PQA</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Process Quality Attributes</b>: The factors that determine how efficient and effective is our work and consequently the speed and quality of software delivery.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>CAPs</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text><b>Capabilities</b>: The development skills, know-how, software tools and infrastructure necessary to create and operate the product.</Text>
                </Flex>
              </Flex>
            </Flex>
            <Text mt='20px'>
              <b>Impact Points</b>: An exponential scale of 1, 10, 100, 1000 that signifies the relative impact of some technical property over the elements
              of the Financial API. Here is the baseline for each value:
            </Text>
            <Flex w='100%' mt='10px' ml='20px' direction='column'>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>1</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text>The most minuscule effect possible, localized to an atomic unit of the domain like a single UI element, a one off anonymous function or a single tasks of a single person. Examples: Changing the color of a button, a minor change in the runtime of a step in an automated process.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>10</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text>This is the kind of impact we start to notice in real life. It affects multiple occurrences of an atomic unit, like a reusable UI component, a single class in an OOP codebase or the regular work of an individual. Examples: An improvement to the UX of every Sign Up button in an application, refactoring a method in a frequently used class for better maintainability and understandability, or improving the happiness and motivation of a team member.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>100</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text>An impact of this size is something multiple people will recognize and appreciate. We usually strive to create this kind of improvements in our work. It might mean improvements in application wide concerns (speed, security) in one or a few parts of a larger system. In different domains it can affect a substantial group of the complete user base or the performance of a single or a few teams in a large organization. Examples: Subsystem scale refactoring, team level adoption of new technologies or best practices, improving accessibility or offering the service in a new country.</Text>
                </Flex>
              </Flex>
              <Flex w='100%' mb='10px' direction='row'>
                <Flex w='40px'>
                  <Text fontWeight='bold'>1000</Text>
                </Flex>
                <Flex ml='20px' w='calc(100% - 40px)'>
                  <Text>This type of impact operates on the highest level of the domain. The whole codebase, the whole user base or the entire organization. Creating this kind of change is a major undertaking and can deliver business results completely changing the course of a company (or a quarterly result). Examples: A complete UI overhaul or other UX improvement affecting every customer. A major restructuring of an organizational level process for improved efficiency. Moving a whole system from a legacy platform to the cloud.</Text>
                </Flex>
              </Flex>
            </Flex>
            <Text mt='20px'>
              If you want to learn more details check out the <InternalLink href='/'>book</InternalLink> or some of my <InternalLink href='/blog'>tech reviews</InternalLink> where I use this approach in practice.
            </Text>
          </InfoBox>
          <Flex pos='relative' minH='100%' minW='100%' maxW={layoutMW} mt={tracksMt}>
            <Flex w='100%' direction='column'>
              <PostHeading id='idea' maximalW>
                Stage 1: Business Idea
              </PostHeading>
              <ImageWrapper maximalW>
                <Image priority layout='fill' src='/img/blog/remix/idea2.jpg' objectFit='cover' objectPosition='0 57%'/>
                <Flex pos='relative' zIndex='2' margin='0 auto' align='center'>
                  <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/idea.svg' />
                </Flex>
              </ImageWrapper>
              <ImageContribution>Photo by <a href="https://unsplash.com/@flo_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Floriane Vita</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
              <InfoBox infoBoxHeader='Checklist' expanded border='1px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsCheck2Square} boxShadow={'xl'} m={'50px 0 50px 0'}>
                <Flex minW='100%' direction='column' align='flex-start' justify='center' sx={checkListSx}>
                  {businessIdeaPoints.map(mapToCheckList)}
                </Flex>
              </InfoBox>
              <InfoBox infoBoxHeader='Tech evaluation' expanded border='3px solid #e8e8e8' borderRadius='xl' bg={'#e8e8e859'} icon={BsListCheck} mb={'20px'}>
                <Flex minW='100%' direction={evalDir} align='flex-start' justify='space-between'>
                  <QaList types={['SQAs', 'CAPs']} />
                  <CurrencyList types={currencyTypes} updateScore={updateScore}/>
                </Flex>
              </InfoBox>
              <InfoBox infoBoxHeader='The building blocks of a business idea' border='3px solid #98a4f5' borderRadius='xl' bg={'#f2f3ff'} color={'#485bdb'} icon={CgComponents} mb={'20px'}>
                <Flex minW='100%' direction='column'>
                  <UnorderedList>
                    <ListItem>
                      <Text>An unfilled user or organizational need or a significant improvement over an existing solution</Text>
                    </ListItem>
                    <ListItem>
                      <Text>A profitable and sustainable way to monetize the solution to that problem</Text>
                    </ListItem>
                    <ListItem>
                      <Text>A viable method to build, market, maintain and iterate on the solution</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Validation of the above points</Text>
                    </ListItem>
                  </UnorderedList>
                  <Text mt='20px' fontWeight='bold'>SUMMARY:</Text>
                  <Text mt='10px'>This is the foundation of any product, feature or other business improvements.
                    In the end, it will turn into a set of functional and non-functional requirements
                    and at least a vague plan about every other stage that follows.
                  </Text>
                </Flex>
              </InfoBox>
              <InfoBox infoBoxHeader='The required knowledge' border='3px solid #a7e5b7' borderRadius='xl' bg={'#f2fff4'} color={'#4bbb2f'} icon={FaGraduationCap}  mb={'20px'}>
                <Flex minW='100%'>
                  <UnorderedList>
                    <ListItem>
                      <Text>DOMAIN SPECIFIC: The customers' problems, needs and goals</Text>
                    </ListItem>
                    <ListItem>
                      <Text>DOMAIN SPECIFIC: How to solve their problems, the way to serve their needs and the means to help them reach their goals, in real-life terms</Text>
                    </ListItem>
                    <ListItem>
                      <Text>DOMAIN SPECIFIC: The market conditions &amp; trends the product is/would be competing on</Text>
                    </ListItem>
                    <ListItem>
                      <Text>GENERIC AND SPECIFIC: How to promote and sell the software product to the target audience</Text>
                    </ListItem>
                    <ListItem>
                      <Text>GENERIC AND SPECIFIC: The technical knowledge needed to create a software solution</Text>
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </InfoBox>
              <InfoBox infoBoxHeader="The developer perspective" border='3px solid #f59898' borderRadius='xl' bg={'#fff2f2'} color={'#c12020'} icon={AiOutlineCode} mb={'20px'}>
                <Flex minW='100%' direction='column'>
                  <Text>
                    The business domain and the current market trends will decide much of which SQAs are needed in order to create a successful product.
                  </Text>
                  <Text mt='15px'>
                    A nuclear power plant control system needs real-time processing, verifiable
                    correctness and extreme fault-tolerance but for example startup or update
                    times can be as long as necessary.
                  </Text>
                  <Text mt='15px'>
                    A high-traffic webshop however needs close to instant loading time and a
                    fast deployment process but nowhere near the verifiable correctness of such a critical
                    system.
                  </Text>
                  <Text mt='15px'>
                    These already filter out which tools and what kind of system architectures
                    are feasible for a given product type.
                  </Text>
                </Flex>
              </InfoBox>
              <InfoBox infoBoxHeader="Revenue and cost factors" border='3px solid #f9c16c' borderRadius='xl' bg={'#fffdf2'} color={'#87550b'} icon={GiChart} mb={'20px'}>
                <Flex minW='100%' direction={evalDir} justify='space-between'>
                  <Flex direction='column' w={revCostLineW} justify='flex-start' mb={revCostMb}>
                    <Text fontWeight='bold'>Revenue</Text>
                    <Text>
                      Who are your users?<br />
                      What do they want?<br />
                      How can you help them?
                    </Text>
                  </Flex>
                  <Flex direction='column' w={revCostLineW} justify='flex-start'>
                    <Text fontWeight='bold'>Costs</Text>
                    <Text>
                    What are roughly the costs of the needed software development capabilities? <br />
                    What's the expected ROI on the project?
                    </Text>
                  </Flex>
                </Flex>
              </InfoBox>
              <PostHeading id='strategy' mt={stageMt} maximalW>
                Stage 2: Business Vision & Mission & Strategy
              </PostHeading>
              {strategyWithScoreUpdater}
              <PostHeading id='product' mt={stageMt} maximalW>
                Stage 3: Product Strategy & Roadmap
              </PostHeading>
              {productWithScoreUpdater}
              <PostHeading id='orgproc' mt={stageMt} maximalW>
                Stage 4: Organization & Processes
              </PostHeading>
              {orgProcWithScoreUpdater}
              <PostHeading id='design' mt={stageMt} maximalW>
                Stage 5: Product Design
              </PostHeading>
              {designWithScoreUpdater}
              <Exchange title='Money to Code Exchange' color='#affdaf' borderColor={'#20e920'} textColor={'#0d6b0d'} image='/img/roadmap/money.svg'>
                <>
                  <Text w='100%' textAlign='center' fontWeight='500'>The following currencies are convertible at the next 2 steps:</Text>
                  <Flex w='100%' justify='center' mt='20px'>
                    <ChakraImage w='50px' mr='50px' h='auto' src={`/img/blog/review/pr-currency.svg`}/>
                    <ChakraImage w='50px' mr='50px' h='auto' src={`/img/blog/review/ut-currency.svg`}/>
                    <ChakraImage w='50px' h='auto' src={`/img/blog/review/co-currency.svg`}/>
                  </Flex>
                  <Text w='100%' mt='20px' fontWeight='500'>
                    You can improve the financial results by minimizing the money
                    needed to produce the software without compromising on 
                    functionality, quality, speed of delivery or in general the profit.
                  </Text>
                  <Text w='100%' mt='20px' fontWeight='500'>
                    That includes using the right programming tools, system 
                    architecture and infrastructure so you can achieve
                    customer satisfaction in the most efficient and cost effective manner.
                  </Text>
                  <Text w='100%' mt='20px' fontWeight='500'>
                    Everything up till implementation is about identifying what are the
                    required quality attributes to satisfy the customers and finding the
                    tools that deliver them with the lowest cost.
                  </Text>
                  <Text w='100%' fontWeight='500'>
                    This also involves setting up the work processes in a way that
                    enables shipping the software with minimal wage and operational
                    costs.
                  </Text>
                </>
              </Exchange>
              <PostHeading id='software' mt={stageMt} maximalW>
                Stage 6: Software Design
              </PostHeading>
              {softwareWithScoreUpdater}
              <PostHeading id='implementation' mt={stageMt} maximalW>
                Stage 7: Implementation & QA
              </PostHeading>
              {implementationWithScoreUpdater}
              <Exchange title='Code to Money Exchange' color='#afd7fd' borderColor={'#207ee9'} textColor={'#165b9b'} image='/img/roadmap/code.svg'>
                <>
                  <Text w='100%' textAlign='center' fontWeight='500'>The following currencies are convertible at the next 3 steps:</Text>
                  <Flex w='100%' justify='center' mt='20px'>
                    <ChakraImage w='50px' mr='50px' h='auto' src={`/img/blog/review/bo-currency.svg`}/>
                    <ChakraImage w='50px' h='auto' src={`/img/blog/review/cx-currency.svg`}/>
                  </Flex>
                  <Text w='100%' mt='20px' fontWeight='500'>
                    The code should be written in a way that supports the following
                    points through implementing the right quality attributes:
                  </Text>
                  <Text w='100%' mt='20px' fontWeight='500'>
                    <chakra.ul pl='20px'>
                      <li>The product is aligned with the user needs and preferences.</li>
                      <li>It's engaging and useful.</li>
                      <li>Focused and polished, attention to details.</li>
                      <li>Development priorities are aligned with the product's focus and main values</li>
                      <li>It's stable, performant, has minimal blocking time, in general usage is undisturbed.</li>
                      <li>It's released at a rate that is preferred by the customers.</li>
                      <li>It reacts quickly to the changing market and user needs.</li>
                      <li>That's why we need to see usage trends and insights, and be able to rapidly develop and ship high quality software.</li>
                      <li>Consistently offers a better solution than the competition.</li>
                      <li>Has a great community and encourages interaction and participation.</li>
                      <li>It's accompanied by stellar support enhanced by collecting internal (logging) and user feedback as much as possible. (hopefully ethically)</li>
                    </chakra.ul>
                  </Text>
                </>
              </Exchange>
              <PostHeading id='delivery' mt={stageMt} maximalW>
                Stage 8: Delivery
              </PostHeading>
              {deliveryWithScoreUpdater}
              <PostHeading id='operation' mt={stageMt} maximalW>
                Stage 9: Operation
              </PostHeading>
              {operationWithScoreUpdater}
              <PostHeading id='feedback' mt={stageMt} maximalW>
                Stage 10: Feedback
              </PostHeading>
              {feedbackWithScoreUpdater}
              {impactWithScore}
              <Heading
                maxW='1000px'
                as='h3'
                mt='120px'
                mb='20px'
                textAlign='center'
                letterSpacing='-1px'
                lineHeight={secondaryAltLh}
                fontSize={secondaryAltFs}
                fontWeight='700'
                p='0 20px 20px 20px'
              >
                Do you want to master the highest-level of technical decisions making?
              </Heading>
              <ChakraImage src='/img/showcase.png' w='100%' m='50px auto 0 auto' />
              <Heading
                maxW='1000px'
                as='h3'
                mt='120px'
                mb='20px'
                textAlign='center'
                letterSpacing='-1px'
                lineHeight={calloutLh}
                fontSize={calloutFs}
                fontWeight='700'
                p='0 20px 20px 20px'
              >
                Then check out the<br /><InternalLink href='/'>Full Context Software Development</InternalLink><br />online book!
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <TotalScore
          position='fixed'
          bottom='0'
          scores={totalScore}
          p='12px 20px 8px 20px'
          bg='#3a3a4c'
          color='white'
          zIndex='2'
          borderTopLeftRadius='8px'
          borderTopRightRadius='8px'
          boxShadow='4px 7px 10px #0000009e'
        />
      </Flex>
    </>
  )
}

const ibFs = {
  base: '1rem'
}

const majorIbFs = {
  base: '1rem',
  md: '1.35rem'
}

const ibMoreFs = {
  base: '0.8rem'
}
const ibToggleIconFs = {
  base: '1.3rem'
}

const ibContentP = {
  base: '10px 25px 20px 25px'
}

const infoBoxSx = {
  '.chakra-collapse': {
    width: '100%'
  }
}

const infoBoxPx = {
  base: '0',
  md: '10px'
}

const infoBoxPr = {
  base: '45px',
  md: '0'
}

const infoBoxTxtPr = {
  base: '80px',
  md: '0'
}

const textToggleMw = {
  base: '70px',
  md: '100%'
}

const textToggleMh = {
  base: '90px',
  md: '0'
}
const textToggleRight = {
  base: '0',
  md: '10px'
}

export const InfoBox = ({ children, infoBoxHeader, icon: CustomIcon = null, border = '1px solid #cdcdcd', expanded = false, minor = false, textToggle = false, ...rest }) => {
  const [ initialCollapsed, setInitialCollapsed ] = useState(false)
  const { isOpen, onToggle } = useDisclosure()

  const onToggleClick = useCallback(() => {
    if (expanded && !initialCollapsed) {
      setInitialCollapsed(true)
    }
    onToggle()
  }, [expanded, initialCollapsed, onToggle])

  useEffect(() => {
    if (expanded && initialCollapsed) {
      onToggle()
    }
  }, [expanded, initialCollapsed])

  return <Flex borderRadius='lg' border={border} direction='column' align='center' justify='flex-start' sx={infoBoxSx}{...rest}>
    <Text fontSize={minor ? ibFs : majorIbFs} as='button' onClick={onToggleClick} display='flex' alignItems='center' justifyContent={minor ? 'flex-start' : 'flex-start'} minH={minor ? textToggleMh : null} w='100%' px={infoBoxPx} pr={minor ? infoBoxTxtPr : infoBoxPr} py='3px' pos='relative' textAlign='start'>
      {CustomIcon ? <Flex mr='10px' ml='14px'><CustomIcon /> </Flex>: null}
      {infoBoxHeader}
      {textToggle ? <Text fontSize={ibMoreFs} fontStyle='italic' display='inlin-block' ml='10px' pos='absolute' right={textToggleRight} maxW={textToggleMw}>Click to {isOpen || (expanded && !initialCollapsed) ? 'hide' : 'see'} the details</Text> : null}
      {!textToggle ? <Text fontSize={ibToggleIconFs} fontStyle='italic' display='inlin-block' ml='10px' pos='absolute' right='20px' top='7px'>{isOpen || (expanded && !initialCollapsed) ? <Icon as={IoIosArrowUp} /> : <Icon as={IoIosArrowDown} />}</Text> : null}
    </Text>
    <Collapse in={isOpen || (expanded && !initialCollapsed)} animateOpacity>
      <Box p={ibContentP} w='100%'>
        {children}
      </Box>
    </Collapse>
  </Flex>
}

const btnHoverStyle = {
  cursor: 'pointer'
}

const typeHoverStyle = {
  bg: '#eeeeee'
}

const currencyHoverStyle = {
  transform: 'scale(1.05)'
}

const qaListW = {
  base: '100%',
  md: 'calc(43% - 20px)'
}

export const QaList = ({ types }) => {
  const [ lists, setLists ] = useState(types.reduce((acc, curr) => {
    acc[curr] = []
    return acc
  }, {}))
  const [activeType, setActiveType] = useState(types[0])
  
  const inputRefs = types.reduce((acc, type) => {
    acc[type] = useRef(null)
    return acc
  }, {})

  const onAdds = useMemo(() => {
    const addHandlers = {}
    types.forEach(type => {
      addHandlers[type] = () => {
        const text = inputRefs[type].current.value
        if (text) {
          setLists({
            ...lists,
            [type]: [...lists[type], text]
          })
          inputRefs[type].current.value = ''
        }
      }
    })
    return addHandlers
  }, [types, lists])

  const onEnters = useMemo(() => {
    const enterHandlers = {}
    types.forEach(type => {
      enterHandlers[type] = (event) => {
        const key = event.keyCode ? event.keyCode : event.which
        if (key === 13) {
          const text = inputRefs[type].current.value
          if (text) {
            setLists({
              ...lists,
              [type]: [...lists[type], text]
            })
            inputRefs[type].current.value = ''
          }
        }
      }
    })
    return enterHandlers
  }, [types, lists])

  const setTypers = useMemo(() => {
    return types.map(type => () => setActiveType(type))
  }, [types])

  return <Flex direction='column' align='flex-start' justify='center' bg='white' p='5px 20px 20px 20px' border='1px solid #e8e8e8' borderRadius='md' w={qaListW} minH='125px' mb='20px'>
    <Scrollbars autoHeight autoHide>
      <Flex w='100%'>
        {types.map((type, i, arr) => {
          return <Text
            userSelect='none'
            key={type}
            as='button'
            mb='10px'
            mt='6px'
            fontWeight='600'
            fontSize='1.1rem'
            lineHeight='40px'
            mr={i < arr.length - 1 ? '5px' : null}
            border={activeType === type ? '1px solid #cfcfcf' : '1px solid white'}
            px='10px'
            borderRadius='lg'
            _hover={typeHoverStyle}
            onClick={setTypers[i]}
          >
            {type}
          </Text>
        })}
      </Flex>
    </Scrollbars>
    {types.map(type => {
      return (<Flex key={type} w='100%' direction='column' display={type === activeType? 'flex' : 'none'}>
        <Flex mt='10px' mb='10px' minW='100%'>
          <Input placeholder={`Add the involved ${type}`} size='sm' ref={inputRefs[type]} onKeyDown={onEnters[type]} textOverflow='ellipsis' />
          <Button size='sm' p='10px' as={VscAdd} ml='20px' onClick={onAdds[type]} _hover={btnHoverStyle}></Button>
        </Flex>
        {lists[type].map((text) => {
          return <QaItem key={text} text={text} onRemove={() => {
            const ii = lists[type].findIndex((item) => item === text)
            setLists({
              ...lists,
              [type]: [...lists[type].slice(0, ii), ...lists[type].slice(ii +1)]
            })
          }}/>
        })}
      </Flex>)
    })}
  </Flex>
}

const QaItem = ({ text, onRemove }) => {
  const [ ownText, setOwnText ] = useState(text)
  const [ editing, setEditing ] = useState(false)
  const [ toggleCheck, setToggleCheck ] = useState(false)
  const inputRef = useRef(null)
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = text
    }
  }, [text])

  const onEdit = useCallback(() => {
    setEditing(!editing)
  }, [editing])

  const onEnter = useCallback((event) => {
    const key = event.keyCode ? event.keyCode : event.which
    if (key === 13) {
      const text = inputRef.current.value
      setOwnText(text)
      setEditing(false)
    }
  }, [])

  const onAdd = useCallback(() => {
    const text = inputRef.current.value
    if (text) {
      setOwnText(text)
      setEditing(false)
    }
  }, [])

  const onToggleCheck = useCallback(() => {
    setToggleCheck(!toggleCheck)
  }, [toggleCheck])

  return <Flex align='center' justify='space-between' bg='white' mt='10px' w='100%' minW='100%' fontSize='0.8rem'>
    <Flex display={editing ? 'flex' : 'none'} w='100%'>
      <Input w='calc(100% - 84px)' size='sm' ref={inputRef} onKeyDown={onEnter} />
      <Flex w='84px'>
        <Button size='sm' p='8px' as={VscCheck} ml='10px' onClick={onAdd} _hover={btnHoverStyle}></Button>
        <Button size='sm' p='8px' as={VscTrash} ml='10px' onClick={onRemove} _hover={btnHoverStyle}></Button>
      </Flex>
    </Flex>
    <Flex display={!editing ? 'flex' : 'none'} w='100%'>
      <Text minW='calc(100% - 84px)' display='flex' alignItems='center' textOverflow='ellipsis'>
        <Flex as='button' mr={!toggleCheck ? '10px' : '8.5px'} onClick={onToggleCheck}>
          <Icon as={!toggleCheck ? FiCheckCircle : CgCloseO} fontSize={!toggleCheck ? '1rem' : '1.1rem'} />
        </Flex>
        {ownText}
      </Text>
      <Flex w='84px'>
        <Button size='sm' p='8px' as={FiEdit} ml='10px' onClick={onEdit} _hover={btnHoverStyle}></Button>
        <Button size='sm' p='8px' as={VscTrash} ml='10px' onClick={onRemove} _hover={btnHoverStyle}></Button>
      </Flex>
    </Flex>
  </Flex>
}

const scoreSx = {
  '.chakra-button': {
    fontSize: '0.55rem !important'
  },
  '@media screen and (min-width: 48em)': {
    '.chakra-button': {
      fontSize: '0.75rem !important'
    },
  }
}

const ImpactScore = ({ totals, setTotals, type, ...rest }) => {
  const handleImpactChange = useCallback((change) => {
    setTotals({
      ...totals,
      [type]: totals[type] + change,
      change
    })
  }, [totals])

  const impactChangers = useMemo(() => {
    return [-1, 1, -10, 10, -100, 100, -1000, 1000].map((change) => () => handleImpactChange(change))
  }, [handleImpactChange])

  return <ButtonGroup size='xs' isAttached variant='outline' sx={scoreSx} {...rest}>
    <Button mr='-px' onClick={impactChangers[1]}>1</Button>
    <IconButton aria-label='Increase by 1' icon={<Icon as={BiPlus}/>} onClick={impactChangers[1]}/>
    <IconButton aria-label='Decrease by 1' icon={<Icon as={BiMinus}/>} onClick={impactChangers[0]}/>
    <Button mr='-px'onClick={impactChangers[3]}>10</Button>
    <IconButton aria-label='Increase by 10' icon={<Icon as={BiPlus}/>} onClick={impactChangers[3]}/>
    <IconButton aria-label='Decrease by 10' icon={<Icon as={BiMinus}/>} onClick={impactChangers[2]}/>
    <Button mr='-px' onClick={impactChangers[5]}>100</Button>
    <IconButton aria-label='Increase by 100' icon={<Icon as={BiPlus}/>} onClick={impactChangers[5]}/>
    <IconButton aria-label='Decrease by 100' icon={<Icon as={BiMinus}/>} onClick={impactChangers[4]}/>
    <Button mr='-px' onClick={impactChangers[7]}>1000</Button>
    <IconButton aria-label='Increase by 1000' icon={<Icon as={BiPlus}/>} onClick={impactChangers[7]}/>
    <IconButton aria-label='Decrease by 1000' icon={<Icon as={BiMinus}/>} onClick={impactChangers[6]}/>
  </ButtonGroup>
}

const currListW = {
  base: '100%',
  md: 'calc(57% - 20px)'
}


export const CurrencyList = ({ types, updateScore = null }) => {
  const [activeType, setActiveType] = useState(types[0].type)
  
  const [ lists, setLists ] = useState(types.reduce((acc, curr) => {
    acc[curr.type] = []
    return acc
  }, {}))

  const [ totals, setTotals ] = useState(types.reduce((acc, curr) => {
    acc[curr.type] = 0
    return acc
  }, {}))

  const [ labelStates, setLabelStates ] = useState(types.reduce((acc, curr) => {
    acc[curr.type] = false
    return acc
  }, {}))
  
  const inputRefs = types.reduce((acc, curr) => {
    acc[curr.type] = useRef(null)
    return acc
  }, {})

  const onAdds = useMemo(() => {
    const addHandlers = {}
    types.forEach(({type, code}) => {
      addHandlers[type] = () => {
        const text = inputRefs[type].current.value
        if (text) {
          setLists({
            ...lists,
            [type]: [...lists[type], { text, total: totals[type] }]
          })
          updateScore({code, value: totals[type]})
          inputRefs[type].current.value = ''
          setTotals({
            ...totals,
            [type]: 0
          })
        }
      }
    })
    return addHandlers
  }, [types, lists, totals, updateScore])

  const setTypers = useMemo(() => {
    return types.map(({ type }) => () => {
      if (activeType === type) {
        setLabelStates({
          ...labelStates,
          [type]: !labelStates[type]
        })
      } else {
        setActiveType(type)
        setLabelStates({
          ...labelStates,
          [activeType]: false
        })
      }
    })
  }, [types, activeType, labelStates])

  return <Flex direction='column' align='flex-start' justify='center' bg='white' p='10px 20px 20px 20px' border='1px solid #e8e8e8' borderRadius='md' w={currListW} minH='125px'>
    <Scrollbars autoHeight autoHide>
      <Flex w='auto' userSelect='none'>
        {types.map(({ type, code, color }, i, arr) => {
          return <Text
            key={type + i}
            as='button'
            mb='10px'
            fontWeight='600'
            fontSize='1.1rem'
            display='flex'
            alignItems='center'
            color={color}
            mr={i < arr.length - 1 ? '14px' : null}
            _hover={activeType === type ? null : currencyHoverStyle}
            onClick={setTypers[i]}
            minW={labelStates[type] || activeType !== type ? '45px' : code === 'bo'|| code === 'cx' ? '250px' : '160px' }
          >
            <ChakraImage w={activeType === type ? '40px' : '24px'} h={activeType === type ? '40px' : '24px'} src={`/img/blog/review/${code}-currency.svg`} mr='10px' />
            <Text overflow='hidden' h={labelStates[type] ? '27px' : 'auto' } width={labelStates[type] ? '0' : 'auto' }>{activeType === type ? type : null}</Text>
          </Text>
        })}
      </Flex>
    </Scrollbars>
    {types.map(({ type }, i) => {
      return (<Flex key={type + i} w='100%' direction='column' display={type === activeType? 'flex' : 'none'}>
        <Flex mb='10px' minW='100%' direction='column' align='flex-start'>
          <Flex direction='column' w='100%'>
            <Textarea placeholder={`Describe how it influences ${type}`} minH='60px' size='sm' ref={inputRefs[type]} />
            <Text mt='8px' fontSize='0.85rem'>Impact points:</Text>
            <ImpactScore totals={totals} setTotals={setTotals} type={type}  mt='8px' />
          </Flex>
          <Flex w='100%' justify='space-between' mt='29px'>
            <Text fontWeight='800' pl='1px'>{totals[type]} IP</Text>
            <Button size='sm' p='10px' ml='20px' onClick={onAdds[type]} _hover={btnHoverStyle}><Icon as={VscAdd} />Add</Button>
          </Flex>
        </Flex>
        {lists[type].map(({ text, total }, i) => {
          return <CurrencyItem key={text + i} text={text} total={total} onRemove={() => {
            const ii = lists[type].findIndex((item) => item.text === text)
            console.log(lists[type][ii])
            updateScore({ code: getTypeCode(type), value: -1 * lists[type][ii].total })
            setLists({
              ...lists,
              [type]: [...lists[type].slice(0, ii), ...lists[type].slice(ii +1)]
            })
          }} updateScore={updateScore} type={type}/>
        })}
      </Flex>)
    })}
  </Flex>
}

const CurrencyItem = ({ text, total, onRemove, updateScore, type }) => {
  const [ ownText, setOwnText ] = useState(text)
  const [ ownTotal, setOwnTotal ] = useState({ own: total})
  const [ editing, setEditing ] = useState(false)
  const inputRef = useRef(null)
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = text
    }
  }, [text])

  const onEdit = useCallback(() => {
    setEditing(!editing)
  }, [editing])

  const onEnter = useCallback((event) => {
    const key = event.keyCode ? event.keyCode : event.which
    if (key === 13) {
      const text = inputRef.current.value
      setOwnText(text)
      setEditing(false)
    }
  }, [])

  const onAdd = useCallback(() => {
    const text = inputRef.current.value
    if (text) {
      setOwnText(text)
      setEditing(false)
    }
  }, [])

  const updateOwnTotal = useCallback((value) => {
    setOwnTotal(value)
    const {change} = value
    updateScore({ code: getTypeCode(type), value: change})
  }, [updateScore, type])

  return <Flex align='center' justify='space-between' bg='white' mt='10px' w='100%' minW='100%' fontSize='0.8rem' direction='column'>
    <Flex display={editing ? 'flex' : 'none'} w='100%'>
      <Input w='calc(100% - 84px)' size='sm' ref={inputRef} onKeyDown={onEnter} />
      <Flex w='84px'>
        <Button size='sm' p='8px' as={VscCheck} ml='10px' onClick={onAdd} _hover={btnHoverStyle}></Button>
        <Button size='sm' p='8px' as={VscTrash} ml='10px' onClick={onRemove} _hover={btnHoverStyle}></Button>
      </Flex>
    </Flex>
    <Flex display={editing ? 'flex' : 'none'} w='100%' mt='10px' direction='column'>
      <ImpactScore totals={ownTotal} setTotals={updateOwnTotal} type='own' mt='10px' />
      <Text minW='35px' display='flex' alignItems='center' fontWeight='bold' mt='10px'>
        Impact: {ownTotal.own}
      </Text>
    </Flex>
    <Flex display={!editing ? 'flex' : 'none'} w='100%'>
      <Text minW='45px' display='flex' alignItems='center' mr='5px' fontWeight='bold' wordBreak='break-all'>
        {ownTotal.own}
      </Text>
      <Text minW='calc(100% - (45px + 5px + 84px))' display='flex' alignItems='center'>
        {ownText}
      </Text>
      <Flex w='84px'>
        <Button size='sm' p='8px' as={FiEdit} ml='10px' onClick={onEdit} _hover={btnHoverStyle}></Button>
        <Button size='sm' p='8px' as={VscTrash} ml='10px' onClick={onRemove} _hover={btnHoverStyle}></Button>
      </Flex>
    </Flex>
  </Flex>
}

const toggleTotalHover = {
  color: '#fff'
}

const totalHover = {
  transform: 'translateY(0)',
  borderTopColor: 'transparent'
}

const TotalScore = ({ scores, ...rest }) => {
  const [expanded, setExpanded] = useState(false)
  const [triggered, setTriggered] = useState(false)

  const onToggle = useCallback(() => {
    setExpanded(!expanded)
    setTriggered(false)
  }, [expanded])

  const onTrigger = useCallback(() => {
    setTriggered(true)
  }, [])

  return <Flex
    as={expanded ? 'div' : 'button'}
    onClick={!expanded? onTrigger : null}
    direction='column'
    justify='center'
    align='center'
    transition='transform 0.3s ease-out, border-top-color 0.3s ease-out'
    borderTop='2px solid'
    borderTopColor={!expanded ? '#06c200' : 'transparent'}
    borderTopRadius='8px'
    transform={!expanded && !triggered ? 'translateY(24px)' : 'translateY(0)'}
    _hover={totalHover}
    {...rest}
  >
    <Flex>
      <Collapse in={expanded}>
        <Flex w='420px' maxW='80%' direction='column' m='10px auto 20px auto'>
          {scores.types.map(({code, name, score}, i, arr) => {
            return <Flex w='100%' key={code} maxHeight='40px' mb={i !== arr.lenght -1 ? '15px' : null}>
              <Flex w='20%'>
                <ChakraImage src={`/img/blog/review/${code}-currency.svg`} />
              </Flex>
              <Flex w='50%' justify='flex-start' aling='center'>
                <Text display='flex' alignItems='center'>{name}</Text>
              </Flex>
              <Flex w='30%' justify='flex-end' aling='center'>
                <Text display='flex' alignItems='center'>{score}</Text>
              </Flex>
            </Flex>
          })}
        </Flex>
      </Collapse>
    </Flex>
    <Flex w='100%' align='center' justify='center'>
      <Text fontWeight='bold'>Total Impact:</Text>
      <Text ml='10px'>{`${scores.total}`}</Text>
      <Flex
        as='button'
        align='center'
        justify='center'
        h='100%'
        ml='20px'
        transition='color 0.2s linear'
        _hover={toggleTotalHover}
        color='#c9c9c9'
        borderRadius='4px'
        onClick={onToggle}
      >
        <Icon fontSize='1.6rem' as={expanded? CgChevronDoubleDownR : CgChevronDoubleUpR}/>
      </Flex>
    </Flex>
  </Flex>
}