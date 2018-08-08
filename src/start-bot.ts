import {
  Contact,
  Message,
  Wechaty,
}               from 'wechaty'

import {
  log,
  VERSION,
}               from './config'

function onScan (qrcode: string, status: number) {
  // Generate a QR Code online via
  // http://goqr.me/api/doc/create-qr-code/
  const qrcodeImageUrl = [
    'https://api.qrserver.com/v1/create-qr-code/?data=',
    encodeURIComponent(qrcode),
  ].join('')

  log.info('startBot', `onScan() [${status}] ${qrcodeImageUrl}\nScan QR Code above to log in: `)
}

async function onLogin (user: Contact): Promise<void> {
  const msg = `${user.name()} Heroku Wechaty Getting Started v@${VERSION} logined`
  log.info('startBot', 'onLogin(%s) %s', user, msg)
  await user.say(msg)
}

function onLogout (user: Contact) {
  log.info('startBot', `onLogout(%s)`, user)
}

function onError (e: Error) {
  log.error('startBot', 'onError(%s)', e)
}

async function onMessage (msg: Message): Promise<void> {
  log.info('startBot', 'onMessage(%s)', msg)
}

export async function startBot (wechaty: Wechaty): Promise<void> {
  log.verbose('startBot', 'startBot(%s)', wechaty)

  wechaty
  .on('scan', onScan)
  .on('logout', onLogout)
  .on('error', onError)
  .on('login', onLogin)
  .on('message', onMessage)
}
