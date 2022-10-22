import { Paragraph, PostFooter } from 'components/blog/PostElements'
import { QbLayout } from 'components/qb/QbLayout'
import { QB_DATES, QB_STATUSES } from 'constants/blogPosts'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "From Eastern Europe to The West as a Software Engineer",
  description: "The cultural differences between Hungarian and Western software development companies",
  canonical: 'https://www.fullcontextdevelopment.com/qb/from-eastern-europe-to-the-west-as-a-software-engineer',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/qb/from-eastern-europe-to-the-west-as-a-software-engineer',
    title: 'From Eastern Europe to The West as a Software Engineer',
    description: "The cultural differences between Hungarian and Western software development companies",
    site_name: 'Full Context Development Quick Bits',
    type: 'article',
    // images: [
    //   {
    //     url: 'https://www.fullcontextdevelopment.com/img/qb/hotlink-ok/interviewsSocial.jpg',
    //     width: 1600,
    //     height: 900,
    //     alt: 'From Eastern Europe to The West as a Software Engineer',
    //     type: 'image/jpeg',
    //   },
    // ],
  }
}

export default function EastToWest() {
  return (
    <QbLayout
      title='From Eastern Europe to The West as a Software Engineer'
      publishDate={QB_DATES.eastToWest.published}
      updateDate={QB_DATES.eastToWest.lastUpdated}
      completed={QB_STATUSES.eastToWest}
    >
      <NextSeo {...postSEO} />
      <>
        <Paragraph minorNext>
          <b>I was born in a little town</b> in the post-soviet, <i>(actually soviet at that time)</i> Central/Eastern European country of Hungary.
          I had loving, bright and quite poor parents. <i>(Nearly everybody was poor back then around here.)</i> I actually remember
          when the closest city was renamed from "Lenin city" to something Hungarian. <i>(I was around 4)</i> Until
          I wrote the Full Context Software Development book and did serious research into how software businesses work,
          I had no idea just how deeply affected the work culture of my entire country is by our not-so-distant past. 
        </Paragraph>
        <Paragraph minorNext>
          Applying to and interviewing at a lot of Western European companies was the trigger for this
          realization. In Hungary, most software companies have a huge focus hard skills.
          Interviews are based on measuring mostly that. <i>
            (Of course, there are lots of places where it's done better, but usually those have a multi-national background.
            )</i>
        </Paragraph>
        <Paragraph minorNext>
          It's no wonder, back in the communist days, having a job was required by law and so people were put into positions with no related skills.
          They even dreamed up nonsense jobs just to get people employed. Career progress was often tied to
          political connections and level of involvement with the communist party.
          I don't have to say it wasn't productive.
        </Paragraph>
        <Paragraph minorNext>
          Then in 1990, we became a capitalist democracy. Because I was growing up in this era, I just unconsciously took our work culture for granted.
          <i>(Heck, even the phrase "work culture" sounds weird and foreign for the regular Hungarian,
            and I mean its counterpart in our language "munka kultúra".)</i> Ppeople were very un-enthusiastic about having to work for real or to put in extra effort.
          There was general pessimism about career outlook and in fact many positions were still filled through personal connections.
        </Paragraph>
        <Paragraph minorNext>
          Words and phrases like productivity, team player, utilization, customer centric, efficiency, continuos improvement simply didn't
          (and to an extend, in certain industries, still don't) mean anything here. Mostly nobody experienced them previously.
          So they were completely ignored during the interview process as well. Our nation wanted factory workers who can handle the machines
          in every kind of job and industry simply because that's what work meant for us.
          I can still recognize this in today's Hungarian software companies to some degree.
        </Paragraph>
        <Paragraph minorNext>
          It's in stark contrast with the standard requirements for software engineering positions in the west.
          If a CV doesn't reflect what kind of values we delivered, what improvements we made, what kind of impact we had there won't even be a phone call from the company.
          Then the behavioral and culture fit parts explicitly inspect work ethics, character and soft skills because they are just-as or even more important
          for working effectively than hard skills, which are much more easy to teach.
        </Paragraph>
        <Paragraph minorNext>
          <b>Why did I talk about my childhood?</b> Coming from such an environment <i>(which I consider very blessed)</i>,
          it took me 30+ years to experience firsthand how the best businesses work and realize why there are so many companies
          to this day that only want coding skills and little else in my country. If my parents weren't doing their best I couldn't come this far.
          I'm certain there's much more nuance to this situation, and I can even completely miss the point here, but it was very interesting
          to find a possible relationship between the work culture of 30+ years in the past and the hiring process of today's companies here.
        </Paragraph>
        <PostFooter />
      </>
    </QbLayout>
  )
}