// Create a server that GET /products → returns "List of products" POST /products → returns "Product created" (accept data)
// PUT /products → returns "Product updated" DELETE /products → returns "Product deleted"
const http = require('http')
http
  .createServer((req, res) => {
    if (req.url == '/products' && req.method == 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('List of products')
    } else if (req.url == '/products' && req.method == 'POST') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Product created')
    } else if (req.url == '/products' && req.method == 'PUT') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Product updated')
    } else if (req.url == '/products' && req.method == 'DELETE') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Product deleted')
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Error')
    }
  })
  .listen(1000)
