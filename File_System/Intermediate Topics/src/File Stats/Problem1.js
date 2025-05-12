// Problem 1: List all files (not directories) in a folder.
const fs = require('fs')
//readdir used to read the content of folder , '.' means current folder, {withFileType: true} it returns a Dirent object
//which include info about each entry is file or not
fs.readdir('.', { withFileTypes: true }, (err, dirents) => {
  const files = dirents
    .filter((dirent) => dirent.isFile()) //filters only files not folders
    .map((dirent) => dirent.name) //takes only file name from the array of object
  console.log('Files:', files)
})
