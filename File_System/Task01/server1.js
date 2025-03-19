const fs = require('fs') //import fs module
// let folderPath = 'C:\\NodeJs_Basics\\Node.js_Tutorial\\File_System\\Task01' // one way to get the path
const path = require('path')
// Using path module
let folderPath = __dirname
// console.log(`Folder:- ${folder}`)
console.log('Folder Path:- ', folderPath)

//way to read directory 1st we pass folderpath and then call back for handling error or logging files which we get.
fs.readdir(folderPath, (err, data) => {
  if (err) console.log('Some Error Occur!!!')
  console.log('Files->', data)
  //forEach loop to get the content of each file
  data.forEach((file) => {
    let filePath = path.join(folderPath, file) //it helps to find the path of current file by joining teh file to current dir using '/'
    fs.readFile(filePath, 'utf-8', (err, content) => {
      //readFile takes path of file then utf-8 to convert the content into readable string form and then call back
      if (err) console.log('Some error occur in file or content not present ig')
      console.log(`Content:- ${content}`)
    })
  })
})
