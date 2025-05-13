const fs = require('fs')

fs.access('config.json', fs.constants_OK, (err) => {
  fs.writeFile(
    'config.json',
    JSON.stringify('Default msg', { id: 1 }),
    { flag: 'a' },
    (err) => {
      if (err) console.log('Json error')
    }
  )
  return
})
