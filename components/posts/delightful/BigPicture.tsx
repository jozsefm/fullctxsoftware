import { Paragraph, Quote } from 'components/blog/PostElements'
import { InternalLink } from 'components/reviews/common'

export default function BigPicture() {
  return (
    <>
      <Paragraph>
        One of the core tenets of Full Context Development, written in <InternalLink href='/book/chapter-1#bae1f2900ad94c32aa59691d6032c2f1' newTab>Chapter 1</InternalLink> of the book, is
        about the goal of every software engineering decision:
        <Quote>Ultimately, we solve human problems.</Quote>
        This is the final goal of every line of code we write and all the other supporting activities we do to get there. Like setting up a project structure.
        So this is what I will explore: What kinds of human problems can the "Delightful Structure" solve and how well? - <i>This is the point where I recommend
          reading the original article if you are interested.
        </i>
      </Paragraph>
    </>
  )
}