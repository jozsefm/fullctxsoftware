import { useCallback, useEffect, useRef, useState } from 'react'

export function useScrollTracking() {
  const scrollDate = useRef(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const trackScrollEnd = useCallback(() => {
    setIsScrolling(true)
    scrollDate.current = Date.now()

    setTimeout(() => {
      if (Date.now() - scrollDate.current >= 200) {
        setIsScrolling(false)
      }
    }, 200)
  }, [scrollDate])

  useEffect(() => {
    window.addEventListener('scroll', trackScrollEnd, { passive: true })
    return () => {
      window.removeEventListener('scroll', trackScrollEnd)
    }
  }, [trackScrollEnd])

  return { isScrolling }

}