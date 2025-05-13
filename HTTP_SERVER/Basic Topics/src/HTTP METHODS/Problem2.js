// Create a server with three routes: '/' returns "Home" '/contact' returns "Contact Us"  Any other route returns 404
const http = require('http')
http
  .createServer((req, res) => {
    if (req.url == '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Home')
    } else if (req.url == '/contact') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Contact Us')
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
    }
  })
  .listen(1000)
