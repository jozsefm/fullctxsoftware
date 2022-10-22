import {
  HStack,
  Icon, Image,
  Text
} from '@chakra-ui/react';
import { IoMdEye } from 'react-icons/io';

interface BlogAuthorProps {
  date: Date;
  name: string;
  svg: string;
  views: number;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  const imgDataUri = `data:image/svg+xml;base64,${props.svg}`
  return (
    <HStack marginTop='2' spacing='2' display='flex' alignItems='center' flexWrap='wrap'>
      <Image
        borderRadius='full'
        boxSize='40px'
        src='/img/joe2.jpg'
        fallbackSrc={imgDataUri}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight='medium'>{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
      <Text lineHeight='0.5rem'><Icon fontSize='1.2rem' opacity='0.7' as={IoMdEye}/></Text>
      <Text>Views:</Text>
      {props.views > 0.99999 ? <Text>{props.views}k</Text> : <Text> &lt; 1k</Text>}
    </HStack>
  );
};