//first we create server using .createServer and in this method we have a callback which has parameters res,req res which is server sent to client
//  and req which is client sent to server
const http = require('http')
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hey!!')
  })
  .listen(3000, () => {
    console.log('server is running')
  })

//Handling Different Routes
http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.end('Home Page')
    } else if (req.url === '/about') {
      res.end('About Page')
    } else {
      res.writeHead(404)
      res.end('Page Not Found')
    }
  })
  .listen(1000, () => {
    console.log('Handling diff routes ')
  })
