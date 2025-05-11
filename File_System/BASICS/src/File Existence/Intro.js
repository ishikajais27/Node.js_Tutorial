//Three methods to check the exsistence of file (ASync ,Sync and modern promise method)
//SYNC WAY
const fs = require('fs')
if (fs.existsSync('trial.txt')) {
  console.log('File exist')
} else {
  console.log('File not exist')
}
//ASYNC WAY
fs.access('trial.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('File does NOT exist')
    return
  }
  console.log('File exists')
})

// Promise way

async function checkFile() {
  try {
    await fs.promises.access('image.png', fs.constants.F_OK)
    console.log('File exists')
    return true
  } catch {
    console.log('File missing')
    return false
  }
}
checkFile()
