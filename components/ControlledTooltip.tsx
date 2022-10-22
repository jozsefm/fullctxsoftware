import { Tooltip } from '@chakra-ui/react'
import { useCallback, useState } from 'react'

export const ControlledTooltip = (props) => {
  const { children, ...restProps} = props
  const [ isTooltipOpen, setIsTooltipOpen ]: [any, any] = useState(false)
  const [timeoutId, setTimeoutId]: [any, any] = useState(0)
  
  const openTooltip = useCallback(() => {
    setIsTooltipOpen(true)
    clearTimeout(timeoutId)
    const tid = setTimeout(() => {
      setIsTooltipOpen(false)
    }, 2000)
    setTimeoutId(tid)
  }, [timeoutId])

  const closeTooltip = useCallback(() => {
    setIsTooltipOpen(false)
  }, [])

  return <Tooltip
    {...restProps}
    isOpen={isTooltipOpen}
  >
    {children(openTooltip, closeTooltip)}
  </Tooltip>
}