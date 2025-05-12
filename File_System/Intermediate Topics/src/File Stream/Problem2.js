// Compress a file using streams + zlib (GZIP).
const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('Intro.js')
const writeStream = fs.createWriteStream('copy.js.gz')
const gzip = zlib.createGzip()

readStream.pipe(gzip).pipe(writeStream)
