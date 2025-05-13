const fs = require('fs')

async function read5Bytes() {
  try {
    let fd = await fs.promises.open('trial.txt', 'r') // fixed: added await and quotes

    // Create buffer to store data
    const buffer = Buffer.alloc(5) // 5 bytes

    // Read first 5 bytes
    const { bytesRead } = await fd.read(buffer, 0, 5, 0)
    console.log('Read', bytesRead, 'bytes:', buffer.toString())

    // Close the file descriptor
    await fd.close()
  } catch (err) {
    console.log('error')
  }
}
read5Bytes()
