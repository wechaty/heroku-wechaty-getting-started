import {
  log,
  Wechaty,
}             from 'wechaty'

async function onError (
  this : Wechaty,
  e    : Error,
): Promise<void> {
  log.error('on-error', 'onError(%s)', e)
}

export default onError
