// Create a GET /api/users endpoint that returns JSON:
const http = require('http')
let data = {
  users: [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      isActive: true,
      roles: ['admin', 'editor'],
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      isActive: false,
      roles: ['viewer'],
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      isActive: true,
      roles: ['editor'],
    },
  ],
}

http
  .createServer((req, res) => {
    if (req.url == '/api/users' && req.method == 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(data))
    } else {
      res.writeHead(404)
      res.end('Not Found')
    }
  })
  .listen(1000)
