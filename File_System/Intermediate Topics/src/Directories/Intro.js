//first we learn how to create directories
const fs = require('fs')
fs.mkdir('name_of_folder', (err) => {
  if (err) throw err
  console.log('Directory created!')
})
//creating nested directories
fs.mkdir('uploads/2023/images', { recursive: true }, (err) => {
  //this recursive true helps to create nested folders
  if (err) throw err
})
//sync way to create directories->
try {
  fs.mkdirSync('name_of_folders')
} catch (err) {
  console.error('Failed to create backup:', err.message)
}
