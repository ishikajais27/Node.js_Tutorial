// Check if index.html exists and is readable. If not, log an error.
const fs = require('fs')
fs.access('index.html', fs.constants.R_OK, (err) => {
  if (err) {
    console.log('File not exsist')
    return
  }
  console.log('File exsist')
})
