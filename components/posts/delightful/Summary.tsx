import { Paragraph, Quote } from 'components/blog/PostElements'
import { InternalLink, SubScore} from 'components/reviews/common'
import { delightfulScore } from 'constants/scores/delightful'

export default function Summary() {
  return (
    <>
      <Paragraph minorNext>
        This was the quick analysis of the Josh's project setup. I hope you learned something new about how software works from the big picture while following along!
        Using the system of Full Context Development, it's possible to score the impact of programming decisions no matter how low or high level they are. So here's
        how much this setup can affect a project in numbers. You can use it to pitch adoption ideas to management, for example. <i>If you are unfamiliar with how this system works,
          you can read the introduction in the first <InternalLink href='/blog/remix-full-context-review#review' newTab>Full Context Review</InternalLink> about Remix,
          or check out the free sections of the <InternalLink href='/book' newTab>Online Book</InternalLink>.
        </i>
      </Paragraph>
      <SubScore data={delightfulScore} />
      <Quote>The Delightful React File/Directory Structure will really delight not only the developers but the customers and the management as well.</Quote>
    </>
  )
}