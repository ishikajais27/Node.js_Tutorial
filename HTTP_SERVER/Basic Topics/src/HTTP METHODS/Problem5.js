// GET /books → list all books POST /books → add a new book
// GET /books/:id → get a specific book PUT /books/:id → update a book DELETE /books/:id → delete a book
const http = require('http')
const fs = require('fs')

let books = require('./Books.json') // Load at start

http
  .createServer((req, res) => {
    if (req.url == '/books' && req.method == 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(books))
    } else if (req.url == '/books' && req.method == 'POST') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        const newBook = JSON.parse(body)
        newBook.id = books.length + 1
        books.library.push(newBook)

        fs.writeFile('Books.json', JSON.stringify(books, null, 2), (err) => {
          if (err) {
            console.error('JSON write error:', err)
            res.writeHead(500)
            return res.end('Internal Server Error')
          }

          res.writeHead(201, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(newBook))
        })
      })
    } else if (req.method === 'GET' && req.url.startsWith('/books/')) {
      const bookId = parseInt(req.url.split('/')[2])
      const book = books.library.find((b) => b.id === bookId)

      if (book) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(book))
      } else {
        res.writeHead(404)
        res.end('Book not found')
      }
    } else {
      res.writeHead(404)
      res.end('Not Found')
    }
  })
  .listen(1000)
