import { useCallback, useEffect, useMemo, useState } from "react"

export function usePagination(collection) {
  const [currentPage, setCurrentPage] = useState(0)

  const onPrevPage = useCallback(() => {
    setCurrentPage(currentPage - 1)
  }, [currentPage])
  
  const onNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1)
  }, [currentPage])

  // this is the real number of possuble pages not a 0-based index, so we need to compensate for that elsewhere
  const maxPage = useMemo(() => Math.floor(collection.length / 5) + (collection.length % 5 ? 1 : 0), [collection])

  useEffect(() => {
    // don't do it on the first page (index 0)
    if (currentPage && (currentPage + 1) > maxPage) {
      setCurrentPage(maxPage - 1)
    }
  }, [maxPage, currentPage])

  const returnValues: [number, number, () => void, () => void] = [currentPage, maxPage, onPrevPage, onNextPage]

  return returnValues
}