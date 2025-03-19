Here 1st i import some modules that is require to perform tasks(http) and then import files.

then create a server using http module and then start it using listen method on port 2025.

and now i want to perform some tasks using http's methods so i created switch case.
if the method is get we call the function getReq and pass two arguments(req,res)
similarly for other methods

and now in get-request.js file
if(req.url== some url) then we send statuse code as response 200(server is okk), then send header(info about sending data like what its type and other infos) and then convert req.movies into json string format and write it on server and if some error occur then similarly we send response status 404(server is not found or url is not found)

similarly we are shifting to the post-request file to perform some tasks
