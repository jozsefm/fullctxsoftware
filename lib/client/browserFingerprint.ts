import FingerprintJS from '@fingerprintjs/fingerprintjs'

let fpPromise
if (process.browser) {
  fpPromise = FingerprintJS.load()
}

export async function getDeviceId () {
  const fp = await fpPromise
  const result = await fp.get()

  return result.visitorId
}