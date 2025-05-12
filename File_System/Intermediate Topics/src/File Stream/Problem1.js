// Count lines in a 10GB log file without loading it into memory.
const fs = require('fs')
let lineCount = 0
const readS = fs.ReadStream('Intro.js')
readS.on('data', (chunk) => {
  //   const data = chunk.toString()
  //   console.log(data)
  lineCount += (chunk.match(/\n/g) || []).length
  console.log(lineCount)
})
readS.on('end', () => {
  console.log('Finished reading')
})
readS.on('error', (err) => {
  console.log('Some error occurs')
})
