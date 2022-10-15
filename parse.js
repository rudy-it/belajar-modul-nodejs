var http = require("http");
var url = require("url");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(request.url, true).query;
    var txt = "Kata Kunci: " + q.keyword;
    response.end(txt);
  })
  .listen(3000);
console.log(" Server Berjalan di http://localhost:3000");
