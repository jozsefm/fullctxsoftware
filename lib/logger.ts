const type = 'event'
export function sendLog({ worker, message, action, error, ...rest }: any) {
  console.log(`log: ${message} - in: ${worker} API${action ? ', action: ' + action : ''}${error ? '. Error: ' + (Boolean(error.stack) ? error.stack : error) : ''}`)
  
  let log: any = {
    message,
    worker,
    '@timestamp': new Date(Date.now()).toISOString()
  }

  if (error) {
    log.error = error.message
    log.severity = 'ERROR',
    log.stack = error.stack?.slice(0, 300)
  }

  if (action) {
    log.action = action
  }

  // important to do it here as a last step, as for example severity might be manually set to something other than ERROR
  // even if there was an error so we need to apply the override.
  log = {
    ...log,
    ...rest
  }

  return fetch(`https://logsene-receiver.eu.sematext.com:443/${process.env.SEMATEXT_LOG}/${type}`, {
    method: 'POST',
    body: JSON.stringify(log)
  })
}

export function getLogger(config) {
  let _config = { ...config }

  const logger = {
    send: params => {
      try {
        return sendLog({
          ..._config,
          ...params
        })
      } catch (e) {
        // TODO maybe let me know somehow
        console.error('logging failed with: ', e)
      }
    },
    config: newConfig => {
      _config = {
        ..._config,
        ...newConfig
      }
    }
  }

  return logger
}