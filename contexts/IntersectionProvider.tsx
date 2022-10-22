import { createContext, useRef, useEffect, useState } from 'react'
import { useIntersection } from 'react-use'
import { Flex } from '@chakra-ui/react'

export const IntersectionContext = createContext({ inView: true })

export const IntersectionObserver = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
  ...restProps
}) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0
  })

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <Flex {...restProps} ref={intersectionRef}>{children}</Flex>
    </IntersectionContext.Provider>
  )
}