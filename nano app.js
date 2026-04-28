const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from EC2 🚀");
}).listen(3000, "0.0.0.0");