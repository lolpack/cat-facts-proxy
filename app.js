var express = require('express');
var request = require('request');
var app = express()

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
  request('http://catfacts-api.appspot.com/api/facts', function (error, response, body) {
    res.send(body)
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})