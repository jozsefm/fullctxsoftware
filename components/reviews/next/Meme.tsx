import { Text, Link } from '@chakra-ui/react'

const memeW: any = {
  base: 'calc(100% - 32px)',
  md: '100%'
}

const memeM: any = {
  base: '0 16px 35px 16px',
  md: '0 0 40px 0'
}

export default function Meme() {
  return (
    // <Link href="https://imgflip.com/i/69xf10" m={memeM} textAlign='center' w={memeW} display='flex' justifyContent='center'>
    //   <figure>
    //     <img src="https://i.imgflip.com/69xf10.jpg" title="made at imgflip.com"/>
    //     <figcaption>
    //       <Text fontSize='0.8rem' mt='3px'>Old news in 2022...</Text>
    //     </figcaption>
    //   </figure>
    // </Link>
    // <Link href="https://imgflip.com/i/69xdl6" m={memeM} textAlign='center' w={memeW} display='flex' justifyContent='center'>
    //   <figure>
    //     <img src="https://i.imgflip.com/69xdl6.jpg" title="made at imgflip.com"/>
    //     <figcaption>
    //       <Text fontSize='0.8rem' mt='3px'>Old news in 2022...</Text>
    //     </figcaption>
    //   </figure>
    // </Link>
    // <Link href="https://imgflip.com/i/69ylb4" m={memeM} textAlign='center' w={memeW} display='flex' justifyContent='center'>
    //   <figure>
    //     <img src="https://i.imgflip.com/69ylb4.jpg" title="made at imgflip.com"/>
    //     <figcaption>
    //       <Text fontSize='0.8rem' mt='3px'>Old news in 2022...</Text>
    //     </figcaption>
    //   </figure>
    // </Link>
    <Link href="https://imgflip.com/i/6auwux" m={memeM} textAlign='center' w={memeW} display='flex' justifyContent='center' target='_blank'>
      <figure>
        <img src="https://i.imgflip.com/6auwux.jpg" title="One does not simply write React apps anymore"/>
        <figcaption>
          <Text fontSize='0.8rem' mt='3px'>Old news in 2022...</Text>
        </figcaption>
      </figure>
    </Link>
  )
}