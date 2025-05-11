// Problem 1: Write a log entry to activity.log with a timestamp. Handle errors.
const fs = require('fs')
const ifLogin = `${new Date().toISOString()}: User logged in\n`
fs.writeFile(
  'write.txt',
  ifLogin,
  {
    flag: 'a',
  },
  (err) => {
    if (err) {
      console.log('some error occurs')
    } else {
      console.log('Successfully completed task')
    }
  }
)
