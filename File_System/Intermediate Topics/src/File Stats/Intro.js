//gives information about files and folders
const fs = require('fs')

fs.stat('Intro.js', (err, stats) => {
  if (err) throw err
  console.log(`
    Is File: ${stats.isFile()}
    Is Directory: ${stats.isDirectory()}
    Size: ${stats.size} bytes
    Last Modified: ${stats.mtime.toISOString()}
  `)
})
