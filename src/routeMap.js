const express = require('express')
const server = express()

server.get('/', function(req, res) {
  res.send('<h1>Index!</h1>')
})

server.all('/test', function(req, res) {
  res.send('<h1>Test!</h1>')
})

/**
 * When 'api' is on the name.
 */
server.all(/api/, function(req, res) {
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => {
  console.log('Executing...')
})