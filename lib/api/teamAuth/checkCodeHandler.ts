import { deleteAuthCode } from 'lib/db/deleteAuthCode'
import { validateRequestData } from '../general'
import { getAuthCode } from 'lib/db/getAuthCode'

export const handleCheckCode = async (req, hash, logger): Promise<any> => {
  let vr, result
  vr = validateRequestData(req, logger)
  if (!vr.OK) return { status: 400, message: '098 -- Failed' }

  const { code } = vr.data

  result = await getAuthCode({ code })

  if (result.error) {
    return { status: 500, message: '098 -- Failed' }
  }

  const { owner } = result

  if (owner !== hash) {
    await logger.send({ message: 'Submitted auth code with a session not belonging to that code.', severity: 'ATTACK' })
    return { status: 500, message: '099 -- Failed' }
  }

  await deleteAuthCode({ code }) // Whether it fails or not we were successful in validating the team admin.

  try {
    req.session.set('team-auth', true)
    await req.session.save()
  } catch (error) {
    return { status: 500, message: '101 -- Failed' }
  }

  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK' }
}