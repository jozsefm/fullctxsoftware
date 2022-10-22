import { Container, OrderedList, ListItem } from '@chakra-ui/react'
import { IMG_DATA, POST_DATES, POST_TAGS } from 'constants/blogPosts'
import { CustomLink } from 'components/CustomLink'
import { PostLayout } from 'components/blog/PostLayout'
import { Paragraph, PostFooter, PostHeading } from 'components/blog/PostElements'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "What is Full Context Development and why do you need it? • Blog • Full Context Development",
  description: "The main ideas that define the Full Context Development method and all the benefits it provides.",
  canonical: 'https://www.fullcontextdevelopment.com/blog/what-is-full-context-development',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog/what-is-full-context-development',
    title: 'What is Full Context Development and why do you need it?',
    description: 'The main ideas that define the Full Context Development method and all the benefits it provides.',
    site_name: 'Full Context Development Blog',
    type: 'article'
  }
}

export default function Post() {
  return (
    <PostLayout
      title='What is Full Context Development and why do you need it?'
      tags={POST_TAGS.why}
      svg={svg}
      imgAlt={IMG_DATA.why.alt}
      imgSrc={IMG_DATA.why.src}
      publishDate={POST_DATES.why.published}
      emphasis
    >
      <NextSeo {...postSEO} />
      <>
        <PostHeading>
          Imagine a developer who wants to get promoted to a lead position.
        </PostHeading>
        <Paragraph>
          And we are not simply talking about a team lead role, the goal is technical leadership, the higest level responsibility in tech decision making.
          What do you think, what is the most essential skill to fill such a position? Programming excellence? Soft skills? People skills? All of them?
          While I don't want to downplay their significance, if I can only choose one, I will choose: value-based decision making. This is something that
          needs a bit of explanation. It means having deep understanding about the context of technical decisions and the relationship between
          software engineering concerns and financial interests.  
        </Paragraph>
        <PostHeading>
          The top 10 tech comparisons miss the point
        </PostHeading>
        <Paragraph>
          If you worked in the field of professional development for a while, I'm sure you already read a 1000 comparison articles (or watched videos) about
          the different technologies that aim to solve the same problems. Java vs C#, React vs Angular, MongoDB vs MySQL, AWS vs GCP,
          Terraform vs CloudFormation and the list goes on to infinity. I don't know about you, but I have often felt let down by these reviews.
          They usually talk about learning curve, productivity, level of support, community size, differences in approach and implementation, performance,
          and probably some picking on style and other personal preferences. It's all well and good for a while and let's be honest with yourself and each other,
          it will stay between software engineers. Aren't you making choices based on what you "like" the most? I sure do. What seems more interesting, what brings
          new and exciting ideas to the table, and probably where all the hype is, the tools evangelized by our favourite developer celebs.
        </Paragraph>
        <PostHeading>
          The developers' soul & the companies in pursuit
        </PostHeading>
        <Paragraph>
          We all get enthusiastic and pick what seems 'the best'. Then we get emotionally attached to our choice and try to defend it if its position as 'best' is contested.
          It's understandable. We invest major effort into learning these tools and bet our current and future employability on them. Nobody wants to admit
          they choose a mediocre or worse, poor technology that might go out of fashion and lose the potential of making big money.
          I think this is a major part of how our psychology works and this gets reflected in the comparisons.
          Even if they seem objective. Their whole perspective is about things we developers consider when making investment choices about our skills.
          The creators and advocates of the tools want to win us over, because in a sense we are the kingmakers. If you can capture the heart of software engineers,
          the technology will most likely become adapted
          and a financial success. That's why you see developer experience emphasized so much and emotional language used like 'awesome' and 'cool' in many comparisons.
        </Paragraph>
        <PostHeading>
          Why is this a problem?
        </PostHeading>
        <Paragraph>
          Until I became a lead developer - maybe in part thanks to my inexperience - I really liked these articles. I lacked the self-reflection and wider perspective
          that shines a different light on these reviews. They often end with the seemingly wise conclusions. "There's no best tool. They have different pros and cons
          and you need to pick the right one for the job." When I finally had the responsibility to pick the right one for a job with major money on the line, I started to wonder.
          How can I explain to the stakeholders which one is the right one <b>in our situation</b>? None of these articles hint at the <b>benefits</b> those
          technical properties bring to the table from the business point of view. How am I supposed to tell if React or Vue will offer a better user experience for our target audience?
          Or how would they affect our release performance? How much faster will we resolve production issues if we use AWS DynamoDB vs our own hosted PostgreSQL database?
          And how much would that improve our overall customer satisfaction?
          Nothing that interested the people I had to sell my ideas to was outlined directly in these articles.
        </Paragraph>
        <PostHeading>
          Then it's your problem
        </PostHeading>
        <Paragraph>
          You might think that's fine. There should be other resources for IT leaders.
          Let me tell you, there aren't many - especially for free -. Or you might say, well, it's a leader's job to tell how those properties translate to
          the business world. Fair enough, but why aren't we helping the leaders with such resources? Well, I guess the answer is because regardless our position;
          we are still not really interested in the business. <b>Business doesn't sell to developers.</b> However, the sad reality is that the ultimate goal of *every* developer is to
          ship business value. That's why we have a job. Nobody reads our code like poetry. Our users - but from this perspective it's better to call them our customers -
          only see the software we create and only care about how it solves their problems.
          If you progress far enough in your career it's inevitable to face this reality and start making decisions with others in mind.
          Or if you work at a competent software company, caring about the impact of your work is a part of the promotion criteria list.
          I felt let down again and again, because there's no focus in most of our comparisons
          on customer experience or organizational efficiency and consequently business results.
          This is what (should) really matters when we decide what to use.
          I would love to read some top 10 programming languages articles that tell me what kind of projects would benefit from adopting a certain language and exactly how.
        </Paragraph>
        <PostHeading>
          We don't even know
        </PostHeading>
        <Paragraph>
          But heck, can you even tell me the basic ingredients for such a comparison?
          What kind of technical properties does for example React have over Angular or MongoDB over Cassandra that
          makes a difference in the business sense, and more importantly, <b>exactly how much difference</b>?
          To me, that would be the point of comparing different tools that aim at solving the same problems.
          The issue is, in general, that we don't really know the business relevance of technical properties nor how to connect them with financial outcomes.
          I see vdom diffing vs direct dom manipulation, terse vs bloated code, hooks vs classes, eventual vs strong consistency, smaller bundle sizes,
          incremental rebuilds, hot reloading. OK, but I need answers to questions like: How much does it help to reduce the price/cost of the software?
          How much will it help to hit a revenue target in the next quarter? How many more users will we be able to serve?
          Or how will it affect the site's conversion rate?
        </Paragraph>
        <PostHeading>
          Enter Full Context Development
        </PostHeading>
        <Paragraph>
          I decided enough is enough. It's time that someone gets to the bottom of this. It shouldn't be that hard to identify the relationship
          between the technical properties of programming technologies and the kinds of business effects they can create.
          I figured, we only need to get it done once, then we all can use the static connections as a map to find any relevant consequence
          of having or missing some technical attributes. This is one of the main goals of Full Context Development.
          However, it turned out to be 'that hard' and even harder.
          During my work on identifying these relationships, I found that it requires a transformation of our mindset
          to really get what this is all about. So the results became much more than a simple map.
        </Paragraph>
        <PostHeading>
          It's a mentality and a way of working
        </PostHeading>
        <Paragraph>
          Full Context Development is a set of principles about the role of software developers that the best of us
          have always lived by, but we never gave it a name and definition before. It's also a set of practices that translate the principles
          into everyday application. It has 3 "axioms" at its heart:
          <Container>
            <OrderedList pl='10px' ml='10px' mt='10px' spacing={2}>
              <ListItem>
                Software is a solution to human problems. A developer's task is to solve those problems through code.
              </ListItem>
              <ListItem>
                Developers should have some ownership of the full impact of their work.
              </ListItem>
              <ListItem>
                Software and Code are different views of the same thing, with distinct concerns and interests. It's our job to care about both.
              </ListItem>
            </OrderedList>
          </Container>
        </Paragraph>
        <PostHeading>
          It's an attempt to improve the industry
        </PostHeading>
        <Paragraph>
          I will generalize here, so I acknowledge there are (many) exceptions, that might include you. That's fine. My goal is to paint the big picture,
          and I believe the following points apply in general. (If you disagree, let me know in the comments.)
          Most developers go to their first job with either computer science focused studies behind their back or with typical bootcamp/self-taught
          knowledge that's purely about how to build things. Of course, by that time, many of us have developed side projects or even full sized applications.
          What we didn't do is (obviously) fine-tuning software products to achieve better financial results. Nor did we try to improve large-scale organizational
          processes for better efficiency and effectiveness. (eg.: software development) We also didn't care a bit about how to do these.
          Full Context Development is an acknowledgement of the reality that nonetheless
          our ultimate task will be to write software that sells and to do it in a way that optimizes the operation of the company as much as possible
          all the while taking care of our own needs and fulfillment. I guess you haven't been taught how to do that right?
        </Paragraph>
        <PostHeading>
          It's technical and developer focused
        </PostHeading>
        <Paragraph>
          The practices of Full Context Development are all about making tech decisions because choosing the tools to use and the way to use them
          are the most impactful decisions software developers can make. Its goal is to show the connections between our actions and
          their effects on the customer's experience, the performance of the organization and through these the financial performance of the product.
          It's core belief is that by connecting developers to the final results of their work, they get more motivated, empowered and invested in
          creating great products, not simply great code.
        </Paragraph>
        <PostHeading>
          It's already widely used
        </PostHeading>
        <Paragraph>
          Not by the developers, but by the people we work for. On the highest level, software is an exploration of ways to create value for
          the users and the businesses. In that sense nobody is paying for the code we write, they pay for the outcomes it produces. That's
          what matters for the 'business people' and they are desperately trying to discover the connections Full Context Development describes.
          The only issue is that they are not equipped with the technical knowledge necessary to find them. The results? At best, missed opportunities.
          At worst, failing projects and lost investments. None of them are good.
        </Paragraph>
        <PostHeading>
          It's a bridge
        </PostHeading>
        <Paragraph>
          It fills the gap between tech and business. It might also fill the one between a senior and a lead position. It benefits everyone.
          The company gets software which sells better. The users get software that solves their problems more effectively.
          The developers get confidence in their decisions and recognition for the success of the product. At least that's the idea.
          Life is never that simple, but the Full Context Development system has the potential to deliver these, if used properly.
          It helps to get our real tasks done. (Once it's finished, as of December 2021 it's in early access.)
        </Paragraph>
        <PostHeading>
          How does it work?
        </PostHeading>
        <Paragraph>
          The backbone of this system is twofold: First is a way to identify every aspect of the: business model, user base, organization and project
          that should influence tech decisions. The second is a method to evaluate the impact of any technology related change over the 4 main areas that drive business value.
          Namely: Customer Experience, Productivity, Utilization and Business Opportunities. Their potential financial effects are defined in the system
          so you can use these to reach the outcomes of any tech choice.
          The only real task is to find the affected quality attributes of 3 things: code, software and processes. Their influence over the other
          elements of the Full Context are documented an can be traced back all the way to the final measures: R.I.P. CAR. Which is an acronym for:
          Revenue - Increase, Protect. Costs - Avoid, Reduce. The Full Context definition of business value.
        </Paragraph>
        <PostHeading>
          Are you interested in learning more?
        </PostHeading>
        <Paragraph>
          For more in-depth introduction check out the <CustomLink to='/'>landing page</CustomLink> or the <CustomLink to='/book/intro'>Intro chapter</CustomLink>.
          The book <CustomLink to='/book'>overview</CustomLink> describes the entire system,
          just as the other <CustomLink to='/book/chapter-1'>2 free chapters</CustomLink>. For the complete experience, you can already <CustomLink to='/signup'>sign up</CustomLink>.
        </Paragraph>
        <PostFooter />
      </>
    </PostLayout>
  )
}

const svg = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjI1Ij48ZGVmcy8+PHBhdGggZmlsbD0iIzJhMzk1MCIgZD0iTTAgMGgzMDB2MjI1SDB6Ii8+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48Y2lyY2xlIHI9IjEiIGZpbGw9IiNlN2ZmZmYiIHRyYW5zZm9ybT0ibWF0cml4KC0xNC4zMjM2OCAxNy42MjUyOSAtMTMuNjYwMjkgLTExLjEwMTQxIDEyMi41IDM4LjkpIi8+PHBhdGggZmlsbD0iIzcxYWQ4YiIgZD0iTTEyMiA4Mmg2MHY2MGgtNjB6Ii8+PGVsbGlwc2UgY3g9IjEyMiIgY3k9IjE4NCIgcng9IjI1NSIgcnk9IjkiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQ0IDRoOTB2NWgtOTB6Ii8+PGVsbGlwc2UgY3g9IjIzMiIgY3k9IjcyIiBmaWxsPSIjMWIxYTA3IiByeD0iNDAiIHJ5PSI2NSIvPjxlbGxpcHNlIGN4PSIxNyIgY3k9IjU1IiBmaWxsPSIjMTUyMDE5IiByeD0iNjciIHJ5PSI4MiIvPjxlbGxpcHNlIGN4PSI5OCIgY3k9IjE0MCIgZmlsbD0iI2QzZDdkNCIgcng9IjIxNyIgcnk9IjMiLz48ZWxsaXBzZSBjeD0iMTY5IiBjeT0iNTQiIGZpbGw9IiM1ZGEyOTUiIHJ4PSIxMCIgcnk9IjUwIi8+PGVsbGlwc2UgY3g9IjgzIiBjeT0iMTY2IiBmaWxsPSIjN2E4YjdhIiByeD0iMTk0IiByeT0iNiIvPjxwYXRoIGZpbGw9IiM3OWZmZmYiIGQ9Ik0xMjMgMTExaDMxdjExaC0zMXoiLz48cGF0aCBmaWxsPSIjZDNmZWZmIiBkPSJNMTA2IDMyaDI0djI1aC0yNHoiLz48cGF0aCBkPSJNMjA5IDE0N2g0N3YxNmgtNDd6Ii8+PGVsbGlwc2UgY3g9IjIwMSIgY3k9IjExMSIgZmlsbD0iI2NhY2JjMCIgcng9IjU3IiByeT0iMiIvPjxwYXRoIGQ9Ik0wIDE0N2g0M3YxN0gweiIvPjxwYXRoIGZpbGw9IiMyOTlhYmIiIGQ9Ik05Mi44IDEyNy45bDMuOC00NSAxNy4yLTYuOC0zMy43IDEuNnoiLz48cGF0aCBmaWxsPSIjMTQxODA2IiBkPSJNMTAwIDE2NWwtNDUtMjYgMTIyIDEzeiIvPjxwYXRoIGZpbGw9IiM1ODVlNjgiIGQ9Ik02MyA4bDEyMCAxLTY3IDIweiIvPjxwYXRoIGZpbGw9IiMzYjM3MjQiIGQ9Ik0xNDMgMjZoMTd2ODRoLTE3eiIvPjxwYXRoIGZpbGw9IiMxMzFjMTciIGQ9Ik0xNjEgMTE0aDk1djIyaC05NXoiLz48cGF0aCBmaWxsPSIjMWIxYjE5IiBkPSJNMjIzIDE1NWwtMTEwLTM1IDM4IDM0eiIvPjxwYXRoIGZpbGw9IiM5NmE2YTYiIGQ9Ik0yMTAuOSA3Mi42bC00MiAzLjEtMTEuMS00LjYgMzYuNC02LjR6Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMTMwZDAwIiB0cmFuc2Zvcm09Im1hdHJpeCgtMS4xNTc5OCAtMjEuMjUzNTggODkuOTA1MTUgLTQuODk4MzggMjA5IDE5MSkiLz48ZWxsaXBzZSBjeD0iMjU1IiBjeT0iNiIgZmlsbD0iI2JmYzVjNiIgcng9IjEyMSIgcnk9IjMiLz48ZWxsaXBzZSBjeD0iMTc1IiBjeT0iMTYwIiBmaWxsPSIjYTRiNmFlIiByeD0iMjgiIHJ5PSIzIi8+PHBhdGggZmlsbD0iI2I4YjFhYyIgZD0iTTIxMyAxMzZoNDN2OWgtNDN6Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjNzI3OTZiIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTY4LjkgNTIuNCA3OSkgc2NhbGUoNDEuODA5NDkgOS4wMzg0OSkiLz48cGF0aCBmaWxsPSIjYTBjYWU2IiBkPSJNMCAxNDBoMzV2NUgweiIvPjxlbGxpcHNlIGN4PSIxMTYiIGN5PSIxMzkiIGZpbGw9IiNhMGFkYjEiIHJ4PSI3NyIgcnk9IjMiLz48cGF0aCBmaWxsPSIjNDlmZmYzIiBkPSJNMTQzIDEyNmgyNHY2aC0yNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEzIDE0M2gyNHYyaC0yNHoiLz48cGF0aCBmaWxsPSIjZTdlYWU0IiBkPSJNLTguNCAxMDBsMTUuOS0yIDEgOC0xNiAyeiIvPjxlbGxpcHNlIGN4PSIxNzkiIGN5PSI4MSIgZmlsbD0iIzEyMGQwNCIgcng9IjIwIiByeT0iNSIvPjxwYXRoIGZpbGw9IiNiOGFmYTMiIGQ9Ik0xOTIuOCA5NS4ybC03LjgtNC40LTIwLjYtNS4zLS45IDE1LjJ6Ii8+PGVsbGlwc2UgY3g9IjIxIiBjeT0iMTIxIiBmaWxsPSIjMGM4ZDk5IiByeD0iMjUiIHJ5PSI0Ii8+PHBhdGggZmlsbD0iI2I4ZDhmNSIgZD0iTTExOSA1NWwxNy0xNi05LTMzeiIvPjxwYXRoIGZpbGw9IiMxYTIxMmIiIGQ9Ik0xMiAxOGg5M3Y1OUgxMnoiLz48ZWxsaXBzZSBjeD0iMzgiIGN5PSIxOTEiIGZpbGw9IiMxYjEwMDUiIHJ4PSI3NyIgcnk9IjIyIi8+PHBhdGggZmlsbD0iIzFlN2I5NyIgZD0iTTE1OS4yIDM1LjRsNTQgNi43LTQ3IDE2LTcuOS0xNi4zeiIvPjxwYXRoIGZpbGw9IiM1M2NlZmYiIGQ9Ik03NSAxMmgyM3Y0SDc1eiIvPjxwYXRoIGZpbGw9IiMwMDEyMTUiIGQ9Ik0xMTIuMSAxMjguMmw0OS0xMC40LjggNC00OSAxMC40eiIvPjxlbGxpcHNlIGN4PSI3IiBjeT0iODAiIGZpbGw9IiM3ODdhN2MiIHJ4PSIyNCIgcnk9IjUiLz48cGF0aCBmaWxsPSIjMTgxZDBmIiBkPSJNMjYgMTI3bDIxIDMwIDMwLTR6Ii8+PHBhdGggZmlsbD0iaXZvcnkiIGQ9Ik0xODkgMTM0aDE4djJoLTE4eiIvPjxwYXRoIGZpbGw9IiM0MzNiMzkiIGQ9Ik0xNDEgMjdsLTQ4LTUgODUtMTR6Ii8+PHBhdGggZmlsbD0iIzQzNjc1OSIgZD0iTTExNSAxNDkuN2wtMTMuMy02Ny4yLTkgMjcuMyAxNC44IDMwLjV6Ii8+PHBhdGggZmlsbD0iIzAyMDcwMCIgZD0iTTIxOS42IDEyNy42bC0xOS40IDIwLjkgNzAuOC0zLjctNjcuMSAxOC4xeiIvPjxwYXRoIGZpbGw9IiMzNTQwM2QiIGQ9Ik0xNDcuNSAyNS40bC00NyA3MC42IDg2LjItNDAuMy0yNS44IDEuM3oiLz48cGF0aCBmaWxsPSIjY2NkZmVlIiBkPSJNNTggMTYxaDI3djRINTh6Ii8+PHBhdGggZmlsbD0iIzUyZmZkOSIgZD0iTTE2My42IDExNC45bC0yNy45IDkuNi0xMi4yLTQuMi0uOS0xMC41eiIvPjxlbGxpcHNlIGN4PSI3MSIgY3k9IjIzIiBmaWxsPSIjNDE0ODUwIiByeD0iNCIgcnk9IjExOCIvPjwvZz48L3N2Zz4="