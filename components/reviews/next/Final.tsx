import { Paragraph } from 'components/blog/PostElements'
import { FinalScore, InternalLink } from 'components/reviews/common'
import { finalNextJsStats } from 'constants/scores/next'

const nextRecommendations = [
  {
    src: '/img/blog/next/final/trust1.svg',
    desc: () => <>STABILITY &amp; LONG-TERM SUPPORT IS PREFERRED</>
  },
  {
    src: '/img/blog/next/final/scale1.svg',
    desc: () => <>PROJECTS OF <br /> ALL SIZES <br /> (EXCEPT LVL. 4)</>
  },
  {
    src: '/img/blog/remix/final/speed3.svg',
    desc: () => <>PERFORMANCE IS <br /> BUSINESS CRITICAL</>
  },
  {
    src: '/img/blog/next/final/people1.svg',
    desc: () => <>LARGE TEAMS <br /> AND SCALING ORGANIZATIONS</>
  },
]

export default function Final() {
  return (
    <>
      <Paragraph>
        <b>Description</b>:
        The 'Final Score' is the sum total of every impact point gathered on the road. The 'Own Score'
        is the number of impact points that belongs to the framework itself, so ecosystem
        and platform benefits are excluded from this value. There are some basic statistics
        for every element of the Financial API to offer more context and clarify how Next.js  does in each area.
      </Paragraph>
      <FinalScore data={finalNextJsStats} recoms={nextRecommendations}/>
      <Paragraph minorNext>
        <b>Interpretation</b>: So what's the meaning of all this? The higher total impact a tool has, the more business / financial
        benefits it delivers. Separating the own score of a technology is useful for comparison between tools. The
        total value is more meaningful for adoption decisions. Keep in mind that the total values are not a representation of
        how well Next.js does in each and every situation. Your specific business/project needs might match up with the lowest scores of
        some areas. What the total value shows is the general potential of Next, or how likely it is to match the typical needs of
        web-based products.
      </Paragraph>
      <Paragraph>
        If you are unsure how to find the relevant
        properties of Next.js for your business case, here comes the business impact summary. If you need more insights,
        then the Full Context Development book goes much deeper into matching technologies with business needs. <br /> <InternalLink href='/book'>Check it out!</InternalLink>
      </Paragraph>
    </>
  )
}