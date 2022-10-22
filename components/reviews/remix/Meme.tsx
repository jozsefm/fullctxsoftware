import { Text, Link } from '@chakra-ui/react'

const memeW: any = {
  base: 'calc(100% - 32px)',
  md: '100%'
}

const memeM: any = {
  base: '0 16px 35px 16px',
  md: '0 0 35px 0'
}

export default function Meme() {
  return (
    <Link href="https://imgflip.com/i/64gzcy" m={memeM} textAlign='center' w={memeW} display='flex' justifyContent='center'>
      <figure>
        <img src="https://i.imgflip.com/64gzcy.jpg" title="Brain before sleep meme adopted to Remix"
          alt="My brain: Was it fun to rewrite the app in Next.js? Me trying to rest in a bed: Yes, but now I have JS fatigue so shut up! My Brain: I saw an article about this new framework called Remix. Me: Eyes go suddenly wide open, I have to check it out RIGHT NOW!"
        />
        <figcaption><Text fontSize='0.8rem' mt='3px'>The JS/Frontend community in 2021 Q4</Text></figcaption>  
      </figure>
    </Link>
  )
}