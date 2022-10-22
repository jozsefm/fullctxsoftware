import { useMemo, useContext } from 'react'

import { IntersectionContext } from 'contexts/IntersectionProvider'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const FilteringMotionDiv = ({ ...rest }) => <motion.div {...rest}/>

const VerticalWrapper = styled(FilteringMotionDiv)`
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
`
const HorizontalWrapper = styled(FilteringMotionDiv)`
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
`

export const RevealPath = ({
  children,
  delay = 0,
  duration = 2.5,
  easing = 'easeInOut', // [number, number, number, number] | 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'circIn' | 'circOut' | 'circInOut' | 'backIn' | 'backOut' | 'backInOut' | 'anticipate' | EasingFunction
  direction = 'vertical'
}) => {
  const { inView } = useContext(IntersectionContext)
  const variants = useMemo(
    () => {
      const transition = {
        duration,
        delay,
        ease: easing
      }

      const variant = direction === 'vertical' ? {
        hidden: {
          width: '100%',
          transition
        },
        show: {
          width: '0',
          transition
        }
      } : {
        hidden: {
          height: '100%',
          transition
        },
        show: {
          height: '0',
          transition
        }
      }

      return variant
    },
    [delay, duration, easing, direction]
  )

  return direction === 'vertical' ? (
    <VerticalWrapper
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      exit='hidden'
      variants={variants}
    >
      {children}
    </VerticalWrapper>
  ) : (
    <HorizontalWrapper
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      exit='hidden'
      variants={variants}
    >
      {children}
    </HorizontalWrapper>
  )
}