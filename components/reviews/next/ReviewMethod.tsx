import { Flex, Image, ListItem, Text } from '@chakra-ui/react'
import { Paragraph, PostList } from 'components/blog/PostElements'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { InternalLink } from '../common'

const swiperModules = [Navigation]

const sliderWrapSx = {
  '.swiper-wrap': {
    width: '100%'
  },
  '--swiper-navigation-color': 'ínherit'
}

const sliderWrapW: any = {
  base: 'calc(100% - 40px)',
  md: 'calc(100% - 60px)'
}
const sliderWrapMx: any = {
  base: '20px',
  md: '30px'
}

const sliderInnerWrapP: any = {
  base: '15px',
  md: '30px'
}

const marketingDir: any = {
  base: 'column',
  md: 'row'
}

const bookImgWidth: any = {
  base: '100%',
  md: '40%'
}

const marketingTextMargin: any = {
  base: '20px 0 0 0',
  md: '0 10px 0 0'
}

const marketingTextW: any = {
  base: '85%',
  md: '60%'
}

export default function ReviewMethod() {
  return (
    <Flex direction='column' w='100%'>
      <Paragraph minorNext>
        Long-time, returning readers of the blog <i>(I only published one review so far...)</i> might be bored to read another intro to my method so I
        packed it up into a more compact format and also leave out the explanations from the rest of the article. Instead, I put the descriptions behind
        toggles, so newcomers can find them while not getting in the way of the returning readers.
      </Paragraph>
      <Flex w={sliderWrapW} mx={sliderWrapMx} sx={sliderWrapSx} boxShadow='xl' border='1px solid #e0e0e0' borderRadius='md' bg={'#f9f9f9'}>
        <Swiper
          className='swiper-wrap'
          navigation={true}
          modules={swiperModules}
          grabCursor={true}
        >
          <SwiperSlide>
            <Flex direction='column' w='100%' h='auto' p={sliderInnerWrapP}>
              <Text w='100%' textAlign='center' fontSize={'1.75rem'} fontWeight='500'>
                The Full Context System
                <Text as='span' fontSize='1rem' fontWeight='400' ml='10px' pos='relative' top='-2px'>(1/4)</Text>
              </Text>
              <Text w='100%' textAlign='center' fontSize={'1rem'} mt='10px' fontWeight='500'>WHAT'S THIS?</Text>
              <Text w='100%' textAlign='center' fontSize={'1rem'} mt='20px' px='10px' fontWeight='800' >
                The Full Context system is a mental framework for analyzing the real-life impact of programming tools and technologies
                in a structured way.
              </Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                It covers each and every technical factor that contributes into the financial performance of your software product:
                framework architecture, the quality of produced application code, the efficiency of working with a tool,
                how well it integrates into your existing workflows and utilizes existing skills among many other considerations.
              </Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                It also covers project concerns that are influenced by but not directly related to web frameworks.
                A few examples are: observability, product design and business strategy.
              </Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                At times, this leads to uncovering exciting information you won't even find in the official docs.
                Other times, the review will go on and on about things not relevant or interesting to you.
              </Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                If your goal is to get structured, objective insights that you can take with yourself into any serious discussion,
                this is the material you are looking for.
                Otherwise you can 20/80 these reviews by reading only the Stage Scores and the Final Score at the end.
                It will be worth it either way.
              </Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                We will follow the <InternalLink href='/code-to-money-roadmap' newTab >Code to Money Roadmap</InternalLink> that
                walks through every aspect of the software development life-cycle and shows the relevant technical factors at
                each stage of the process.
              </Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                This gives structure to evaluating the effects of a technology over the "Financial API"
                or the "5 currencies" using a metric called "Impact Points".
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction='column' w='100%' h='auto' p='30px' pb='30px'>
              <Text w='100%' textAlign='center' fontSize={'1.75rem'} fontWeight='500'>
                The Full Context System
                <Text as='span' fontSize='1rem' fontWeight='400' ml='10px' pos='relative' top='-2px'>(2/4)</Text>
              </Text>
              <Text w='100%' textAlign='center' fontSize={'1rem'} mt='10px' fontWeight='500'>HOW DOES IT WORK? - 1</Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                <b>Financial API</b>: The developers' gateway to influencing the financial results of a project.
                It consists of 5 elements that define how well a product will do in terms of profit and can be influenced by the tools we use.
                On the roadmap, I call them "currencies" as we can "exchange" these for improved financial gains.
              </Text>
              <PostList noMb mt='15px' pl='0'>
                <>
                  <ListItem>
                    <Text as='span' fontWeight='bold'>Business Opportunity</Text>: Your ability to realize the envisioned
                    product / feature and getting it in front of the users, including the level of effort needed to do so.
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
                    <Text as='span' fontWeight='bold'>Direct Costs</Text>: Costs directly related to technologies/tools like any kind of service or licence fees.
                    There are cost factors in the other elements too, but those are handled separately.
                  </ListItem>
                </>
              </PostList>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                It might not be obvious from this very basic explanation, but the nice thing about the Financial API is that it's all-encompassing.
                It covers every possible way how the technical aspects of software development can influence business results.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction='column' w='100%' h='auto' p='30px' pb='30px'>
              <Text w='100%' textAlign='center' fontSize={'1.75rem'} fontWeight='500'>
                The Full Context System
                <Text as='span' fontSize='1rem' fontWeight='400' ml='10px' pos='relative' top='-2px'>(3/4)</Text>
              </Text>
              <Text w='100%' textAlign='center' fontSize={'1rem'} mt='10px' fontWeight='500'>HOW DOES IT WORK? - 2</Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                <b>Impact points</b>: An exponential scale of 1, 10, 100, 1000 that signifies the relative impact of some technical property over
                the elements of the Financial API. Here is the baseline for each value:
                <PostList noMb mt='15px' pl='0'>
                  <>
                    <ListItem>
                      <b>1</b>: The most minuscule effect possible, localized to an atomic unit of the domain like a single UI element,
                      a one off anonymous function or a single task of a single person.
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
                      or a few parts of a larger system. In different domains, it can affect a substantial group of the complete user base
                      or the performance of a single or a few teams in a large organization.
                      Examples: Subsystem scale refactoring, team level adoption of new technologies or best practices, improving accessibility or offering the service
                      in a new country.
                    </ListItem>
                  </>
                </PostList>
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction='column' w='100%' h='auto' p='30px' pb='30px'>
              <Text w='100%' textAlign='center' fontSize={'1.75rem'} fontWeight='500'>
                The Full Context System
                <Text as='span' fontSize='1rem' fontWeight='400' ml='10px' pos='relative' top='-2px'>(4/4)</Text>
              </Text>
              <Text w='100%' textAlign='center' fontSize={'1rem'} mt='10px' fontWeight='500'>WHAT'S THE RESULT?</Text>
              <Text w='100%' textAlign='start' fontSize={'1rem'} mt='15px' px='10px'>
                <PostList noMb mt='15px' pl='0'>
                  <>
                    <ListItem>
                      <b>1000</b>: This type of impact operates at the highest level of the domain. The whole codebase, the whole user base, or the entire organization.
                      Creating this kind of change is a major undertaking and can deliver business results completely changing the course of a company (or a quarterly result).
                      Examples: A complete UI overhaul or other UX improvement affecting every customer.
                      A major restructuring of an organizational level process for improved efficiency.
                      Moving a whole system from a legacy platform to the cloud.
                    </ListItem>
                  </>
                </PostList>
                <Text mt='15px'>
                  An impact analysis will help you understand the strengths and weaknesses of a technology in a general, but
                  the significance of the rated factors changes on a per project basis
                  so their score should be adjusted to your specific context if you are using these reviews for  adoption decisions.
                </Text>
              </Text>
              <Flex
                w='100%'
                mt='35px'
                p='60px 0'
                bg='aliceblue'
                align='center'
                borderRadius='md'
                border='2px solid #5e7ec7'
                direction={marketingDir}
              >
                <Image src='/img/showcase.png' w={bookImgWidth} ml='25px'/>
                <Text
                  w={marketingTextW}
                  textAlign='start'
                  color='#0936a7'
                  fontSize={'1rem'}
                  fontWeight='600'
                  fontStyle='italic'
                  m={marketingTextMargin}
                >
                  Are you interested in learning how to use this system for everyday development work?
                  Then check out the: <InternalLink href='/' newTab color='#29946f' fontWeight='800'>Full Context Software Development</InternalLink> online book.
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>

        </Swiper>
      </Flex>
    </Flex>
  )
}