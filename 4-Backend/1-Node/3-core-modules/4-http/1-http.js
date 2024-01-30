const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("<h1>Welcome to Node</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>This is About Page</h1>");
  } else {
    res.end(`
        <h1>Requesting url: ${req.url} not found</h1>
        <a href="/">Back to Home Page</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
