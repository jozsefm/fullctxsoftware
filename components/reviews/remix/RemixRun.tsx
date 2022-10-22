import { Paragraph, Quote } from 'components/blog/PostElements'
import { ExternalLink } from 'components/reviews/common'

export default function RemixRun() {
  return (
    <Paragraph mb='15px'>
      For those who need some background here, <ExternalLink href='https://remix.run'>Remix</ExternalLink> is the hot, new React.js based metaframework. If you are unfamiliar with metaframeworks in the frontend world, simply put they are
      technologies built on top of existing frameworks like React or Svelte, extending them with additional functionality to improve developer productivity.
      Common examples are streamlined- routing, data handling and deployment.
      In our case Remix joined the group of metaframeworks that expand the scope of React into the server side, the family of Next.js, Gatsby, Redwood, Blitz.js among others.
      It's initially developed by two reputable programmers in the React space: <ExternalLink href='https://twitter.com/ryanflorence'>Ryan Florence</ExternalLink> and <ExternalLink href='https://twitter.com/mjackson'>Michael Jackson</ExternalLink>, but
      the team since expanded with other huge names such as <ExternalLink href='https://twitter.com/kentcdodds'>Kent C. Dodds</ExternalLink>.
      How is Remix different from the existing solutions? Why is it interesting to developers?
      Which of its unique design decisions have the greatest financial influence?
      Let's start digging!
      <Quote>The primary focus of this article will be discovering how the design choices of Remix can influence your project's financial performance.</Quote>
    </Paragraph>
  )
}