import { Flex, Heading, Text } from '@chakra-ui/react'
import { ChapterOverview } from 'components/book/ChapterOverview'
import { FlexGrid } from 'components/FlexGrid'
import { navConfig } from 'constants/pageIds'
import { UserContext } from 'contexts/UserProvider'
import { NextSeo } from 'next-seo'
import { useContext, useMemo } from 'react'
      
const bookSEO = {
  title: "Book Overview • Full Context Development",
  description: "Read a short description about each chapter of the book.",
  canonical: 'https://www.fullcontextdevelopment.com/book',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/book',
    title: 'The Overview of The Full Context Software Development Online Book',
    description: 'Read a short description about each chapter of the book.',
  }
}

const headingFs: any = {
  base: '1.875rem',
  md: '3.75rem'
}

const sloganFs: any = {
  base: '1.2rem',
  md: '2rem'
}

const sloganPx: any = {
  base: '25px',
  md: '0'
}

const descFs: any = {
  base: '1.2rem',
  md: '1.5rem'
}

export default function BookOverview() {
  const { user } = useContext(UserContext)
  const restricted = useMemo(() => {
    return !user.loggedIn
  }, [user])

  return <>
    <NextSeo {...bookSEO} />
    <Flex
      direction='column'
      justify='flex-start'
      align='center'
      h='100%'
      minH='100vh'
      mt='60px'
      pb='80px'
      bg='#f9f9f9'
    >
      <Heading
        as='h1'
        fontSize={headingFs}
        color='black'
        textAlign='center'
        p='10px 20px 10px 20px'
        mb='15px'
        mt='15px'
      >
        Full Context Software Development Book
      </Heading>
      <Text
        fontSize={sloganFs}
        mb='20px'
        px={sloganPx}
        fontWeight='bold'
        maxW='820px'
        letterSpacing='-0.5px'
        textAlign='center'
        fontStyle='italic'
      >
        - Master the highest-level of technical decision making -
      </Text>
      <Text
        textTransform='uppercase'
        fontSize={descFs}
        mb='30px'
        color='#666'
        fontWeight='bold'
        maxW='720px'
        textAlign='start'
      >
        CONTENT OVERVIEW
      </Text>
      <FlexGrid maxW='1400px' margin='0 auto' color='black'>
        <ChapterOverview
          swap
          config={navConfig[1]}
          restricted={restricted}
          description={`The introduction explains what are the industy wide problems the book aims to tackle, why are they worth solving
          and how can all this benefit You. Of course there's some personal introduction and you will read about how the author came up with this whole idea.`}
          time={`${Math.ceil( 1039 / 300)} min`}
          date='Dec. 10, 2021'
          version='1st revision'
          progress='100'
          enjoy='60'
          theop='15'
        />
        <ChapterOverview
          swap
          config={navConfig[2]}
          restricted={restricted}
          description={`The book starts off with asking then answering some of the most fundamental questions about our work. Questions we usually don't even think about,
          concerning the very nature of software and development itself. Why? Because the answers will define the core philosophy of Full Context Development.`}
          time={`${Math.ceil( 3958 / 300)} min`}
          date='Dec. 10, 2021'
          version='1st revision'
          progress='100'
          enjoy='85'
          theop='30'
        />
        <ChapterOverview
          config={navConfig[3]}
          restricted={restricted}
          description={`This chapter defines the conceptual, high-level framework we will use to evaluate technology choices.
          It starts with business value and arrives at all the tools we have to influence it.
          It finishes with a structural overview of the main ideas of Full Context Development.`}
          time={`${Math.ceil( 4229 / 300)} min`}
          date='Oct. 22, 2022'
          version='1st revision'
          progress='100'
          enjoy='70'
          theop='40'
        />
        <ChapterOverview
          config={navConfig[4]}
          description={`Here we discuss the exact business mechanics how the User API delivers the 4 business value types.
          This ensures our system and decisions are grounded in real facts.
          Then we summarize the actions developers can take to influence each value category.`}
          time={`${Math.ceil( 4248 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='95'
          enjoy='40'
          theop='50'
        />
        <ChapterOverview
          config={navConfig[5]}
          description={`This chapter teaches what's relevant for a software engineer about the components of customer experience 
          so we can later discuss our influence over this area and evaluate our technical decisions from the perspective of our users.`}
          time={`${Math.ceil( 2962 / 300)} min`}
          date='Mar. 18, 2022'
          version='Initial Draft'
          progress='100'
          enjoy='60'
          theop='10'
        />
        <ChapterOverview
          config={navConfig[6]}
          description={`This chapter introduces how to view the software you create as a product, what defines it's quality
          in this regard and summarizes all the ways the different technical attributes affect it. It also connects everything discussed
          in the previous 2 chapters with this topic to offer a systemic overview of our influence over the users.`}
          time={`${Math.ceil( 4541 / 300)} min`}
          date='Mar. 18, 2022'
          version='Initial Draft'
          progress='42'
          enjoy='85'
          theop='75'
        />
        <ChapterOverview
          config={navConfig[7]}
          description={`Here you will learn not only about the ways we have to create positive experiences for the users
          but all the technical details how we actually implement that (even unknowingly) with the everyday work wo do.
          Rest assured it's relevant to all engineers regardless of specialization.`}
          time={`${Math.ceil( 7332 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='75'
          enjoy='80'
          theop='70'
        />
        <ChapterOverview
          config={navConfig[8]}
          description={`Here we set the stage for the next couple of chapters about the organizational aspect of our work.
          It explains how much of the Full Context reaches us in a typical software company
          and how can we uniquely utilize that knowledge. This defines the baseline the book teaches you how to exceed.`}
          time={`${Math.ceil( 2288 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='70'
          enjoy='70'
          theop='80'
        />
        <ChapterOverview
          config={navConfig[9]}
          description={`Our technical choices can deeply affect the efficiency of organizations.
          This chapter explains the elementary knowledge about organizational structure and performance
          to help you understand all the relevant factors while discussing our influence over this area.`}
          time={`${Math.ceil( 1942 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='100'
          enjoy='40'
          theop='10'
        />
        <ChapterOverview
          config={navConfig[10]}
          description={`The main topics discussed here are the 2 major process optimization methodologies,
          specifically adopted by the author to the software development workflow. This is a hands down take
          on the subject that's easily applicable in technical decision making.`}
          time={`${Math.ceil( 6898 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='90'
          enjoy='60'
          theop='75'
        />
        <ChapterOverview
          config={navConfig[11]}
          description={`You will learn a method how to approach evaluating the consequences of technology choices
          over the performance of an organization. It also includes the final API of the material the Developer API,
          describing how technology affects our lives and feelings.`}
          time={`${Math.ceil( 4277 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='80'
          enjoy='60'
          theop='55'
        />
        <ChapterOverview
          config={navConfig[12]}
          description={`In this chapter we laser-focus on code. The goal is to identify both the general and the
            specific attributes of any codebase that has a relationship with the other elements of the Full Context.
            You will learn the universal optimization targets of code.`}
            time={`${Math.ceil( 1403 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='55'
          enjoy='82'
          theop='65'
        />
        <ChapterOverview
          config={navConfig[13]}
          description={`The cherry on top of the cake, the best part of the material, you will learn how the timeless and universal
          properties of any software technology ripple through the Full Context and finally deliver business value. This a practical overview
          that can be used as a checklist at evaluation.`}
          time={`${Math.ceil( 9520 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='75'
          enjoy='95'
          theop='90'
        />
        <ChapterOverview
          config={navConfig[14]}
          description={`In the final chapter we build up a complementary work methodology that helps to identify and track the real values of any software project
            and show how to constantly align our decisions with them.`}
          time={`${Math.ceil( 985 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='35'
          enjoy='85'
          theop='90'
        />
        <ChapterOverview
          swap
          config={navConfig[16]}
          description={`These guides offer exact processes to follow when identifying the value-defining elements of the Full Context.
          Here you will learn how to analyze the purely business related factors that should influence your decision-making process.`}
          time={`${Math.ceil( 1418 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='55'
          enjoy='45'
          theop='55'
        />
        <ChapterOverview
          swap
          config={navConfig[17]}
          description={`The user context includes the real problems the application is trying to solve and discusses the ways to find the desired software properties
          that can fulfill them.`}
          time={`${Math.ceil( 1482 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='40'
          enjoy='60'
          theop='55'
        />
        <ChapterOverview
          swap
          config={navConfig[18]}
          description={`Here you will learn to identify the strengths and weaknesses of any development process and a way to make
          technology choices that further the strengths and counter the weaknesses.`}
          time={`${Math.ceil( 596 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='20'
          enjoy='45'
          theop='65'
        />
        <ChapterOverview
          swap
          config={navConfig[19]}
          description={`What are the relevant properties of a project that should drive technical decisions? This is another
          timeless topic that will help you to better align your choices with the real goals regardless of the technolgies in use.`}
          time={`${Math.ceil( 145 / 300)} min`}
          date='Dec. 10, 2021'
          version='Initial Draft'
          progress='5'
          enjoy='40'
          theop='65'
        />
      </FlexGrid>
    </Flex>
  </>
}