//Create a directory structure projects/nodejs/src using recursive: true.
const fs = require('fs')
fs.mkdir('f1/f2/f3', { recursive: true }, (err) => {
  if (err) console.log('error', err)
  else console.log('Directory created!')
})
