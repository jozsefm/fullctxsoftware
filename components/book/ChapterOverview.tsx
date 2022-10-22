import { Flex, Text, LinkBox, LinkOverlay, Tag, Icon, Spinner, Box } from '@chakra-ui/react'
import { VscUnlock } from 'react-icons/vsc'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ChapterStats } from 'components/book/ChapterStats'
import { ChapterSub } from 'components/book/ChapterSub'
import { useCallback, useState } from 'react'

type ChapterOverviewProps = { config, swap?, noAlt?, description, textMinH?, isFree?, restricted?, time, date, version, progress, enjoy, theop }

export const ChapterOverview = ({ config, swap, noAlt, description, textMinH, isFree, restricted, time, date, version, progress, enjoy, theop }: ChapterOverviewProps) => {
  const [loading, setLoading] = useState(false)
  const handleClick = useCallback(() => setLoading(true), [])


  const statProps = { time, date, version, progress, enjoy, theop }
  return (
    <LinkBox
      as={Flex}
      direction='column'
      w='85%'
      maxW='405px'
      bg='white'
      borderRadius='10px'
      boxShadow='xl'
      minH='150px'
      p='20px'
      justifyContent='space-between'
      onClick={handleClick}
      pos='relative'
    >
      {loading ? <Spinner pos='absolute' top='44%' left='44%' size='xl' zIndex='2' color='blue.500' thickness='3px' /> : null}
      {loading ? <Box pos='absolute' top='0' bottom='0' left='0' right='0' bg='#00000049' zIndex='1' borderRadius='10px' /> : null}
      <Flex direction='column' w='100%'>
        <Flex direction='row' justify='space-between' mt='-8px'>
          <Flex>
            <Text fontSize='1.3rem'>{config.emoji}</Text>
          </Flex>
          {noAlt ? null : <Flex>
            <ChapterSub>{swap ? config.alt || config.overviewAlt : config.sub}</ChapterSub>
          </Flex>}
        </Flex>
        <Flex direction='row' justify='space-between'>
          <Flex>
            <LinkOverlay href={`/book/${config.path}`}>
              <Text textTransform='uppercase' fontSize='0.85rem' ml='2px'>{config.title}.</Text>
            </LinkOverlay>
          </Flex>
        </Flex>
        <Text textTransform='uppercase' fontWeight='bold' fontSize='1.15rem'>{swap ? config.sub : config.alt} <ExternalLinkIcon fontSize='1rem' pos='relative' top='-2px'/></Text>
        <Text minH={textMinH ? textMinH : null} mt='20px' as='span' fontSize='0.8rem' fontWeight='bold'>DESCRIPTION: <Text as='span' fontSize='0.9rem' lineHeight='1rem' fontWeight='400'>{description}</Text></Text>
      </Flex>

      <ChapterStats {...statProps} />
      
      {isFree && restricted && <Tag pos='absolute' bottom='-14px' right='14px' colorScheme='green' boxShadow='md' zIndex='2'><Icon as={VscUnlock} mr='5px'/> Free Access</Tag>}
    </LinkBox>
  )
}