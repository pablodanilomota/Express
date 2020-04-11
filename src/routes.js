const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

/**
 * Id in the Url.
 */
router.get('/products/:id', (req, res) => {
  res.json({id: req.params.id, name: 'Caneta'})
})

/**
 * Id and name in the Url.
 */
router.get('/costumers/:id/:name', (req, res) => {
  res.json({id: req.params.id, name: req.params.name})
})

module.exports = router