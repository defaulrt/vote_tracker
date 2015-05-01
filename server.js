'use strict'

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  response.status(200).send('<h1>Hello, you\'ve stumbled across</h1>');
});

app.listen(process.env.PORT || 5000, function() {
  console.log('it running');
});

app.get('/*', function (req, res) {
  console.dir(res);
  res.sendStatus(404);
});
