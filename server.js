var express = require('express')
  var app = express()

  var message = 'You ok?'

    app.get('/', function (req, res) {
      res.send(message)
      })

    app.get('/edit/:motd', function (req, res){

      message = req.params.motd //motd in params and params in req
      res.send('Message updated.')
    })
  app.listen(3000)
