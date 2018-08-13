import {
  log,
  Message,
  Wechaty,
}             from 'wechaty'

export async function onMessage (
  this    : Wechaty,
  message : Message,
): Promise<void> {
  log.info('on-message', 'onMessage(%s)', message)
}
