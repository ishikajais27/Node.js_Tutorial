Understanding HTTP Server in Node.js
Task
We need to create an HTTP server that handles:
GET / → Returns "Welcome to the Home Page"
GET /about → Returns "About Us"
POST /data → Accepts JSON data and logs it

Steps to Build the Server
Create an HTTP server using the http module.
Run the server on a port so it can listen for requests.
Use condition statements (if-else) to check the request method (GET, POST) and URL (/, /about, /data).
Use res.writeHead() to send a status code (3-digit number indicating success or failure) and headers (which provide metadata about the response).
Handle POST requests:
Data is received in chunks (small pieces).
Use req.on('data', chunk => {...}) to collect data.
When all data is received, req.on('end', callback) processes it.
