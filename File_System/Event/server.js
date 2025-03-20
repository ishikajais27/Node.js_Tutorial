const fs = require('fs') //import filesystem
const Event = require('events') //Here we use 1st letter capital because it is a class
const path = require('path')
let eventObj = new Event() //make a object to emit and listen events
let folderPath = path.resolve(__dirname, 'Trial')
console.log(folderPath) //to check if the path is correct or not
fs.watch(folderPath, (eventType, filename) => {
  if (eventType === 'rename') {
    fs.access(`${folderPath}/${filename}`, fs.constants.F_OK, (err) => {
      if (err) {
        //means file is deleted therefore emit delete event
        eventObj.emit('delete')
      } else {
        eventObj.emit('create')
      }
    })
  } else if (eventType == 'change') {
    //modify even
    eventObj.emit('modify')
  }
})

eventObj.on('create', () => {
  console.log('A file created in given folder!!!')
})
eventObj.on('delete', () => {
  console.log('A file Deleted in given folder!!!')
})
eventObj.on('modify', () => {
  console.log('A file updated in given folder!!!')
})
