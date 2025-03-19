let http = require('http')
// require('dotenv').config() // Load environment variables from .env file
let PORT = 2025 // Default to 2025 if PORT is not in the .env file
// Importing methods from methods folder
let getReq = require('./methods/get-request')
let putReq = require('./methods/put-request')
let postReq = require('./methods/post-request')
let deleteReq = require('./methods/delete-request')
let movies = require('./data/movies.json')
const server = http.createServer((req, res) => {
  req.movies = movies
  switch (req.method) {
    case 'GET':
      getReq(req, res)
      break
    case 'PUT':
      putReq(req, res)
      break
    case 'POST':
      postReq(req, res)
      break
    case 'DELETE':
      deleteReq(req, res)
      break

    default:
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ message: 'Request not found' }))
      res.end()
  }
})

server.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`)
})
