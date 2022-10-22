// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession, Session } from 'next-iron-session';
import { NextApiRequest, NextApiResponse } from 'next'

type WithSession<T> = T & {session?: Session}
type HandlerWithSession = (req: WithSession<NextApiRequest>, res: WithSession<NextApiResponse>) => Promise<void | NextApiResponse<any>>
type SSRHandlerParam = { req: WithSession<NextApiRequest>, res: WithSession<NextApiResponse> }
export type SSRHandlerWithSession = (props: SSRHandlerParam) => Promise<{props: any}>
export default function withSession(handler: HandlerWithSession | SSRHandlerWithSession) : HandlerWithSession | SSRHandlerWithSession {
  return withIronSession(handler, {
    password: process.env.IRON_COOKIE_PASSWORD,
    cookieName: 'metal-session',
    cookieOptions: {
      // the next line allows to use the session in non-https environements like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production',
      sameSite: true,
      maxAge: 1209600, // 14 days
    },
  });
}