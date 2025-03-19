const fs = require('fs')
const path = require('path')

const sourcePath = path.resolve(__dirname, '..', 'Task01') // Get absolute path of Task01
console.log('Source Path:', sourcePath)

const destiPath = __dirname // Destination is the current folder
console.log('Destination Path:', destiPath)

// Check if source folder exists
if (!fs.existsSync(sourcePath)) {
  console.log('Source folder does not exist!')
} else {
  // Read all files in the source folder
  fs.readdir(sourcePath, (err, files) => {
    if (err) {
      console.log('Error reading source folder:', err)
    } else {
      files.forEach((file) => {
        const srcFile = path.join(sourcePath, file)
        const destFile = path.join(destiPath, file)

        fs.copyFile(srcFile, destFile, (err) => {
          if (err) {
            console.log(`Error copying ${file}:`, err)
          } else {
            console.log(`Copied: ${file}`)
          }
        })
      })
      console.log(`Total Files to Copy: ${files.length}`)
    }
  })
}
