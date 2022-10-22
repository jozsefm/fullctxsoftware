export const trimSemis = (str: string) => {
  if (str?.length) {
    if (str[str.length - 1] === ';') {
      str = str.slice(0, -1)
    }
    if (str[0] === ';') {
      str = str.slice(1, -1)
    }
  }
  return str
}

export const getEmailList = ref => {
  let emails = ref.current?.value?.replace(/\s+/g, '')
  
  return trimSemis(emails)?.split(';')
}

export const getDuplicatedAddresses = emails => {
  return Object.entries(
    emails.reduce((acc, email) => {
      if (acc.hasOwnProperty(email)) {
        acc[email] = true
      } else {
        acc[email] = false
      }
      return acc
    }, {})
  ).reduce((acc, [email, duplicated]) => {
    if (duplicated) {
      acc.push(email)
    }
    return acc
  }, [])
}