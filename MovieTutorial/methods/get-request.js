const path = require('path')

module.exports = (req, res) => {
  // Extract the base URL (removing the movie ID part)
  let baseURL = req.url.substring(0, req.url.lastIndexOf('/') + 1)
  // Extract the movie ID from the URL
  let id = req.url.split('/')[3]

  // Log the id and baseURL for debugging
  console.log(id)
  console.log(baseURL)

  // If the request is for the list of all movies
  if (req.url === '/api/movies') {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    // Sending all movies in the req.movies array
    res.write(JSON.stringify(req.movies)) // Assuming req.movies is an array of movies
    res.end()
  } else if (baseURL === '/api/movies/') {
    // Convert the id from string to number
    let movieId = parseInt(id, 10)

    // If movieId is not a valid number, return 400 error
    if (isNaN(movieId)) {
      res.statusCode = 400
      res.write(
        JSON.stringify({ title: 'BAD REQUEST', message: 'Invalid movie ID' })
      )
      res.end()
      return
    }

    res.setHeader('Content-type', 'application/json')

    // Find the movie with the given id
    let fMovie = req.movies.filter((movie) => movie.id === movieId)

    // If the movie is found, return it as JSON; otherwise, return 404
    if (fMovie.length > 0) {
      res.statusCode = 200
      res.write(JSON.stringify(fMovie[0])) // Return the found movie
    } else {
      res.statusCode = 404
      res.write(
        JSON.stringify({ title: 'NOT FOUND', message: 'MOVIE NOT FOUND' })
      )
    }
    res.end()
  } else {
    // If the URL doesn't match any valid routes, return 404 for not found
    res.writeHead(404, { 'Content-type': 'application/json' })
    res.end(JSON.stringify({ title: 'NOT FOUND', message: 'ROUTE NOT FOUND' }))
  }
}
