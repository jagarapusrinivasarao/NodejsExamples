var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200,{'content-type': 'text/plain'});
  res.end('I love Srinivas');
});
server.listen(5000, '127.0.0.1')