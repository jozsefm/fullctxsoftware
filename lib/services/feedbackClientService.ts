export const sendRating = async ({ rating, chapter }): Promise<any> => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        rating, chapter
      }) 
    }

    if (process.env.NEXT_PUBLIC_DEV !== 'false') {
      options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
    }

    fetch(`/api/feedback/rating`, options)

  } catch (error) {
    console.error(error)
  }
}

export const sendAnswer = async ({ question, answer }): Promise<any> => {
  if (answer?.length && answer.length > 3 && answer.length <= 1500) {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          question, answer
        }) 
      }
  
      if (process.env.NEXT_PUBLIC_DEV !== 'false') {
        options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
      }
  
      fetch(`/api/feedback/answer`, options)
  
    } catch (error) {
      console.error(error)
    }
  }
}

export const sendMessage = async ({ chapter, message }): Promise<any> => {
  if (message?.length && message.length >= 10 && message.length <= 500) {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          chapter,
          message
        }) 
      }
  
      if (process.env.NEXT_PUBLIC_DEV !== 'false') {
        options['headers'] = { 'x-dev-authorized': process.env.NEXT_PUBLIC_DEV_API_KEY }
      }
  
      fetch(`/api/feedback/message`, options)
  
    } catch (error) {
      console.error(error)
    }
  }
}