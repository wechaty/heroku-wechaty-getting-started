import {
  log,
}           from './config'

import { getWechaty } from './get-wechaty'
import { startBot }   from './start-bot'
import { startWeb }   from './start-web'

async function main () {
  log.verbose('main', 'main()')

  const name = 'heroku'
  const bot = getWechaty(name)

  await Promise.all([
    bot.start(),
    startWeb(bot),
    startBot(bot),
  ])

  while (bot.state.on()) {
    await new Promise((r) => setTimeout(r, 1000))
  }
  return 0
}

main()
.then(process.exit)
.catch((e) => {
  log.error('Main', 'main() rejection: %s', e)
  process.exit(1)
})
