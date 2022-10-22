let cache = new Map()

export const setCacheEntry = (key, cachedValue) => {
  cache.set(key, { cachedValue })
}

export const getCacheEntry = (key) => {
  return cache.get(key) || {} // initial value is undefined so the destructoring would die on that.
}

export const markForInvalidation = (key) => {
  const cachedValue = cache.get(key).cachedValue
  cache.set(key, { cachedValue, invalidate: true })
}

export const clearInvalidationMark = (key) => {
  const cachedValue = cache.get(key).cachedValue
  cache.set(key, { cachedValue, invalidate: false })
}

if (process.browser) {
  window.addEventListener('logout', () => {
    cache.clear()
  })
}