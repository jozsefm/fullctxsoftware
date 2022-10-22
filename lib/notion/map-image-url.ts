import { imgIds } from 'constants/imageIds'
import { Block } from 'notion-types'

export const mapNotionImageUrl = (url: string, block: Block, pageId: string) => {
  // console.log(pageId, url)
  
  if (!url) {
    return null
  }

  const pageImages = imgIds[pageId]
  if (pageImages) {
    const originalImageNames = Object.keys(pageImages)
    const originalImage = originalImageNames.filter((name) => url.includes(name))
    // console.log(pageImages[originalImage])
    return pageImages[originalImage]
  }

  if (url.startsWith('data:')) {
    return url
  }

  if (url.includes('unsplash.com')) {
    return url
  }

  return null
}