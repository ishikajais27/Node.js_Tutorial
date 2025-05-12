//file streams used to read large files it break files into small chunks and read it used in video processing,large files
const fs = require('fs')
//first create a large file using stream method
const read = fs.createReadStream('Intro.js')
read.on('data', (chunk) => {
  console.log('Received chunk of size:', chunk.length)
})
read.on('end', () => {
  console.log('Finished reading file')
})

read.on('error', (err) => {
  console.error('Error:', err.message)
})
//therefore three methods data,end,error data for reading file and reading is finished then we start end method and if any error occurs then error method

//NOW HOW TO WRITE LARGE FILE

const writeStream = fs.WriteStream('Intro.js', { flags: 'a' })
writeStream.write('Anything you want to write')
writeStream.end() // Close the stream

writeStream.on('finish', () => {
  console.log('Write completed')
})

writeStream.on('error', (err) => {
  console.error('Write error:', err.message)
})

//PIPING CONCEPT(READ->WRITE)
const readStream = fs.createReadStream('Intro.js')
const writeStreams = fs.createWriteStream('copy.js')

readStream.pipe(writeStreams)

writeStreams.on('finish', () => {
  console.log('File copied!')
})
