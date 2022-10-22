import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { serialize } from 'php-serialize'
import { getLogger } from 'lib/server/logger'
import { confirmNewUser } from 'lib/db/confirmNewUser'
import { getUser } from 'lib/db/getUser'
import { deleteUser } from 'lib/db/deleteUser'

const notificationTypes = ['purchase', 'alert']
const allowedIps = process.env.PADDLE_DEV === 'true' ? ['34.194.127.46', '54.234.237.108', '3.208.120.145'] : ['34.232.58.13', '34.195.105.136', '34.237.3.244']
const retries = [0, 500, 1500, 2000, 3000]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const logger = getLogger({ worker: 'PADDLE' })
  const clientIp = req.headers['cf-connecting-ip'] as string

  logger.config({ clientIp, action: 'PURCHASE' })

  if (!allowedIps.includes(clientIp)) {
    await logger.send({ message: 'Non Paddle IP origin for webhook API call', severity: 'ATTACK' })
    return res.end()
  }

  const validSource = validateWebhook(req.body, logger)
  const notification = req.query.notification as string // It can be a string[] as well per official type declaration

  if (!validSource) {
    await logger.send({ message: 'Non Paddle initiated webhook API call', severity: 'ATTACK' })
    return res.end()
  }

  if (!notificationTypes.includes(notification)) {
    await logger.send({ message: 'Paddle initiated wrong webhook API call', severity: 'ATTACK' })
    return res.send(200)
  }

  if (notification === 'purchase') {
    const { checkoutHash, email, p_product_id, p_coupon, quantity } = req.body

    logger.config({
      action: notification,
      checkoutId: checkoutHash,
      coupon: p_coupon || 'none',
      productId: p_product_id,
      quantity,
      email
    })
    
    for await (let attempt of getRetries(retries)) {
      const { error } = await confirmNewUser({ confirmToken: checkoutHash })
      if (!error) {
        await logger.send({ message: `Confirmed user` })
        return res.send(200)  // we want to quit the iterator in this case, else continue
      } else {
        await logger.send({ message: `checkoutId not found in DB`, attempt })
      }
    }

    return res.send(200)
  }

  if (notification === 'alert') {
    const { alert_name, checkout_id } = req.body
    if (alert_name === 'payment_refunded') {
      logger.config({
        checkoutId: checkout_id,
        action: 'REFUND'
      })
      const { user, error } = await getUser({ checkoutId: checkout_id })
      if (error) {
        await logger.send({ message: `Failed to delete user`, severity: 'ERROR' })
      } else {
        const { error } = await deleteUser({ hash: user.hash })
        if (error) {
          await logger.send({ message: `Failed to delete user`, severity: 'ERROR' })
        } else {
          await logger.send({ message: `Deleted user`, userHash: user.hash })
        }
      }
    }
    return res.send(200)
  }
}

const publicKey = process.env.PADDLE_DEV === 'true' ? `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEArn3a7SYk/7XuAtMJij8/
bPSFe+sHXqMnEx4z3tHR+Wl50Mg4ioIb23y3lSL2Vk0Mk9w6y6unNtzNPmHt1CbB
lRyUPUDQPDR75NQxxskj1nCvd3kCP3/UZgjAgAbL5jo9gnf8KYk1zl9DxEBXZSTm
Gh1P4utSLMKrYLuWKZK1wijHxH6Fc+7bzh/Fj4lORnIWFfYTLhki11IBTNqrSfkH
yJsULszdn4BodemihPi5INOs5Cbd3oCjB0DJTnz7mkW4NXMXoSGtbTkt7lRoeqaG
cxKWfzFo1M2ijlhqh2jd1M84wkyNVDhNbebkyztMBrx2OHFMp4WtnJqnBcH0EZIJ
tJV1eUgBG0rhbATR1iGjChPihde6T26Bfp4CYPHto6T7TrA/0u0mWanBLYQREpL6
ThpeA4TFU4aDOW+MEwnpFDqsv1x1dI8yi7uEVgIsefqHcZ4YJ8J4hhgh5DCRKUSW
+Y8nuU6dSYVMoP4QxyIgaU362CS6C27bCrMK3FbYw3VxdsleZ75LqVhM6dnI23gC
gEfzs+0aR/fk9OpLAbcSDgHKhc7pES2Kg3OaPlGQl2nCRyRpiKsGLDaZ1QtcgNDO
55CobaunJojxcLGAhiNFOcJ95RyDgTad1djDbFw4Mm4it027AiWNVpA7RB7S47w9
VOXOgYNs3kZghkfIujSIdC8CAwEAAQ==
-----END PUBLIC KEY-----` : `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAr6zU5n5XAnApaL+1gdGO
86QwZrYq0sf4OmyNrRj9ATwjZOMK3cU0Mf+MmeHVO8r8OfLKdzs4pba3ExhDtF0b
qgpW0PlD+yoklu8eHnl43kFk/GS/qjh2HcKs8wvCmwANhR8SpMqarJbMt6Muhdry
1fRmv2T70uadU3MOLO/kMh8KOeCtbcss4pCL/uLhQXbLV9I6xamWmkKjC9vhgbvh
fwhCeTny3ZCgyzwW5DJJO5n3T96ynM8kXsbs5A6scbwslrIW7MaXA1tHKLcFjUDX
UDJEUZYLEj7jFU/hn3DBQScHz8s5jjcj/rEEpXvrz9xBiQYt2tdGcQ6JT4Rgj3xm
Hd+suZbtDhnJ+NM0TPlQWqDa/rIuql8qV+eHSwJuNA5uFJh6dWfU/zVHvKIHw6aG
s8ZlKXaBzAZpOXfKK4DK+ZPFBhb/WFfvncO5pCDm3+6/L66xItMphPK/HnDD+Nlh
Ugehqz5PU8KfzG2v6tVmsew+BP3ikOHY5F+kAgK7ZgpQP5BCHSYhBAuaempeV2vr
yYSdBBiNLKBLLhsIf6uLiWSmcBefFbPuQkvGLUwBO6LZFXhuLjfQLIJ1nnSnRJDe
NZmVaE97KRP++e0KNoeJhtu6wUbKegugyKQHvapEtPvwaWE8oQtHoX12q35d1Fnk
YAOzOiKzTg0ciq4BqiX1BccCAwEAAQ==
-----END PUBLIC KEY-----`

function ksort(obj){
  const keys = Object.keys(obj).sort()
  let sortedObj = {}
  for (let i in keys) {
    sortedObj[keys[i]] = obj[keys[i]]
  }
  return sortedObj
}

function validateWebhook(jsonObj, logger) {
  try {
    const paddleSignature = Buffer.from(jsonObj.p_signature, 'base64')
    delete jsonObj.p_signature
    jsonObj = ksort(jsonObj) // it's a side effect that replaces the orignial req.body
    for (let property in jsonObj) {
      if (jsonObj.hasOwnProperty(property) && (typeof jsonObj[property]) !== 'string') {
        if (Array.isArray(jsonObj[property])) {
            jsonObj[property] = jsonObj[property].toString()
        } else {
            jsonObj[property] = JSON.stringify(jsonObj[property])
        }
      }
    }
    const serialized = serialize(jsonObj)
    const verifier = crypto.createVerify('sha1')
    verifier.update(serialized)
    verifier.end()
    const verification = verifier.verify(publicKey, paddleSignature)
    return verification
  } catch (error) {
    logger.send({ message: 'Verifying Paddle Webhook thrown an error', error})
    return false
  }
}

async function* getRetries(retries) {
  for (let i = 0; i < retries.length; i++) {
    await new Promise(resolve => setTimeout(resolve, retries[i]))
    yield i + 1
  }
}