import { validateSession } from '../general'
import { getUser } from 'lib/db/getUser'
import { updateUser } from 'lib/db/updateUser'
import { deleteUpdateToken } from 'lib/db/deleteUpdateToken'

export const handleCancelEmailChangeRequest = async (req, logger): Promise<any> => {
  let vr, result //validation result
  const sessionId = req.session?.get('session')
  vr = await validateSession(sessionId)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { hash } = vr

  logger.config({
    hash
  })

  result = await getUser({ hash, info: true })

  if (result.error) {
    return { status: 500, message: '079 -- Database error' }
  }

  const { user } = result

  if (!user) {
    await logger.send({ message: `Tried the operation on non existent user`, severity: 'ATTACK' })
    return { status: 403, message: 'Stop right there, criminal scum!' }
  }

  result = await updateUser({ hash, update: { updateToken: null } })
  
  if (result.error) {
    return { status: 500, message: '079 -- Database error' }
  }

  result = await deleteUpdateToken({ token: user.updateToken })

  if (result.error) {
    return { status: 500, message: '079 -- Database error' }
  }

  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK'}
}