import { validateRequestData, validateName, validateSession } from '../general'
import { updateName } from 'lib/db/updateName'

export const handleUpdateUserNameRequest = async (req, logger): Promise<any> => {
  let vr //validation result
  const sessionId = req.session?.get('session')
  vr = await validateSession(sessionId)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { hash } = vr

  logger.config({
    hash
  })

  vr = validateRequestData(req, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { data } = vr
  const name = data.name

  vr = validateName(name, logger)
  if (!vr.OK) return { status: vr.status, message: vr.message }

  const { error } = await updateName({ hash, name })
  if (error) {
    return { status: 500, message: '079 -- Database error' }
  } 

  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK'}
}