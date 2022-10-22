import cs from 'classnames'
import { ContinueReading } from 'components/Continue'
import Head from 'components/Head'
import * as config from 'lib/notion/config'
import { mapNotionImageUrl } from 'lib/notion/map-image-url'
import { mapPageUrl } from 'lib/notion/map-page-url'
import * as types from 'lib/notion/types'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getBlockTitle } from 'notion-utils'
import { useCallback } from 'react'
import { NotionRenderer } from 'react-notion-x' // core notion renderer
import { useSearchParam } from 'react-use'
import { Footer } from './Footer'
import styles from './styles.module.css'

const Collection = dynamic(() =>
  import('react-notion-x').then((notion) => notion.Collection),
  {
    ssr: true
  }
)

const CollectionRow = dynamic(
  () => import('react-notion-x').then((notion) => notion.CollectionRow),
  {
    ssr: true
  }
)

export const NotionPage: React.FC<types.PageProps> = ({
  recordMap,
  pageId,
  footerData,
  darkMode,
  locked,
  loggedIn
}) => {
  if (locked) {
    return <ContinueReading />
  }
  const lite = useSearchParam('lite')

  const params: any = {}
  if (lite) params.lite = lite

  const searchParams = new URLSearchParams(params)

  const mapImages = useCallback((url, block) => mapNotionImageUrl(url, block, pageId), [pageId])

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  // to enable redirecting on not found pages otherwise it throws an error and dies here
  if (!block || !recordMap) {
    return null
  }

  const title = getBlockTitle(block, recordMap)

  if (!config.isServer && config.isDev) {
    // add important objects to the window global for easy debugging
    const g = window as any
    g.pageId = pageId
    g.recordMap = recordMap
    g.block = block
  }

  const siteMapPageUrl = mapPageUrl(recordMap, searchParams)

  return (
    <>
      <Head title={`${title} • Full Context Development`}/>

      <NotionRenderer
        bodyClassName={cs(
          styles.notion
        )}
        components={{
          pageLink: ({
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...props
          }) => (
            <Link
              href={href}
              as={as}
              passHref={passHref}
              prefetch={prefetch}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              locale={locale}
            >
              <a {...props} />
            </Link>
          ),
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        recordMap={recordMap}
        fullPage={true}
        darkMode={darkMode}
        previewImages={false}
        showCollectionViewDropdown={true}
        showTableOfContents={false}
        defaultPageIcon={config.defaultPageIcon}
        defaultPageCover={config.defaultPageCover}
        defaultPageCoverPosition={config.defaultPageCoverPosition}
        mapPageUrl={siteMapPageUrl}
        mapImageUrl={mapImages}
        footer={
          <Footer
            navigation={footerData}
            loggedIn={loggedIn}
          />
        }
      />
    </>
  )
}