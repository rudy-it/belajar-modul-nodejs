var http = require("http");

var server = http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    switch (request.url) {
      case "/about":
        response.write("Ini adalah Halaman About");
        break;
      case "/profile":
        response.write("Ini adalah Halaman Profile");
        break;
      case "/produk":
        response.write("Ini adalah Halaman Produk");
        break;
      default:
        response.write("404: Halaman tidak ditemukan!");
    }
    response.end();
  })
  .listen(3000);
console.log("Server running on http://localhost:3000");
