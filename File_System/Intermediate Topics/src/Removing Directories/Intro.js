//How to delete directories
const fs = require('fs')

// Remove empty directory (async)
fs.rmdir('folder_name', (err) => {
  if (err) console.log('error', err)
})
// Remove non-empty directory (modern)
fs.rm('old-data', { recursive: true, force: true }, (err) => {
  if (err) console.log('error', err)
})
