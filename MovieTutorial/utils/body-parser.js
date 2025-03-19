module.exports = async (request) => {
  //this request we get from the client to add on server or json file
  return new Promise((resolve, reject) => {
    try {
      let body = ''

      request.on('data', (chunk) => {
        //add the small pieces of data(chunk) to the body
        body += chunk
      })
      request.on('end', () => {
        resolve(JSON.parse(body)) //when all datas added then convert the data into json format
      })
    } catch (err) {
      console.log('Error', err)
      reject(err)
    }
  })
}
