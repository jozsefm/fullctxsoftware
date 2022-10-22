import { useRef, useCallback } from 'react'
 
function useClickOutside(handler, selector) {
  const targetRef = useRef(null)
  const toggleRef = useRef(null)
 
  const handleClickOutside = (event) => {
    let contains = targetRef.current && targetRef.current.contains(event.target)
    contains = contains || toggleRef.current && toggleRef.current.contains(event.target)
    handler(contains)
  }
 
  const setup = useCallback(() => {
    const root = document.querySelector(selector)
    root.addEventListener('mousedown', handleClickOutside, true)
    root.addEventListener('touchstart', handleClickOutside, true)

    return () => {
      root.removeEventListener('mousedown', handleClickOutside, true)
      root.removeEventListener('touchstart', handleClickOutside, true)
    }
  }, [])
 
  return { targetRef, toggleRef, setup }
}
 
export default useClickOutside