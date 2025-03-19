Stream is important part of File system
so let's focus more here
we first import {Readable} package from stream module because i want first to create a large file and then read it
so using Readable.from i created a file and read it and then to handle error i use .on() in which we pass error and callback and then .createWritableStream we create a file in which we can enter large data and i want to write the content from readable file to writable one soi use pipe

2nd task is to compress large file using zlib module so first we import it ('zlib') and then create a zip using zlib.createGzip() and then in writableStream we add extra extension .gz for compressed file
and using pipe we copy content from readable file to writable zip file
