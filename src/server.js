var express = require('express');

var port = process.env.PORT || 3000;
var app  = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(port);

console.log('docker-node-example is running on port ' + port);

module.exports = app;