import { Box, Flex, Icon, Image as ChakraImage, Link, Text } from '@chakra-ui/react'
import { DescToggle, Paragraph } from 'components/blog/PostElements'
import NextLink from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

export const linkHoverStyle = {
  textDecoration: 'underline',
  cursor: 'pointer',
}

export const linkTransition = 'color 0.2s ease-out'

const colGap: any = {
  columnGap: '10px'
}

export const ulMr: any = {
  base: '15px',
  md: '30px'
}

export const Code = ({children, ...rest}) => {
  return <Box display='inline-block' bg='#ebebeb' color='#e30000' px='0.3rem' borderRadius='md' border='1px solid rgba(212,212,212,1)' {...rest}>
    <code>{children}</code>
  </Box>
}

export const InternalLink = ({children, href, newTab = false, color='rgb(86, 134, 255)', ...rest}) => {
  return <Link
    href={href}
    as={NextLink}
    passHref
  ><Text
      as='a'
      target={newTab ? '_blank' : null}
      color={color}
      _hover={linkHoverStyle}
      transition={linkTransition}
      fontWeight='500'
      {...rest}
    >{children}
    </Text>
  </Link>
}

const whiteSpaceType: any = {
  base: 'auto',
  xl: 'auto'
}

export const ExternalLink = ({ children, href }) => {
  return <Link
    href={href}
    target='_blank'
    color='rgb(86, 134, 255)'
    _hover={linkHoverStyle}
    transition={linkTransition}
    fontWeight='500'
    whiteSpace={whiteSpaceType}
  >{children}<Icon as={BiLinkExternal} ml='2px' fontWeight='500' fontSize='0.9rem' pos='relative' top='2px' /></Link>
}

const imgWrpW = {
  base: '96%',
  md: '100%'
}

const imgWrpMl = {
  base: '2%',
  md: '0'
}

export const ImageWrapper = ({ children, overlay = '#00000038', lessBlur = false, maximalW = false }) => (
  <Flex w={maximalW ? '100%' : imgWrpW} ml={maximalW ? '0' : imgWrpMl} h='170px' pos='relative' mt='5px' borderRadius='md' sx={{ span: { 'borderRadius': '0.375rem' }, 'img:not(.svg)': { filter: lessBlur ? 'blur(1px)' : 'blur(2px)' } }}>
    {children}
    <Flex pos='absolute' top='0' bottom='0' left='0' right='0' bg={overlay} zIndex='1' borderRadius='md' />
  </Flex>
)

export const ImageContribution = ({ children }) => <Text w='100%' mb='5px' mt='8px' fontSize='0.7rem' textAlign='center' color='#565656'>{children}</Text>

export const stageNameMap = {
  BO: 'BUSINESS OPPORTUNITY',
  CX: 'CUSTOMER EXPERIENCE',
  CO: 'DIRECT COSTS',
  PR: 'PRODUCTIVITY',
  UT: 'UTILIZATION',
}

const scoreW: any = {
  base: '85%',
  md: '100%'
}

const subscoreDir: any = {
  base: 'column',
  md: 'row'
}

const scoreLineW: any = {
  base: '100%',
  md: 'calc(50% - 5px)'
}


export const SubScore = ({ data }) => {
  return (
    <Flex direction={subscoreDir} fontFamily='Inter,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif' mb='80px' mt='10px' w={scoreW} p='35px 20px 0 20px' pos='relative' fontSize='0.9rem' bg='#f8f8f8' wrap='wrap' sx={colGap} mx='auto'>
      <Text as='h4' pos='absolute' pl='10px' top='0' left='0' right='0' fontWeight='400' fontSize='1.05rem' color='#2246c7' lineHeight='38px' bg='#cbdaff'><ChakraImage w='24px' h='24px' src='/img/blog/review/score.svg' display='inline-block' mr='10px' pos='relative' top='5px' />
        {data.stage
          ? `STAGE ${data.stage}. SCORES`
          : 'IMPACT SCORE'}
      </Text>
      {data.results.map((result, i) => { // index is fine as this is a static list
        return (
          <Flex key={i} w={data.results.length === 1 || result.fullW ? '100%' : scoreLineW} mt='15px' mb='20px'>
            <Flex mr='15px'>
              <ChakraImage w='40px' h='40px' src={`/img/blog/review/${result.type.toLocaleLowerCase()}-currency.svg`}/>
            </Flex>
            <Flex direction='column' w='100%'>
                <Flex direction='row' h='100%'vb >
                  <Flex direction='column' w='100%' borderBottom='1px solid rgb(55, 65, 81)' pb='10px'>
                    <Flex mb='6px'>
                      <Text fontWeight='800' pt='10px'>{stageNameMap[result.type]}</Text>
                    </Flex>
                    {result.scores.map((score, i) => {
                      return (
                        <Flex key={i} mb='6px'>
                          <Text minW='13px'  fontWeight={score.value < 0 ? '800' : null }>
                            {`${score.value >= 0 ? '+' : '-'}`}
                          </Text>
                          <Text minW='62px'>{`${Math.abs(score.value)}`}</Text>
                          <Text fontSize='0.8rem'>{score.desc}</Text>
                        </Flex>
                      )
                    })}
                  </Flex>
                </Flex>
                <Flex mt='6px' align='center'>
                  <Text minW='13px'>{result.total >= 0 ? '+' : '-'}</Text>
                  <Text minW='62px'>{Math.abs(result.total)}</Text>
                  <Text fontWeight='bold'>{result.type} - Impact Point</Text>
                </Flex>
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}

const ScoreLine = ({ children, value, border = false, gap = false }) => {
  return (
    <Flex
      mb={border || gap ? '6px' : null}
      w='95%'
      justify='space-between'
      borderBottom={border ? '1px solid #374151' : null}
      fontWeight={border ? '600' : null}
    >
      <Text ml={border ? null : '15px'} fontStyle={border ? null : 'italic'}>
        {children}:
      </Text>
      <Text fontSize='0.8rem' lineHeight='1.45rem'>{Math.round(value)}</Text>
    </Flex>
  )
}

const sectionW: any = {
  base: '100%',
  md: 'auto'
}

export const ScoreSection = ({ data, type }) => {
  return (
    <Flex w={sectionW} minW='280px' mt='15px'>
      <Flex mr='15px'>
        <ChakraImage w='55px' h='55px' src={`/img/blog/review/${type.toLocaleLowerCase()}-currency.svg`}/>
      </Flex>
      <Flex direction='column' w='100%'>
        <Flex direction='row' h='100%'>
          <Flex direction='column' w='100%' pb='10px'>
            <Flex mb='6px'>
              <Text fontSize='1rem' fontWeight='800' pt='17px'>{stageNameMap[type]}</Text>
            </Flex>
            <ScoreLine value={data.total} border>Total</ScoreLine>
            <ScoreLine value={data.max}>Highest</ScoreLine>
            <ScoreLine value={data.min}>Lowest</ScoreLine>
            <ScoreLine value={data.average}>Average</ScoreLine>
            <ScoreLine value={data.count} gap>Entries</ScoreLine>
            <ScoreLine value={data.ownTotal} border>Own Total</ScoreLine>
            <ScoreLine value={data.ownMax}>Own Highest</ScoreLine>
            <ScoreLine value={data.ownMin}>Own Lowest</ScoreLine>
            <ScoreLine value={data.ownAverage}>Own Average</ScoreLine>
            <ScoreLine value={data.ownCount}>Own Entries</ScoreLine>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

const summaryW = {
  base: '100%',
  lg: '280px'
}

const summaryMinW = {
  base: '100%',
  lg: '0'
}

export const Summary = ({ recoms }) => {
  return (
    <Flex w={summaryW} minW={summaryMinW} mt='15px'>
      <Flex mr='15px'>
        <ChakraImage w='60px' h='60px' src={`/img/blog/remix/final/recommended3.svg`}/>
      </Flex>
      <Flex direction='column' w='100%' wrap='wrap'>
        <Flex direction='row' h='100%'>
          <Flex direction='column' w='100%' pb='10px'>
            <Flex mb='6px'>
              <Text fontWeight='800' fontSize='1rem' pt='18px'>RECOMMENDED FOR:</Text>
            </Flex>
            <Flex W='100%' align='center' mt='15px' justify='space-between'>
              <Flex w='100%' align='center'>
                <ChakraImage w='40px' h='40px' src={recoms[0].src} mr='10px'/>
                <Text fontWeight='600' fontSize='.8rem'>{recoms[0].desc()}</Text>
              </Flex>
              <ChakraImage w='25px' h='25px' src={`/img/blog/remix/final/check.svg`} ml='15px' />
            </Flex>
            <Flex W='100%' align='center' mt='15px' justify='space-between'>
              <Flex w='100%' align='center'>
                <ChakraImage w='40px' h='40px' src={recoms[1].src} mr='10px'/>
                <Text fontWeight='600' fontSize='.8rem' lineHeight='1rem'>{recoms[1].desc()}</Text>
              </Flex>
              <ChakraImage w='25px' h='25px' src={`/img/blog/remix/final/check.svg`} ml='15px' />
            </Flex>
            <Flex W='100%' align='center' mt='15px' justify='space-between'>
              <Flex w='100%' align='center'>
                <ChakraImage w='40px' h='40px' src={recoms[2].src} mr='10px'/>
                <Text fontWeight='600' fontSize='.8rem' lineHeight='1rem'>{recoms[2].desc()}</Text>
              </Flex>
              <ChakraImage w='25px' h='25px' src={`/img/blog/remix/final/check.svg`} ml='15px' />
            </Flex>
            <Flex W='100%' align='center' mt='15px' justify='space-between'>
              <Flex w='100%' align='center'>    
                <ChakraImage w='40px' h='40px' src={recoms[3].src} mr='10px'/>
                <Text fontWeight='600' fontSize='.8rem' lineHeight='1rem'>{recoms[3].desc()}</Text>
              </Flex>
              <ChakraImage w='25px' h='25px' src={`/img/blog/remix/final/check.svg`} ml='15px' />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

const finalFs: any = {
  base: '1rem',
  md: '1.15rem'
}

const ownMr: any = {
  base: '0',
  sm: '25px'
}

const finScoreTextLh: any = {
  base: '20px',
  lg: '55px'
}

const finScoreTextMY: any = {
  base: '10px',
  lg: '0'
}

const finScoreDir: any = {
  base: 'column',
  lg: 'row'
}

const finScoreP: any = {
  base: '60px 40px 0 10px',
  sm: '60px 40px 30px 40px'
}

export const FinalScore = ({ data, recoms }) => {
  return (
    <Flex direction={finScoreDir} fontFamily='Inter,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif' mb='80px' mt='10px' w={scoreW} p={finScoreP} pos='relative' fontSize='0.9rem' bg='#f8f8f8' wrap='wrap' justify='space-between' sx={colGap} mx='auto'>
      <Flex direction={finScoreDir} pos='absolute' pl='70px' top='0' left='0' right='0' bg='#fff4cb' justify='space-between' minH='55px'>
        <Text as='h4' fontWeight='600' fontSize={finalFs} color='#c76e22' lineHeight={finScoreTextLh} mt={finScoreTextMY}>
          <ChakraImage w='50px' h='50px' src='/img/blog/review/final.svg' display='inline-block' pos='absolute' left='10px' top='3px' />
          THE FINAL SCORE: {data.finalScore} IP
        </Text>
        <Text as='h4' fontWeight='500' fontSize='.9rem' color='#c76e22' lineHeight={finScoreTextLh} mr={ownMr} mb={finScoreTextMY}>
          OWN SCORE: {data.ownFinalScore} IP
        </Text>
      </Flex>
      <ScoreSection data={data.BO} type='BO'/>
      <ScoreSection data={data.CX} type='CX'/>
      <ScoreSection data={data.PR} type='PR'/>
      <ScoreSection data={data.UT} type='UT'/>
      <ScoreSection data={data.CO} type='CO' />
      <Summary recoms={recoms}/>
    </Flex>
  )
}

const toggleLeft: any = {
  base: 'calc(15px + 2.5%)',
  md: '-5px'
}

export const BusinessIdeaDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        The "Business Idea" is the main delivery goal of the project. At the most fundamental level, it's a product idea,
        a solution to a real-world problem. In an established project, it means new features and improvements.
        To find the relevant factors of a technology that have consequences at this stage, we should answer two questions:
        What are the necessary features and software qualities our product should have in order to deliver
        the best solution out there? <i>(Problem focus.)</i> How well can the tech we analyse support them?
        We will identify the technical capabilities of the tools that determine their general fit for purpose.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#idea' newTab>Code to Money Roadmap - Stage 1</InternalLink>
        </Text>
      </Paragraph>
  </DescToggle>
  )
}

export const StrategyDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        The "Business Vision &amp; Mission &amp; Strategy" means the middle to long-term goals of the company.
        Strategy is the most relevant level for extracting technical insights.
        The important factors included there are: The specific user types/groups we are targeting and what makes each of them happy.
        Knowing that we can infer the necessary technical properties to reach and satisfy them. <i>(Customer satisfaction focus.)</i> Other
        usual components of IT strategy are specific goals to increase revenue or decrease costs.
        Here, we are looking for the high-level technical factors that can influence all of these.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#strategy' newTab>Code to Money Roadmap - Stage 2</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const ProductDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        This stage is about researching and defining the high-level goals of product development and the strategic/feature roadmap.
        From the developer perspective, we are interested in finding the technology properties that might constraint what kind of features
        are efficient to implement. On a project, we also want to make sure the roadmap takes these into account.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#product' newTab>Code to Money Roadmap - Stage 3</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const OrganizationDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        This stage is concerned with the setup of roles and responsibilities inside the company/department/project
        and the breakdown and scheduling of tasks. It's also about the effectiveness and efficiency of the work processes.
        Our technical interest is to find the properties of the tools that influence these functions. <i>(Process focus)</i> There
        are 2 main components of process performance, the achievable level of control and the amount of generated wastes.
        All of this will turn into improved productivity and utilization and increased profits and reduced costs in the end.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#orgproc' newTab>Code to Money Roadmap - Stage 4</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const DesignDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        To no surprise, this stage is about designing the look & feel of the product from every relevant aspect.
        The output of this step can include: UI / Visual design, Interaction design, Information architecture and more.
        There really are just 2 related technical concerns of software development. First is tech stack integration with the design tools.
        Second is options to buy vs. build.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#design' newTab>Code to Money Roadmap - Stage 5</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const SoftwareDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        This is the first step where the technical software engineering concerns are on the table.
        Here we are defining the system design, software architecture, project structure, including the tools
        used for testing, CI/CD and observability. We are primarily interested in finding the influence of a technology over the efficiency of designing
        and working with the code base.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#software' newTab>Code to Money Roadmap - Stage 6</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const ImplementationDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        This is the stage programmers are the most familiar with. It is about writing and testing the software solution.
        We are interested in how the different aspects of working with a tool influence the overall
        development efficiency.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#implementation' newTab>Code to Money Roadmap - Stage 7</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const DeliveryDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        At this step, the implemented code turns into a usable product, accessible to the end users.
        The result can take many shapes: a new boxed software, an update on a server, a physical product (both hardware and software)
        or digital product (accessible through app or web-stores) and the list goes on. For evaluation, we are interested in any technical property
        that can influence the quality of the release process, meaning its speed, failure-rate and how easy it is to recover from a
        failure.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#delivery' newTab>Code to Money Roadmap - Stage 8</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const OperationDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        This stage is about keeping the product functional for the end users, monitoring its characteristics,
        detecting and reacting to issues, and offering customer support. We are interested in finding any technical property
        that influences how well you can perform these activities.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#operation' newTab>Code to Money Roadmap - Stage 9</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}

export const FeedbackDescription = () => {
  return (
    <DescToggle mb='10px' pos='relative' left={toggleLeft}>
      <Paragraph mb='10px' mt='10px' ml='5px' borderLeft='3px solid #dddddd' pl='15px !important'>
        The final phase is about collecting technical and user feedback about the usage of the product.
        The goal is to turn these into actionable insights, learning the best ways to extend or improve the solution.
        The developer concerns are about how well can we collect and process these data.
        <Text fontSize='0.9rem' fontStyle='italic'>
          Learn more details here: <InternalLink href='/code-to-money-roadmap#feedback' newTab>Code to Money Roadmap - Stage 10</InternalLink>
        </Text>
      </Paragraph>
    </DescToggle>
  )
}