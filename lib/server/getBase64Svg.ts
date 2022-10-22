import fs from 'fs'
import { join } from 'path'

export function getBase64Svg(path) {
  const svgFile = join(process.cwd(), path)
  let svg = ''
  try {
    const fileContents = fs.readFileSync(svgFile, { encoding:'utf8' })
    const buffer = Buffer.from(fileContents, 'utf-8')
    svg = buffer.toString('base64')
  } catch (err) {
    console.log(err)
  }
  return svg
}