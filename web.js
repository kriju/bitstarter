var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var fileContentAsString = fs.readFileSync('./index.html', "utf8"); 
  response.send(fileContentAsString);
});
 
var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
