const express = require('express')
const server = express()

server.use('/api', function(req, res, next) {
  console.log('Start...') 
  /**
   * Call the next function.
   */
  next()
  /**
   * Return to this code.
   */
  console.log('...End') 
})

/**
 * Next function.
 */
server.use('/api', function(req,res) {
  console.log('...Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => {
  console.log('Executing...')
})