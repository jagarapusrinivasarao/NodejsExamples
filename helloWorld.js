const http = require('http');
const url = require('url');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('index.html', (err, html)=>{
    if(err){
        throw err;
    }
    const server = http.createServer((req, res) => {
        const query=    url.parse(req.url, true).query
        console.log( 'queries'  , query);
         res.statusCode = 200;
         res.setHeader('content-type', 'text/html');
         res.write(html)
         res.end(`Hello ${query.name? query.name : 'user '}, welcome to node rest app`);
    });
    server.listen(port, hostname, () => {
        console.log(`Node application running on ${hostname}:${port}`);
    });
});
 
