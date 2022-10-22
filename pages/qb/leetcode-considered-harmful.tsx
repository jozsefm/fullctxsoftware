import { Img } from '@chakra-ui/image'
import { Flex, Link } from '@chakra-ui/layout'
import { Paragraph, PostFooter, Quote } from 'components/blog/PostElements'
import RelatedContent from 'components/blog/RelatedContent'
import { QbLayout } from 'components/qb/QbLayout'
import { ExternalLink, InternalLink } from 'components/reviews/common'
import { QB_DATES, QB_STATUSES } from 'constants/blogPosts'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "Leetcode Considered Harmful",
  description: "Using an industry wide perspective I will show you the unseen downsides of using leetcode for interviewing software engineers",
  canonical: 'https://www.fullcontextdevelopment.com/qb/leetcode-considered-harmful',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/qb/leetcode-considered-harmful',
    title: 'Leetcode Considered Harmful',
    description: "Using an industry wide perspective I will show you the unseen downsides of using leetcode for interviewing software engineers",
    site_name: 'Full Context Development Quick Bits',
    type: 'article',
    images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/qb/hotlink-ok/leetcodeSocial.jpg',
        width: 1600,
        height: 900,
        alt: 'Leetcode Considered Harmful',
        type: 'image/jpeg',
      },
    ],
  }
}

const relatedContent = [
  {
    url: '/qb/software-engineering-interviews-are-only-good-for',
    title: 'Breaking a Taboo: Software Engineering Interviews Are Only Good For...',
    type: 'qb',
    date: QB_DATES.interviewTaboo
  },
  {
    url: '/qb/from-eastern-europe-to-the-west-as-a-software-engineer',
    title: 'From Eastern Europe to The West as a Software Engineer',
    type: 'qb',
    date: QB_DATES.eastToWest
  }
]

const imgMt: any = {
  base: '35px',
  md: '0'
}

const imgDir: any = {
  base: 'column',
  md: 'row'
}

export default function LeetCodeHarmful() {
  return (
    <QbLayout
      title='Leetcode Considered Harmful'
      publishDate={QB_DATES.leetHarmful.published}
      updateDate={QB_DATES.leetHarmful.lastUpdated}
      completed={QB_STATUSES.leetHarmful}
    >
      <NextSeo {...postSEO} />
      <>
        <Paragraph minorNext>
          <b>LC = TC</b>. There's this saying
          in the <ExternalLink href='https://www.reddit.com/r/cscareerquestions/'>r/cscareerquestions</ExternalLink> subreddit that
          your leetcode skills are directly correlated with the total compensation you will earn. It's of course an exaggeration,
          but shows really well how important this topic is for many-many software engineers. There's a lot of debate going on about if
          this is a good way to do interviewing or not. Many pros and cons were covered by others, much better than I could do,
          so I will only focus on a single point I have never read before elsewhere.
        </Paragraph>
        <Quote smallM noMt>
          <>
            <b>What is leetcode?</b> If you are not familiar with the term, leetcode is a type of coding task,
            widely used by the word's largest software companies during live interviews that's exploring a candidate's knowledge of elementary computer science concepts:
            algorithms, data-structures and complexity analysis. This is in stark contrast with the regular job of most developers, where this knowledge
            is, at best, marginally relevant.
            
          </>
        </Quote>
        <Paragraph minorNext>
          <b>How to find a problem that others failed to recognize</b>? Are you familiar with the story of <ExternalLink href='https://en.wikipedia.org/wiki/Theranos'>
            Theranos
          </ExternalLink>? The company that was founded by <ExternalLink href='https://en.wikipedia.org/wiki/Elizabeth_Holmes'>
            Elizabeth Holmes
          </ExternalLink> a narcissistic lier, who scammed hundreds of millions out of investors and even the U.S. government with an imaginary product?
          Theranos on the outside looked like the next Apple, revolutionizing the healthcare industry until investigative journalist <ExternalLink href='https://en.wikipedia.org/wiki/John_Carreyrou'>
            John Carreyrou
          </ExternalLink> questioned the authenticity of the company's claims. I saw the movie where he explains what triggered his initial suspicion
          and I found his method absolutely crucial in understanding the effects of large-scale issues. 
        </Paragraph>
        <Paragraph minorNext>
          <b>How is this related to leetcode</b>? John's method is based on taking a very high level overview of the situation so no specific
          detail can deceive your judgement.
          In the case of Theranos, Elizabeth was a college drop-out who claimed to invent technology that the whole pharma industry failed to
          develop before her. That's possible in the realm of software but for classical sciences, the world doesn't work this way.
          So he started digging, and the rest is history. Now, how all this applies to leetcode? You might suspect I will talk about
          how it doesn't work, but that's not what I'm concerned with. Instead, following John's example, I will take a high level look
          on the influence of leetcode. What's the widest possible scope to use here? The whole software development industry.
          That level allowes us to find something, what I beleive is a previously overlooked consequence of using it.
        </Paragraph>
        <Paragraph minorNext>
          <b>An unknown issue with leetcode</b>. Because the top tier, dream companies, where every developer wants to work at use this interviewing method,
          many programmers spend considerable effort and money on acquiring leetcode skills. There's an abundance of YouTubers, paid courses and
          books covering how to ace the leetcode interview. What do you think results from this in the grand scheme of things? A bad incentive.
        </Paragraph>
        <Quote smallM noMt>
          Leetcode is harmful to the tech industry!
        </Quote>
        <Paragraph minorNext>
          Most ambitious software engineers are incentivized to learn skills they won't ever use for actually getting their jobs done!
          Truth to be told, even if we disregard the fact that they can get you hired, mastering leetcode is not completely without merit.
          However, I would still argue that they are far from being the highest ROI training activities a software engineer can choose.
        </Paragraph>
        <Paragraph minorNext>  
          How much better professionals would we all become <i>(or how much faster would we get there)</i> if interviews
          were about skills applicable in our job?
          But this is still not the main point! Even worse is a missed opportunity we so far failed to recognize.
          <b>Top tech companies, through their interviewing methods, have a way to influence the mentality and skill set of the whole industry.</b> That's
          a tremendous amount of power and responsibility! What are the outcomes of their current approach?
        </Paragraph>
        <Paragraph minorNext>
          They could incentivize us to learn how to write software that solves real-life problems, creates value for the
          companies and the customers while making the best impact on society that code can deliver. Yet, according to the top software companies in the world,
          what we need to be measured by is our knowledge of algorithms and data structures. And again, I'm not saying that this doesn't work as a candidate filter.
          It obviously does for them.
        </Paragraph>
        <Paragraph minorNext>
          But because the dream job is a few leetcode interviews away, everybody is raving about solving LC hard On Reddit and Blindr all day, every day.
          Aren't there any other skills we developers have that would bring more value and benefits for everybody, if they were in the center of our attention
          instead of graph traversal and hash maps?
        </Paragraph>
        <Paragraph updateStyle>  
          In response to the plethora of comments on HN and Reddit criticising the fact that I'm not offering better alternatives,
          I want to emphasize this post is a problem statement. I actually have a few <i>(untested)</i> ideas about improving the situation,
          that I will cover in a <InternalLink newTab href='/qb/the-full-context-interview-method'>
            future post
          </InternalLink>. <i>(Keep an eye on it if you are interested or want more things to hate on)</i>
        </Paragraph>
        <Paragraph minorNext mt='25px'>
          <b>What's the conclusion</b>? In my perspective, the real goal of any software product, and in turn every software developer, is to solve human problems.
          I believe it would be a wonderful change if M(<i>formerly F</i>)AANG and the Fortune 500 companies would look for ways how to test if
          a developer is capable of delivering the best solutions to the real-life problems their users face instead of the O(1) solution to
          binary tree maximum path sum.
        </Paragraph>
        <Paragraph minorNext>
          <b>A call to action</b>. Even if you disagree with me about the details, I believe it's time to revisit the way we conduct
          interviews as an industry. Not because what we currently do isn't working, but because companies have a powerful tool at their disposal,
          in the form of the used interviewing method, to shape the mind and skill set of the whole industry.
          Do we utilize it for the best effect possible?
          What's your opinion?
          Thinking about this aspect of industry wide hiring practices is something I have not encountered before.
          Let's start a discussion! <i>#interviewimpact</i>
        </Paragraph>
        <Paragraph minorNext>
          <b>A big thank you for my sponsors</b>. I made a poor attempt with my <ExternalLink href='/book'>book</ExternalLink> in
          exploring all the tools and techniques, available only for software engineers
          to create software that's better at solving real-life problems and delivering value. But it didn't take off at all, <i>
          (and you are better off not buying it too...)
          </i> so I want to thank the awesome sponsors of this article:
        </Paragraph>
        <Flex direction={imgDir} justify='space-between' w='100%' mb='35px'>
          <Link href='https://leetcode.com' target='_blank'><Img src='/img/qb/leetcode/leetcode.png' borderRadius='6px' m='0 auto'/></Link>
          <Link href='https://www.techseries.dev' target='_blank'><Img src='/img/qb/leetcode/techinterview.png' borderRadius='6px' m='0 auto' mt={imgMt}/></Link>
        </Flex>
        <Paragraph minorNext>
          Without your support, I wouldn't have been able to create this post! If you want to ace those leetcode interviews at your dream company,
          make sure to check them out and use the code ... <i>oh, that would be nice, but there's no code, in reality, I don't have any sponsors</i>. 😭
        </Paragraph>
        <Paragraph minorNext>
          <i>(Please LeetCode and The TechLead don't sue me, this is a joke. You both have fantastic products! The article is aimed to critique the
          industry trends, not individuals or companies and expresses my own opinion.)</i>
        </Paragraph>
        <RelatedContent suggestions={relatedContent} />
        <PostFooter />
      </>
    </QbLayout>
  )
}