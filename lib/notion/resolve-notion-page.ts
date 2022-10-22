import { ExtendedRecordMap } from 'notion-types'

import * as acl from './acl'
import { getPage } from './notion'

export async function resolveNotionPage(pageId: string) {
  let recordMap: ExtendedRecordMap = await getPage(pageId)

  const props = { recordMap, pageId }
  return { ...props, ...(await acl.pageAcl(props)) }
}