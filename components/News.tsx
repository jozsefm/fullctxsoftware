import {
  Button,
  Container,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  Text,
  UnorderedList,
  ListItem,
  ModalHeader,
  ModalCloseButton
} from '@chakra-ui/react'
import { NewsEntry } from './NewsEntry'
import { newsEntriesData } from 'constants/newsEntires'
import { useCallback, useContext, useState } from 'react'
import { HeaderContext } from 'contexts/HeaderProvider'

export function News() {
  const [ modalContent, setModalContent ] = useState(null)
  const [ modalHeading, setModalHeading ] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { storeContext } = useContext(HeaderContext)

  const setupAndOpenModal = useCallback((content, heading) => {
    setModalContent(content)
    setModalHeading(heading)
    onOpen()
  }, [storeContext])

  const closeModal = useCallback(() => {
    onClose()
    setModalContent(null)
    setModalHeading(null)
  }, [storeContext])

  return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
          <NewsEntry
            type='update'
            heading='Update #2: Increase that font size!'
            summary="I heard your feedback about text legibility on high resolutions."
            date={newsEntriesData.updateNo2.date}
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                Hi Everyone! Thanks for the constructive feedback about the reading experience!
              </Text>
              <Text lineHeight='2rem'>
                I tried to quickly address this issue by intorducing an increase-font-size functionaiity to the book view.
                There's a new button in the sticky top bar, you won't miss it!
                Clicking it will make those words bigger in 4 steps then reset it to the initial size.
              </Text>
              <Text lineHeight='2rem'>
                I hope this works for those who couldn't fully enjoy the content previously. Let me know what you think!
                <br />
                - Joe
              </Text>
            </>}
          />  
          <NewsEntry
            type='update'
            heading='Update #1: Minor content fixes + community news'
            summary="As the book started to get tracton I addressed the most critical issues with the book."
            date={newsEntriesData.updateNo1.date}
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                Hi Everyone! A warm welcome to every new member of the full context development community!
                This was a pretty darn good week for us.
              </Text>
              <Text lineHeight='2rem'>
                The first ever full context review (about Remix) got popular!
                It was showcased in the 307 issue of the 'reactnewsletter.com' newsletter and got listed on
                https://react.libhunt.com/ as well! I believe It was close to making it into the React Status by Cooperpress
                as it was ranked number 1 on their daily digest at https://discovery.cooperpress.com/react.html for the 13th of March.
                It would have been awesome to get in there, I will be working hard to reach that one day.
              </Text>
              <Text lineHeight='2rem'>
                About the topic of this post, as many of you have recently bought the book, I
                quickly cleaned up the most critical issues within the material.
                I added notifications to the work-in-progress chapters, fixed every typo I left in there,
                added a missing image to Ch. 6 and started integrating an image viewer to Ch 2. (not yet done)
                I want to be honest with all of you, I moved really fast to hit production and while
                the system is stable there are these minor flaws here and there. If you notice anything let me know!
                Thanks guys! All the best until the next one!
              </Text>
            </>}
          />  
          <NewsEntry
            type='update'
            heading='To every awesome person who joined early'
            summary="A heartfelt thank you and a quick summary of feedback"
            date={newsEntriesData.early.date}
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                I'm thrilled that you joined the Full Context Development Community so soon.
                Your participation is a huge encouragement for me!
                Showing interest in my ideas means a lot after 2 years of dedicated work.
                I would love to talk to you on Discord about your expectations and experience.
                (You can get your invite through the Profile page)
              </Text>
              <Text lineHeight='2rem'>
                Here are some of the early findings I gathered from the feedback so far.
                People are confused. I think rightly so. I'm not apt at copywriting yet.
                The message I try to convey is not focused enough on the benefits. So I will
                try to take a new approach to presenting the material, starting on the landing page
                with this update. If successful, this will find its way to the book very soon too.
                I really want to find how to make my message crystal clear and engaging.
                It might take a lot of work and learning, but I will get there eventually.
              </Text>
              <Text lineHeight='2rem'>
                On a sidenote I made some technical improvements to the initial loading of the landing page
                which included changes in how authenticated users get to the logged-in home page. If
                you notice some differences in behavior after opening the app, this is the likely reason.
              </Text>
            </>}
          />
          <NewsEntry
            type='message'
            heading='For the new Full Context Development members'
            summary="Read this message if it's your first time using the site."
            date={newsEntriesData.release.date}
            pinned
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                Hi! I'm beyond excited that you joined us! 
                Here, I would like to give you some general information about the site. First of all:
                You have a special invitation to the Discord Server on your profile page. Team members should ask their admins to send it to them.
                <br />
                Regarding the current situation:
                <br />
                <br />
                The content in total is around 60~70% ready, nearly all the concepts are there, but many details need to be filled in.
                The chapters with an 'Initial Draft' version might substantially change during the first revision, but their message
                should stay the same or only get extended / clarified.
                On the site pretty much everything is under active development, but what's there works well even if it looks basic.
                Most of my effort went into the Book view so far to give you a nice reading experience. Make sure to head over
                there with the huge button above once you are done with the news.
                I'm very busily working on finishing the material, improving the site, building visibility and the community.
                Please let me know if I can help you with anything! Questions, bugs, corrections, you name it. Thanks again for joining
                Full Context Development, enjoy your stay!
              </Text>
            </>}
          />
          <NewsEntry
            type='important'
            heading='My vision for the community'
            summary="Learn about my vision for the Full Context Development community and get thrilled to participate, at least that's what I hope to achieve. :)"
            date={newsEntriesData.release.date}
            pinned
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                My vision for our community is to define and spearhead a transformation in the perspective of software developers
                world-wide about what's our role and responibility in creating software products
                by focusing on the real-life benefits that our work provides to all involved parties.
                This is a deep transformation that takes times and effort but has the potential to create far reaching effects across the whole industry.
                <br />
                <br />
                Does it sound impossible? Unrealistic? Way too big of a dream?
                You bet I feel like that. Writing such an ambitious statement is well beyond my comfort zone. It far exceeds my capabilities, my influence
                and I'm not 100% sure about it's validity. With the early access some components for it are still missing.
                However, if you think that we can create better software than we generally do, if you too see the potential of improving
                the products we work on by getting their creators to care more about the real world impact they generate and if you agree that
                a Full Context view of our role can help in achieving that, then together we can make a difference. And don't get me wrong,
                I will be happy even if only a single person benefits from this approach. What I described is a vision, maybe an unobtainable one, maybe
                not the right one, but this is what motivates me. I'm moving towards this goal. I'm glad for the journey even if I fail or
                turn out to be wrong. On the way, I want to get together those who feel like this is a meaningful goal.
                I hope to create the best community to find help in understanding and appyling the Full Context approach and
                refine or even rethink these ideas together with awesome professionals like you.
                So please get in touch, join, chat, DM, post or whatever you fancy, I can't wait to see you on:
              </Text>
              <UnorderedList pl='10px' ml='10px' mt='10px' spacing={2}>
                <ListItem>
                  Discord
                </ListItem>
                <ListItem>
                  Reddit
                </ListItem>
                <ListItem>
                  Twitter
                </ListItem>
                <ListItem>
                  YouTube (coming soon)
                </ListItem>
              </UnorderedList>
            </>}
          />

          <NewsEntry
            type='message'
            heading='What to expect: the current roadmap'
            summary="Here's what I am and will be working on."
            date={newsEntriesData.release.date}
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                These are currently in my focus:
              </Text>
              <UnorderedList pl='10px' ml='10px' mt='10px' spacing={2}>
                <ListItem>
                  Site stability
                </ListItem>
                <ListItem>
                  Finishing the existing chapters
                </ListItem>
                <ListItem>
                  Marketing and community building
                </ListItem>
                <ListItem>
                  Creating technology reviews
                </ListItem>
              </UnorderedList>
              <Text lineHeight='2rem' mt='25px'>
                And this is what I plan to do next
              </Text>
              <UnorderedList pl='10px' ml='10px' mt='10px' spacing={2}>
                <ListItem>
                  Rethinking the way the book presents the material.
                </ListItem>
                <ListItem>
                  Maybe a video course purely about the practical application?
                </ListItem>
                <ListItem>
                  Additional chapters
                </ListItem>
                <ListItem>
                  Professional (re)design for the site and the book
                </ListItem>
                <ListItem>
                  Usability improvements
                </ListItem>
                <ListItem>
                  YouTube series
                </ListItem>
              </UnorderedList>
            </>}
          />

          <NewsEntry
            type='update'
            heading='The first blog posts are out'
            summary='I will be constantly trying to push out interesting content, this is my first attempt.'
            date={newsEntriesData.release.date}
            onReadMore={setupAndOpenModal}
            modalBody={<>
              <Text lineHeight='2rem'>
                The Blog is not really emphasized in the current design, so I wanted to raise some attention there. I have
                great plans for that part as well. Check it out from time-to-time.
              </Text>
            </>}
          />
        </SimpleGrid>
        {/* @ts-ignore */}
        <Modal isOpen={isOpen} onClose={closeModal} isCentered  scrollBehavior='inside' preserveScrollBarGap='false' size='xl'>
          <ModalOverlay />
          <ModalContent bg='#252525' color='rgb(199 199 199)' mx='3' p='2'>
            <ModalHeader>{modalHeading}</ModalHeader>
            <ModalCloseButton />
            {modalContent}
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModal} variant='ghost' boxShadow='lg' bg='#171717'>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
  );
}