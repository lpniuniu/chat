var http = require("http");
var fs = require("fs")

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Asynchronous read
    fs.readFile('testAPI.htm', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        response.end(data);
    });
    // Send the response body as "Hello World"

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

console.log( __filename );
console.log( __dirname );