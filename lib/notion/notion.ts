import CH3 from 'constants/chapters/078b9347b1304012b2bd5a8f9198303c.json'
import intro from 'constants/chapters/1a63fef98bc4444aa459fe6df372d688.json'
import CH2 from 'constants/chapters/2585cd41d3ea4ce8a6a78ac63d77ffe4.json'
import GD4 from 'constants/chapters/2e4b059bdee54a8bbf84c4d4df3c93ed.json'
import CH5 from 'constants/chapters/33104890dead4798bf3f78f1c31e3032.json'
import CH7 from 'constants/chapters/44cf4641cfc346d0ae97270454bffc44.json'
import CH1 from 'constants/chapters/5f70e858fa7e490d885279012987ab8c.json'
import GD3 from 'constants/chapters/6d0b2bc40c6e45d09c13a20e1ef62914.json'
import CH13 from 'constants/chapters/7e904bcbeb1a47dc8edf02458b2142a4.json'
import CH9 from 'constants/chapters/7eb325a04f8d4817b2ca03ab38e969d3.json'
import GD2 from 'constants/chapters/972d1bbf471e4e0fb6d9fa823b46fe44.json'
import GD1 from 'constants/chapters/b971436bb0bb453f969a48eff20b2e76.json'
import CH4 from 'constants/chapters/d35f4876dd914f4088c3d92334486b53.json'
import CH8 from 'constants/chapters/db1b8aff4e9942f2911768220d3ade2c.json'
import CH11 from 'constants/chapters/eed4388fab1e4f6fb45ba1f2a189db08.json'
import CH12 from 'constants/chapters/f160f10038d8445a94be2e2fd7fb8876.json'
import CH6 from 'constants/chapters/f1e5a67f96dd4f089b49f689caa8012a.json'
import CH10 from 'constants/chapters/fc726e9aad7c464cab0334586e2ad93a.json'
import { cxTable } from 'constants/notionCollectionViewData/CX'
import fs from 'fs'
import { getLogger } from 'lib/server/logger'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'

export const notion = new NotionAPI({
  authToken: process.env.NOTION_AUTH_TOKEN
})

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  if (pageId === '1a63fef98bc4444aa459fe6df372d688') {
    // @ts-ignore
    return intro
  }
  if (pageId === '5f70e858fa7e490d885279012987ab8c') {
    // @ts-ignore
    return CH1
  }
  if (pageId === '2585cd41d3ea4ce8a6a78ac63d77ffe4') {
    // @ts-ignore
    return CH2
  }
  if (pageId === '078b9347b1304012b2bd5a8f9198303c') {
    // @ts-ignore
    return CH3
  }
  if (pageId === 'd35f4876dd914f4088c3d92334486b53') {
    // @ts-ignore
    return CH4
  }
  if (pageId === '33104890dead4798bf3f78f1c31e3032') {
    // @ts-ignore
    return CH5
  }
  if (pageId === 'f1e5a67f96dd4f089b49f689caa8012a') {
    // recordMap.collection_view[collectionViewId]
    CH6.collection_view['9424399c-212f-4a0f-9a8e-6ff13a611b58'] = cxTable
    // @ts-ignore
    return CH6
  }
  if (pageId === '44cf4641cfc346d0ae97270454bffc44') {
    // @ts-ignore
    return CH7
  }
  if (pageId === 'db1b8aff4e9942f2911768220d3ade2c') {
    // @ts-ignore
    return CH8
  }
  if (pageId === '7eb325a04f8d4817b2ca03ab38e969d3') {
    // @ts-ignore
    return CH9
  }
  if (pageId === 'fc726e9aad7c464cab0334586e2ad93a') {
    // @ts-ignore
    return CH10
  }
  if (pageId === 'eed4388fab1e4f6fb45ba1f2a189db08') {
    // @ts-ignore
    return CH11
  }
  if (pageId === 'f160f10038d8445a94be2e2fd7fb8876') {
    // @ts-ignore
    return CH12
  }
  if (pageId === '7e904bcbeb1a47dc8edf02458b2142a4') {
    // @ts-ignore
    return CH13
  }
  if (pageId === 'b971436bb0bb453f969a48eff20b2e76') {
    // @ts-ignore
    return GD1
  }
  if (pageId === '972d1bbf471e4e0fb6d9fa823b46fe44') {
    // @ts-ignore
    return GD2
  }
  if (pageId === '6d0b2bc40c6e45d09c13a20e1ef62914') {
    // @ts-ignore
    return GD3
  }
  if (pageId === '2e4b059bdee54a8bbf84c4d4df3c93ed') {
    // @ts-ignore
    return GD4
  }

  const logger = getLogger({ worker: 'NOTION', action: 'fetch-from-notion' })

  let recordMap = await notion.getPage(pageId)

  await logger.send({ message: 'Loaded directly from Notion', pageId, severity: 'FATAL' })

  fs.writeFileSync(`${pageId}.json`, JSON.stringify(recordMap))

  return recordMap
}