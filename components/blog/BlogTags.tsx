import {
  Tag,
} from '@chakra-ui/react'
import { FlexGrid } from 'components/FlexGrid'

interface IBlogTags {
  tags: Array<string>
  justify?: null | string
  alt?: boolean
  emphasis?: boolean
}

export const BlogTags: React.FC<IBlogTags> = ({tags, justify = 'flex-start', alt, emphasis}) => {
  return (
    <FlexGrid maxW='90%' gap='10' justify={justify}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant={alt ? 'outline' : 'solid'} colorScheme='blue' key={tag} bg={emphasis ? '#00000099' : null}>
            {tag}
          </Tag>
        )
      })}
    </FlexGrid>
  )
}