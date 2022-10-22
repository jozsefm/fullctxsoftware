import { TimeIcon } from '@chakra-ui/icons'
import { Box, Flex, Progress, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react'

const lookupColor = number => {
  if (number < 20) return 'red'
  if (number < 50) return 'yellow'
  if (number < 80) return 'blue'
  return 'green'
}

const lookupRangeColor = number => {
  if (number < 21) return 'red'
  if (number < 41) return 'yellow'
  if (number < 51) return 'pink'
  if (number < 66) return 'blue'
  if (number < 76) return 'cyan'
  if (number < 86) return 'teal'
  return 'green'
}

const scaleMx = { base: '5px', sm: '8px', md: '10px' }
const thumbDisabled = { bg: 'transparent' }

export const ChapterStats = ({time, date, version, progress, enjoy, theop}) => {
  return (
    <Flex w='105%' direction='column' bg='#f3f3f3' mt='20px' pos='relative' left='-2.5%' p='2.5%' borderRadius='md'>
      <Flex w='100%' direction='row'>
        <Flex direction='column' w='50%'>
          <Text as='span' color='#525252' fontSize='0.8rem' fontWeight='bold'>STATS:</Text>
          <Flex direction='column' color='#888' mt='6px' w='100%'>
            <Text fontSize='0.8rem' lineHeight='1.3rem' mr='10px'>Read time: <TimeIcon mr='5px' fontSize='0.85rem' pos='relative' top='-1px'/> ~ {time}</Text>
            <Text fontSize='0.8rem' lineHeight='1.3rem' mr='10px'>Last updated: {date}</Text>
          </Flex>
        </Flex>

        <Flex direction='column' w='50%'>
          <Text as='span' color='#525252' fontSize='0.8rem' fontWeight='bold'>PROGRESS:</Text>
          <Flex direction='column' color='#888' mt='6px' w='100%'>
            <Text fontSize='0.8rem' lineHeight='1.3rem' mr='10px'>Version: {version}</Text>
            <Text fontSize='0.8rem' lineHeight='1.3rem'>
              Done:
              <Progress bg='#cdcdcd' w='49%' display='inline-block' value={progress} size="xs" colorScheme={lookupColor(progress)} mx='5px' pos='relative' top='-1px' />
              {progress}%
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w='100%' direction='row' mt='12px'>
        <Flex direction='column' w='50%'>
          <Text as='span' color='#525252' fontSize='0.8rem' fontWeight='bold'>SCALES:</Text>
          <Flex direction='column' color='#888' mt='6px' w='100%'>
            <Text fontSize='0.8rem' lineHeight='1.3rem' mr='10px'>Enjoyable:</Text>
            <Text fontSize='0.8rem' lineHeight='1.3rem' mr='10px'>Theoretical - Practical:</Text>
          </Flex>
        </Flex>
        <Flex direction='column' w='50%'>
          <Flex direction='column' color='#888' mt='28px' w='100%'>
            <Text fontSize='0.8rem' lineHeight='1.3rem'>
              ☠️
              {/* <Progress bg='#cdcdcd' w='65%' display='inline-block' value={enjoy} size="xs" colorScheme={lookupColor(enjoy)} mx={scaleMx} pos='relative' top='-1px' /> */}
              <RangeSlider isDisabled={true} aria-label={["min", "max"]} defaultValue={[enjoy < 50 ? enjoy : 50, enjoy >= 50 ? enjoy: 50]} w='65%' mx={scaleMx} colorScheme={lookupRangeColor(enjoy)} >
                <RangeSliderTrack bg='#cdcdcd'>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={enjoy < 50 ? 1 : 0} bg='transparent' boxShadow='none' _disabled={thumbDisabled}>
                  <Box bg="#f3f3f3" w='3px' h='4px' />
                </RangeSliderThumb>
                <RangeSliderThumb index={enjoy >= 50 ? 0 : 1} bg='transparent' boxShadow='none' _disabled={thumbDisabled}>
                  <Box bg="#f3f3f3" w='3px' h='4px' />
                </RangeSliderThumb>
              </RangeSlider>
              😀
            </Text>
            <Text fontSize='0.8rem' lineHeight='1.3rem'>
              🎓
              {/* <Progress bg='#cdcdcd' w='65%' display='inline-block' value={theop} size="xs" colorScheme={lookupColor(theop)} mx={scaleMx} pos='relative' top='-1px' /> */}
              <RangeSlider isDisabled={true} aria-label={["min", "max"]} defaultValue={[theop < 50 ? theop : 50, theop >= 50 ? theop: 50]} w='65%' mx={scaleMx} colorScheme={lookupRangeColor(theop)} >
                <RangeSliderTrack bg='#cdcdcd'>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={theop < 50 ? 1 : 0} bg='transparent' boxShadow='none' _disabled={thumbDisabled}>
                  <Box bg="#f3f3f3" w='3px' h='4px' />
                </RangeSliderThumb>
                <RangeSliderThumb index={theop >= 50 ? 0 : 1} bg='transparent' boxShadow='none' _disabled={thumbDisabled}>
                  <Box bg="#f3f3f3" w='3px' h='4px' />
                </RangeSliderThumb>
              </RangeSlider>
              🛠️
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}