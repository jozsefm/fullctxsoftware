export const getServerFingerprint = (headers) => {
  const ip = headers['cf-connecting-ip'] || ''
  const userAgent = headers['user-agent'] || ''
  const accept = headers['accept'] || ''
  const acceptEncoding = headers['accept-encoding'] || ''
  const acceptLanguage = headers['accept-language'] || ''

  const SsFp = ip + userAgent + accept + acceptEncoding + acceptLanguage
  return SsFp.replace(/\s/g, '')
}