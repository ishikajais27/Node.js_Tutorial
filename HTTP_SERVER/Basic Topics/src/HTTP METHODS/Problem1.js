// Create a server that responds with "Welcome to our website!" when someone accesses it.
const http = require('http')
const PORT = 500
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Welcome to our website!\n')
  })
  .listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
