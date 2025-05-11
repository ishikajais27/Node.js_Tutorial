// Problem 1: Read user-data.json asynchronously and parse it. Handle errors if the file is missing or invalid.
const fs = require('fs')
async function read() {
  try {
    let data = await fs.promises.readFile('jsonDataP1.json', 'utf-8')
    console.log(JSON.parse(data))
  } catch (err) {
    console.log('Some error occured!!', err)
  }
}
read()
