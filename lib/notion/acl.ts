import { PageProps } from './types'

export async function pageAcl({
  recordMap,
  pageId
}: PageProps): Promise<PageProps> {
  if (!recordMap) {
    return {
      error: {
        statusCode: 404,
        message: `Unable to resolve notion page "${pageId} - page not found".`
      }
    }
  }

  const keys = Object.keys(recordMap.block)
  const rootKey = keys[0]

  if (!rootKey) {
    return {
      error: {
        statusCode: 404,
        message: `Unable to resolve notion page "${pageId} - invalid data".`
      }
    }
  }
}