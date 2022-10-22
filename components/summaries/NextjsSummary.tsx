import { Box, Flex, Image as ChakraImage, Text } from '@chakra-ui/react'
import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js'
import { Quote } from 'components/blog/PostElements'
import { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

const types = [
  'BO',
  'CX',
  'PR',
  'UT',
  'CO'
]

const headlineFs = {
  base: '1.5rem',
  md: '1.5rem'
}

const totalFs = {
  base: '1.05rem',
  md: '1.4rem'
}

const scoresSx = {
  rowGap: '10px',
  columnGap: '10px'
}

const headerSx = {
  rowGap: '25px',
}

const br: any = {
  base: null,
  md: 'md'
}

const totalTA: any = {
  base: 'center',
  lg: 'end'
}

const totalBB: any = {
  base: '1px solid #374151',
  md: '0'
}

const totalW: any = {
  base: '83%',
  md: '300px'
}

const pb: any = {
  base: '8px',
  md: '0'
}

const glanceW: any = {
  base: '270px',
}

const bg: any = {
  base: 'white',
  md: '#f8f8f8'
}

const border: any = {
  base: null,
  md: '1px solid #e4e4e4'
}

const imgS: any = {
  base: '55px',
  md: '50px'
}

const chartW: any = {
  base: '90vw',
  md: '100%'
}

export default function NextjsAtAGlance({ scores, total }) {
  const { data, options } = useMemo(() => {
    const chartData = scores.reduce((acc, curr) => {
      const data = {}
    
      curr.results.forEach(result => {
        data[result.type] = result.total
      })
    
      types.forEach((type) => {
        if (data.hasOwnProperty(type)) {
          acc[type].push(data[type])
        } else {
          acc[type].push(null)
        }
      })
    
      return acc
     }, { BO: [], CX: [], PR: [], UT: [], CO: []  })
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    )
    
    const options = {
      plugins: {
        legend: {
          position: 'bottom' as const, // sorry TypeScript I know better
          labels: {
            boxWidth: 10
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index' as const,
        intersect: false,
      }
    }
    
    const data = {
      labels: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6', 'Stage 7', 'Stage 8', 'Stage 9', 'Stage 10'],
      datasets: [
        {
          label: 'Business Opportunity',
          data: chartData.BO,
          backgroundColor: 'rgb(22, 208, 208)',
        },
        {
          label: 'Customer Experience',
          data: chartData.CX,
          backgroundColor: 'rgb(255, 188, 74)',
        },
        {
          label: 'Productivity',
          data: chartData.PR,
          backgroundColor: 'rgb(93, 211, 98)',
        },
        {
          label: 'Utilization',
          data: chartData.UT,
          backgroundColor: 'rgb(103, 74, 167)',
        },
        {
          label: 'Costs',
          data: chartData.CO,
          backgroundColor: 'rgb(245, 119, 123)',
        },
      ],
    }

    return { data, options }
  }, [])

  return (<>
    <Flex w='100%' h='auto' direction='column' fontFamily='Inter,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif' borderRadius={br} border={border} bg={bg} px='20px' py='10px' >
      <Box id='glance' position='relative' top='-90px' as='span'></Box>
      <Text as='p' textAlign='start' fontWeight='700' lineHeight='1.05' mb='15px' w='100%' display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' sx={headerSx}>
        <ChakraImage w={imgS} h={imgS} src='/img/blog/review/glance.svg' display='inline-block' mr='15px' />
        <Text w={glanceW} fontSize={headlineFs} textTransform='uppercase'>Next.js in numbers:</Text>
        <Text w={totalW} fontSize={totalFs} textTransform='uppercase' textAlign={totalTA} pb={pb} borderBottom={totalBB} minW='308px'>Total Impact: {total.finalScore}</Text>
      </Text>
      <Flex w='100%' mt='5px' direction='row' wrap='wrap' justify='center' sx={scoresSx}>
        {types.map(type => {
          return (
            <Flex w='calc(100% / 5.5)' minW='94px' align='center' justify='center' key={type}>
              <ChakraImage w='40px' h='40px' src={`/img/blog/review/${type.toLocaleLowerCase()}-currency.svg`} />
              <Text ml='6px' fontWeight='bold'>{total[type].total}</Text>
            </Flex>
          )
        })}
      </Flex>
      <Flex w='100%'>
        <Quote bg='#f8f8f8'>
          Next.js is a no-brainer choice for any web project in 2022. It drastically improves developer productivity, while its other contributions
          are also significant, impactful benefits in their own right. There are, however, certain
          situations where it's not the optimal choice. (More details are in the Conclusions part.)
        </Quote>
      </Flex>
      <Flex w={chartW} h='250px' mx='auto'>
        <Bar options={options} data={data} />
      </Flex>
    </Flex>
  </>)
  
}