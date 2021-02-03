import {
  Wechaty,
}                   from 'wechaty'

import {
  log,
}               from './config'

export async function startBot (wechaty: Wechaty): Promise<void> {
  log.verbose('startBot', 'startBot(%s)', wechaty)

  wechaty
    .on('scan',         require('./handlers/on-scan'))
    .on('error',        require('./handlers/on-error'))
    .on('friendship',   require('./handlers/on-friendship'))
    .on('logout',       require('./handlers/on-logout'))
    .on('login',        require('./handlers/on-login'))
    .on('message',      require('./handlers/on-message'))
    .on('room-topic',   require('./handlers/on-room-topic'))
    .on('room-invite',  require('./handlers/on-room-invite'))
    .on('room-join',    require('./handlers/on-room-join'))
    .on('room-leave',   require('./handlers/on-room-leave'))
}
