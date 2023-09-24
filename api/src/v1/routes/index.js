const express = require('express')

const router  = express.Router()

router.route('/').get((req, res) => {
    res.send('<h1>Bienvenido usuario por favor identificate</h1>\
              <p1>API version v2 </p>\
              <p1>carlos andres ortegon tique _ william castiblanco</p>')
})

module.exports = router