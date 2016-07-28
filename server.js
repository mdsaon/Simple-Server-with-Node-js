//include a node js http module
var http = require('http');

//defining the hostname and port number
var hostname = 'localhost';
var port = 3000;

//calling the createServer method to create server
var server = http.createServer(function(req, res){
  console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>Hello World</h1></body></html>');
  })
  
  //start the server by calling the hostname and port number
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});