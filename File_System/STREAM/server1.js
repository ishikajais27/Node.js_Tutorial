const fs = require('fs')
const { Readable } = require('stream')
const zlib = require('zlib')
//we read large file using readableStream, write into large files using writableFile and when we want to copy content from readable to writable we use pipe method
//and in Stream we handle errors using .on

// Create a readable stream with dynamic content
const readableStream = Readable.from(['This is dynamically generated text.\n'])
// const readableStream = fs.createReadStream('input.txt') //to read the large file after creating file
readableStream.on('error', (err) => {
  console.log('Error occur in reading file')
})
const writableStream = fs.createWriteStream('output.txt')
writableStream.on('error', (err) => {
  console.log('Error occur in writing the file')
})

readableStream.pipe(writableStream)

writableStream.on('finish', () => {
  console.log('File copied successfully!')
})

// Create a compression stream
const gzip = zlib.createGzip() //to compress large file we use zllib module
const writableStream2 = fs.createWriteStream('output2.txt.gz') //and .gz extention
readableStream.pipe(gzip).pipe(writableStream2)
writableStream.on('finish', () => console.log('File successfully compressed!'))
