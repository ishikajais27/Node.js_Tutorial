//we learn about path manipulation
const path = require('path')
//1st  method path.join use to join the given segments
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
//2nd Method path.resolve similar work as join but it always returns absolute path and start from right to left
console.log(path.resolve('/a/b/c', '/d'))
//3rd Method path.basename returns the last part of the path
console.log(path.basename('/a/b/c/d/e.html'))
//4th Method is path.dirname returns all the folder's name present in the path
console.log(path.dirname('/a/b/c/d/e.html'))
//5th Method path.parse(path) -> converts the path into object
console.log(path.parse('/a/b/c/d/e.html/ff.js/g'))
