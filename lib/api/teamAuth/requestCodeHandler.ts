import { sendAuthCode } from 'lib/server/sendEmail'
import { getUser } from 'lib/db/getUser'
import { createAuthCode } from 'lib/db/createAuthCode'
import { deleteAuthCode } from 'lib/db/deleteAuthCode'

export const handleRequestCode = async (hash, logger): Promise<any> => {
  let result

  result = await getUser({ hash, info: true })

  if (result.error) {
    return { status: 500, message: '097 -- Failed' }
  }

  const { user } = result

  result = await createAuthCode({ hash })

  if (result.error) {
    return { status: 500, message: '097 -- Failed' }
  }

  const { authCode } = result
  
  try {
    await sendAuthCode(user.email, authCode.token)
  } catch (error) {
    const res = await deleteAuthCode({ code: authCode.token })
    if (res.error) {
      await logger.send({ message: `Failed to roll back auth code that couldn't be delivered`, severity: 'FATAL'})
    }
    return { status: 500, message: '097 -- Failed' }
  }

  await logger.send({ message: `Success` })
  return { status: 200, message: 'OK' }
}