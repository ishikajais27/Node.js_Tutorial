//Ways to delete file async(unlink),sync(unlinkSync),promises (async function)
// Error Codes
// ENOENT: File doesn't exist
// EPERM: Permission denied
// EBUSY: File is in use
const fs = require('fs')

//async way to delete->
fs.unlink('trial.txt', (err) => {
  if (err.code === 'ENOENT') {
    console.log('file not exist')
    return
  }
  console.log('deletion error')
})

//With the help of promise
async function deleteFile() {
  try {
    await fs.promises.unlink('trial.txt')
    console.log('File removed successfully')
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found')
    } else {
      console.error('Deletion failed:', err)
    }
  }
}
deleteFile()

//Delete directories
// Instead of rmdir + recursive options

async function deleteDirectory() {
  await fs.rm('data-cache', {
    recursive: true,
    force: true,
  })
}
deleteDirectory()
