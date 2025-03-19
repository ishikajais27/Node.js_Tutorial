let http = require('http');
let fs = require('fs');
let url = require('url') //Used to parse the request URL (helps in handling query parameters, like task IDs in the URL).
let path = require('path') 
let port = 2025;

let server = http.createServer((req,res)=>{
    if(req.method==='POST'&& req.url==='/add-task')
}) 