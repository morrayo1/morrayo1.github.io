var http = require('http');    

http.createServer(function(request,response){
    
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('Hello!!');
    
}).listen(8080);

