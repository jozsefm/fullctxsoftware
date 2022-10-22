export const storeLoginStatus = (status) => {
  if (status !== 'keep') {
    if (status) {
      window.localStorage.setItem('loggedIn', 'true')
    } else {
      window.localStorage.removeItem('loggedIn')
    }
  }
}

export const getStoredLoginStatus = () => {
  return window.localStorage.getItem('loggedIn') === 'true'
}

export const setupLoginTracking = (callback) => {
  window.addEventListener('storage', (event) => {
    if (event.storageArea !== localStorage) return
    if (event.key === 'loggedIn') {
      const status = event.newValue === 'true'
      callback({ loggedIn: status })
    }
  })
}

export const storeHash = (hash) => {
  window.localStorage.setItem('ruaD', hash)
}

export const getHash = () => {
  return window.localStorage.getItem('ruaD')
}

export const deleteHash = () => {
  return window.localStorage.removeItem('ruaD')
}

export const getLocalDarkMode = () => window.localStorage.getItem('darkMode')