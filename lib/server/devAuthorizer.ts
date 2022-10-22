import { NextApiRequest } from 'next'

export default function isAuthorized(request: NextApiRequest) {
  if (process.env.NEXT_PUBLIC_DEV !== 'false') {
    const authorizationHeader = request.headers['x-dev-authorized']
    return authorizationHeader === process.env.VALID_DEV_API_KEY  
  }
  return true
}
