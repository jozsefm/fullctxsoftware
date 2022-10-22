import { NotionPage } from 'components/notion/NotionPage'
import { footerConfig, pageIds } from 'constants/pageIds'
import { resolveNotionPage } from 'lib/notion/resolve-notion-page'
import 'react-notion-x/src/styles.css'

export async function getStaticPaths() {
  return {
    paths: Object.keys(pageIds).map((url => ({
      params: {
        page: url
      }
    }))),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { page } = context.params
  const footerData = footerConfig[page]
  
  const notionPageId = pageIds[page]
  try {
    const clientProps = await resolveNotionPage(notionPageId)
    return {
      props: {
        ...clientProps,
        footerData: footerData || null
      }
    }
  } catch (error) {
    // TODO implement handling this on the client
    console.error('Failed to fetch from Notion page data: ', page, error)
    return { props: {  error: 'page data'} }
  }
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}