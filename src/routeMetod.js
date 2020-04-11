const express = require('express')
const server = express()

server.route('/costumers')
  .get((req, res) => res.send('Costumers list'))
  .post((req, res) => res.send('New costumer'))
  .put((req, res) => res.send('Alter costumer'))
  .delete((req, res) => res.send('Delete costumer'))

server.listen(3000, () => {
  console.log('Executing...')
})