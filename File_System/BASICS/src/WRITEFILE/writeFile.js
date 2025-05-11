const fs = require('fs')

// Strings
fs.writeFile(
  'write.txt',
  'Simple text',
  { flag: 'a', encoding: 'utf8' },
  (err) => {
    if (err) console.log('string error')
  }
)

// Buffers
const buffer = Buffer.from('Binary data')
fs.writeFile('write.bin', buffer, { flag: 'a' }, (err) => {
  if (err) console.log('buffer error')
})

// JSON
fs.writeFile('write.json', JSON.stringify({ id: 1 }), { flag: 'a' }, (err) => {
  if (err) console.log('Json error')
})

// FLAGS IN NODE.JS
// fs.writeFile(
//   'write.txt',
//   'data',
//   {
//     flag: 'a', // Default: overwrite
//     // 'a' = append
//     // 'wx' = write if file exists
//     // 'ax' = append if file exists
//   },
// )
