var http = require('http'); //repuire http protocol

var dt = require("./dateTimeModule.js"); //refference my own module

http.createServer(function (req, res) { //create server
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time is "+dt.myDateTime()) //calling my module
    res.write("<br>"+req.url+"<br>") //get data after the url
    res.end('Hello World!'); //respond with this data to request
}).listen(8080); //listen to this port

console.log("Application is running");