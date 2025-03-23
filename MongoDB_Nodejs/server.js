const http = require('http')
const fs = require('fs')
const { MongoClient, ObjectId } = require('mongodb')
const mongoUrl = 'mongodb://127.0.0.1:27017'
let client = new MongoClient(mongoUrl) //make a object of MongoClient to connect to mongo server
async function connectDb() {
  try {
    await client.connect()
    console.log('Connected to mongoDb server!!') //after succesfull connection now access a db you want to manipulate
    const dbName = client.db('library') //as i want to manipulate library database.
    let collection = dbName.collection('books') //want to access collection of named books
    return collection //return collections for further use (like to manipulate it according to the request)
  } catch (err) {
    console.log('some error occur', err)
  }
}

const server = http.createServer(async (req, res) => {
  let collectionAdd = await connectDb()
  if (req.method == 'POST' && req.url == '/books') {
    //now i have to add a new book so lets begin
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', async () => {
      try {
        const data = JSON.parse(body)
        const result = await collectionAdd.insertOne(data)
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(JSON.stringify(result)))
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Invalid data format' }))
      }
    })
  } else if (req.method == 'GET' && req.url == '/books') {
    try {
      const books = await collectionAdd.find({}).toArray() // Retrieve all books

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(books)) // Send books as JSON response
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Internal Server Error' }))
    }
  } else if (req.method == 'GET') {
    ;(async () => {
      //  Wrap inside an async IIFE (Immediately Invoked Function)
      try {
        const id = req.url.split('/')[2]
        console.log(id)
        let query = id ? { _id: new ObjectId(id) } : {} //  Convert id to ObjectId

        let data = await collectionAdd.find(query).toArray() //  Await the DB operation

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data)) //  Send the response
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Internal Server Error' }))
      }
    })() //  Immediately invoke the function
  } else if (req.method === 'PUT') {
    let b = ''
    req.on('data', (chunk) => (b += chunk.toString()))
    req.on('end', async () => {
      const id = req.url.split('/')[2]
      console.log(id)
      let query = id ? { _id: new ObjectId(id) } : {}
      const UpdatedData = await collectionAdd.updateOne(query, {
        $set: JSON.parse(b),
      })
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({ message: 'Update Completed', result: UpdatedData })
      )
    })
  } else if (req.method == 'DELETE') {
    const id = req.url.split('/')[2]
    let query = id ? { _id: new ObjectId(id) } : {}
    try {
      const result = await collectionAdd.deleteOne(query)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          message: 'Book deleted successfully',
          result: result,
        })
      )
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Internal Server Error' }))
    }
  }
})

const PORT = 4000
server.listen(PORT, () => {
  console.log('Server is running on PORT', PORT)
})
