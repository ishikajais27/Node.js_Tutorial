// A file descriptor is a unique number assigned by the operating system to identify an open file.
// Think of it as a "handle" or "reference" to work with files at a low level.

const fs = require('fs').promises

async function openFile() {
  try {
    // Open file and get descriptor
    const fd = await fs.open('trial.txt', 'w') // 'r' = read mode,w- write, a- append, r+ - read and write
    console.log('File descriptor:', fd.fd)
    await fd.write('New log entry\n')
    // Always close the descriptor!
    await fd.close()
  } catch (err) {
    console.error('Error:', err)
  }
}
openFile()
