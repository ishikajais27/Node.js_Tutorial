let finalBody = require('../utils/body-parser')
module.exports = async (req, res) => {
  if (req.url === '/api/movies') {
    try {
      let body = await finalBody(req)
      console.log('Requested Body', body)
    } catch (err) {
      console.log('ERROR', err)
    }
  }
}
