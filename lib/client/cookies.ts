import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'
import { getDeviceId } from './browserFingerprint'

export default async function setCookies() {
  const sessionId = Cookies.get('fcd-session-id')
  if (!sessionId) {
    Cookies.set('fcd-session-id', uuidv4(), { sameSite: 'strict', path: '/api', secure: process?.env?.NEXT_PUBLIC_DEV === 'false' })
  }

  const deviceId = Cookies.get('fcd-device-id')
  if (!deviceId) {
    const deviceId = await getDeviceId()
    Cookies.set('fcd-device-id', deviceId, { sameSite: 'strict', path: '/api', secure: process?.env?.NEXT_PUBLIC_DEV === 'false' })
  }
}