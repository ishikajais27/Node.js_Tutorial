const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
  //create a server
  if (req.method === 'GET' && req.url == '/') {
    //checks the method and url match the requst
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Home Page')
  } else if (req.method === 'GET' && req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('About Page')
  } else if (req.method === 'POST' && req.url == '/data') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('About Page')
  } else if (req.method === 'POST' && rq.url == '/data') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        const data = JSON.parse(body)
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end(JSON.stringify(data))
      } catch (err) {
        console.log(`Some error occur - ${err}`)
      }
    })
  }
})

server.listen(1000, 'localhost', () => {
  console.log('Server is running on port 1000')
})
