import { ListItem, Flex, Text, UnorderedList} from '@chakra-ui/react'
import { Paragraph, PostList, Quote } from 'components/blog/PostElements'

import { ulMr } from 'components/reviews/common'

export default function ReviewMethod() {
  return (
    <>
      <Paragraph minorNext>
        We are going to give a score to Remix. What would be the point of using an analysis framework if it couldn't measure and quantify the "goodness" of something?
        It won't be some willy-nilly X/100 rating. <b>Objective</b> is the keyword around here. Following the Full Context method, we will evaluate the
        effects of Remix over the "Financial API" or the "5 currencies" using a metric called "Impact Points". Let me briefly explain what are these weird things if you are not familiar with the system.
        Hang in there! Soon it will be all about Remix, I promise.
      </Paragraph>
      <Paragraph>
        <b>Financial API</b>: The developers' gateway to influencing the financial results of a project.
        It consists of 5 elements that define how well a product will do in terms of
        profit and can be influenced by the tools we use. On the roadmap, I call them "currencies" as we can "exchange" these for
        improved financial gains. One of the main goals of this review is to find out exactly how well can Remix deliver them.
        <Quote noMb>One of the main goals of this review is to identify the influence of Remix on the Financial API</Quote>
        <PostList noMb>
          <>
            <ListItem>
              <Text as='span' fontWeight='bold'>Business Opportunity</Text>: The ability to realize the envisioned
              product/feature and getting it in front of the users.
              {/* In other words, how well the technology supports your use-case. */}
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'>Customer Experience</Text>: How much your (even just potential)
              customers like the product and your company/brand.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'>Productivity</Text>: How efficiently can the developers work on your project.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'>Utilization</Text>: What portion of the available resources (developer capacity, hardware, software, budget, etc...)
              is used.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'>Costs</Text>: Costs directly related to technologies/tools like any kind of service or licence fees.
              There are cost factors in the other elements too, but those are handled separately.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext>
        It might not be obvious from this very basic explanation, but the nice thing about the Financial API is that it's all-encompassing.
        It covers every possible way how the technical aspects of software development can influence business results. At the end of the
        review, I will summarize all the related metrics and factors that Remix can affect.
        <Quote noMb>At the end of the review, I will summarize every business metric and factor that Remix can influence.</Quote>
      </Paragraph>
      <Paragraph minorNext>
        <b>Impact points</b>: An exponential scale of 1, 10, 100, 1000 that signifies the relative impact of some technical property over
        the elements of the Financial API. Here is the baseline for each value:
        <PostList>
          <>
            <ListItem>
              <b>1</b>: The most minuscule effect possible, localized to an atomic unit of the domain like a single UI element,
              a one off anonymous function or a single tasks of a single person.
              Examples: Changing the color of a button, a minor change in the runtime of a step in an automated process.
            </ListItem>
            <ListItem>
              <b>10</b>: This is the kind of impact we start to notice in real life.
              It affects multiple occurrences of an atomic unit, like a reusable UI component, a single class in an OOP codebase
              or the regular work of an individual.
              Examples: An improvement to the UX of every Sign Up button in an application, refactoring a method in a frequently used
              class for better maintainability and understandability, or improving the happiness and motivation of a team member.
            </ListItem>
            <ListItem>
              <b>100</b>: An impact of this size is something multiple people will recognize and appreciate. We usually strive to create this
              kind of improvements in our work. It might mean improvements in application wide concerns (speed, security) in one
              or a few parts of a larger system. In different domains it can affect a substantial group of the complete user base
              or the performance of a single or a few teams in a large organization.
              Examples: Subsystem scale refactoring, team level adoption of new technologies or best practices, improving accessibility or offering the service
              in a new country.
            </ListItem>
            <ListItem>
              <b>1000</b>: This type of impact operates on the highest level of the domain. The whole codebase, the whole user base or the entire organization.
              Creating this kind of change is a major undertaking and can deliver business results completely changing the course of a company (or a quarterly result).
              Examples: A complete UI overhaul or other UX improvement affecting every customer.
              A major restructuring of an organizational level process for improved efficiency.
              Moving a whole system from a legacy platform to the cloud.
            </ListItem>
          </>
        </PostList>
        Even though the impact analysis of Remix will help you
        understand the strengths and weaknesses of the framework in a general, the significance of the rated factors changes on a per project basis
        so their score should be adjusted to your specific context if you are using this review to support adoption decisions.
      </Paragraph>
      <Paragraph>
        <b>Code to Money Roadmap</b>: It's simply a tour around the software development lifecycle that
        highlights the connections between each stage and the elements of the Financial API. It also gives you
        a practical checklist for every step about the related software engineering concerns. That's why
        we can follow it to evaluate the impact of Remix over every aspect of software development and
        give it an as close-to-objective as possible final score.
        Thanks for sticking with me during all the introduction, now let's get started for real!
      </Paragraph>
    </>
  )
}