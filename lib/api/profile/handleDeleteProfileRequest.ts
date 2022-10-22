import { validateSession } from '../general'
import { deleteUser } from 'lib/db/deleteUser'
import { deleteSessions } from 'lib/db/deleteSessions'

export const handleDeleteProfileRequest = async (req, logger): Promise<any> => {
  let vr, result
  const sessionId = req.session?.get('session')
  vr = await validateSession(sessionId)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { hash } = vr

  logger.config({
    hash
  })

  result = await deleteSessions({ hash })

  if (result.error) {
    return { status: 500, message: '092 -- Database error' }
  }

  result = await deleteUser({ hash })

  if (result.error) {
    return { status: 500, message: '092 -- Database error' }
  }

  await logger.send({ message: `Success` })

  return { status: 200, message: 'OK' }
}