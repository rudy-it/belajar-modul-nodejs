const { Console } = require("console");
var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;

      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(3000);
console.log("server running on http://localhost:3000");
