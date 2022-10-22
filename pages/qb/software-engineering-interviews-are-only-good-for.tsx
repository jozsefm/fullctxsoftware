import { Paragraph, PostFooter } from 'components/blog/PostElements'
import { QbLayout } from 'components/qb/QbLayout'
import { ExternalLink } from 'components/reviews/common'
import { QB_DATES, QB_STATUSES } from 'constants/blogPosts'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "Breaking a Taboo: Software Engineering Interviews Are Only Good For ...",
  description: "My takeaways after doing a lot of software engineering interviews recently",
  canonical: 'https://www.fullcontextdevelopment.com/qb/software-engineering-interviews-are-only-good-for',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/qb/software-engineering-interviews-are-only-good-for',
    title: 'Breaking a Taboo: Software Engineering Interviews Are Only Good For ...',
    description: "My takeaways after doing a lot of software engineering interviews",
    site_name: 'Full Context Development Quick Bits',
    type: 'article',
    images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/qb/hotlink-ok/interviewsSocial.jpg',
        width: 1600,
        height: 900,
        alt: 'Software Engineering Interviews Are Only Good For',
        type: 'image/jpeg',
      },
    ],
  }
}

export default function InterviewTaboo() {
  return (
    <QbLayout
      title='Breaking a Taboo: Software Engineering Interviews Are Only Good For ...'
      publishDate={QB_DATES.interviewTaboo.published}
      updateDate={QB_DATES.interviewTaboo.lastUpdated}
      completed={QB_STATUSES.interviewTaboo}
    >
      <NextSeo {...postSEO} />
      <>
        <Paragraph minorNext>
          <b>Measuring how much you have prepared for them.</b> It's very similar to the way the university system works.
          There you learn how to pass exams, not <i>(necessarily)</i> how to do work in your chosen profession.
          Programmer interviews have the same effect. They measure your skills of interviewing, not <i>(necessarily)</i> how well you will work. 
        </Paragraph>
        <Paragraph minorNext>
          And what are those interviewing skills? Well, it depends on the type of interview you are taking, but in general it has more to do with communication,
          confidence, sales &amp; marketing than we usually think. Technical knowledge is important but often the "other" skills are what
          will determine the outcome. <i>(Or at least, set you apart.)</i>
        </Paragraph>
        <Paragraph minorNext>
          In the recent months, I did more than a couple of interviews as a candidate. <i>(~ 20 to be more precise.)</i> It was not for the first time
          in my 8 years of working as an SWE but now I spent some time to seriously contemplate what does it require to be successful at them. 
        </Paragraph>
        <Paragraph minorNext>
          And my final conclusion was that you simply have to show what they want to see. You have to know how to find out what a company is looking for
          and figure out how to emulate that with everything you do. Usually they are simply looking for a person who they like, yes even when the process is structured. 
        </Paragraph>
        <Paragraph minorNext>
          What does that mean? What we all know: <ExternalLink href='https://stackoverflow.blog/2022/05/23/the-science-of-interviewing-developers/'>
            most interviews are useless
          </ExternalLink>, those that are not, often measure your fit for the job through proxy indicators. Which, in turn, further
          adds to the discrepancy between the skills required for getting employed and the skills required to actually do the job.
        </Paragraph>
        <Paragraph minorNext>
          <b>Takeaway</b>: It would be nice to somehow radically change the way we interview for jobs. <i>
            (Here are some <ExternalLink href='https://fev.al/posts/leet-code'>related ideas</ExternalLink> for starters.)
          </i> Until then learn how to act if that's what you need to do to get hired. Show what the company wants to see.
          My advice is to don't stop acting afterwards! Emulate good behavior until it becomes the real you. This way interviewing
          can <i>(and do)</i> act as an industry wide incentive for positive attitude. 
        </Paragraph>
        <PostFooter />
      </>
    </QbLayout>
  )
}