import { ExtendedRecordMap } from 'notion-types'
import { getCanonicalPageId } from './get-canonical-page-id'

// include UUIDs in page URLs during local development but not in production
// (they're nice for debugging and speed up local dev)
// const uuid = !!includeNotionIdInUrls
const uuid = false

export const mapPageUrl = (
  recordMap: ExtendedRecordMap,
  searchParams: URLSearchParams
) => (pageId = '') => {
  return createUrl(
    `/${getCanonicalPageId(pageId, recordMap, { uuid })}`,
    searchParams
  )
}

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}