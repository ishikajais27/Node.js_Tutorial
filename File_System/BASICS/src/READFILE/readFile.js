const fs = require('fs') //importing fs module
//now synchronous(try and catch, blocking it is avoided because node.js is single thread and it blocks the
// entire thread until the operation finishes) and async concept(uses promises,async await and non blocking)

//method 1 Asynchronous Reading
//this utrf-8 converts Buffer to string known as encoding
fs.readFile('basic_topics.md', 'utrf-8', (err, data) => {
  if (err) {
    console.log('Some error occured!!')
    return
  }
  console.log('content', data)
})

// METHOD 2 Promise-based Version (Modern Approach)
async function readFile() {
  //make an async function
  try {
    const data = await fs.promises.readFile('example.txt', 'utf8') //read the file in async way store the content of file in a variable
    console.log('File content:', data)
  } catch (err) {
    console.error('Error reading file:', err)
  }
}
readFile()

//METHOD 3 SYNC WAY
try {
  const data = fs.readFileSync('example.txt', 'utf8')
  console.log('File content:', data)
} catch (err) {
  console.error('Error reading file:', err)
}
