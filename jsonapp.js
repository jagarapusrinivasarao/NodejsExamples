var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was mode' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Srinu',
        job: 'UI Developer',
        age: 35
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');