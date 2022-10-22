export async function sendLog({ worker, message, action, error, severity, ...rest }: any) {
  if (process.env.NEXT_PUBLIC_DEV !== 'false') {
    console.log(`log: ${message} - in: ${worker} API${action ? ', action: ' + action : ''}${error ? '. Error: ' + (JSON.stringify(Boolean(error.stack) ? error.stack : error)) : ''}`)
  }

  let log: any = {
    message,
    service: worker,
    timestamp: Date.now(),
    hostname: process.env.NEXT_PUBLIC_DEV === 'false' ? 'https://www.fullcontextdevelopment.com' : process.env.VERCEL_URL,
  }

  let attributes: any = {
    ...rest
  }

  if (error) {
    attributes.error = error.message
    log.logtype = 'ERROR',
    attributes.stack = error.stack?.slice(0, 300)
  }

  // severity might be manually set to something other than ERROR, even if there was an error so we need to apply the override.
  if (severity) {
    log.logtype = severity
  }


  if (action) {
    attributes.action = action
  }
  
  log = {
    ...log,
    attributes
  }

  return fetch(`https://log-api.eu.newrelic.com/log/v1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': process.env.NEW_RELIC,
    },
    body: JSON.stringify(log)
  })
}

let sessionLogger

export function getLogger(config) {
  let _config = { ...config }

  const logger = {
    send: params => {
      return sendLog({
        ..._config,
        ...params
      })
    },
    config: newConfig => {
      _config = {
        ..._config,
        ...newConfig
      }
    },
  }

  sessionLogger = logger

  return logger
}

// Used to tap into the current logger object during a serverless function execution (there shouldn't be more than one ATM)
// aways from the site of initializing the logger.
export function pushLog(log) {
  return sessionLogger.send(log)
}