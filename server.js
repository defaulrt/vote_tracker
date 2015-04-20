'use strict'

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(req, res) {
  res.status(200).send('<h2>You\'ve stumbled across a secret. Tell no one');
});

app.listen(process.env.port || 5000, function() {
  console.log('it running');
});

app.get('/*', function (req, res) {
  console.dir(res);
  res.sendStatus(404);
});
