const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync("./1-Landing-Page/index.html", {
  encoding: "utf-8",
});
const stylePage = fs.readFileSync("./1-Landing-Page/style.css", {
  encoding: "utf-8",
});

const imageOne = fs.readFileSync(
  "./1-Landing-Page/assets/images/Rectangle-11.png"
);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // https://stackoverflow.com/questions/23714383/what-are-all-the-possible-values-for-http-content-type-header
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexPage);
    res.end();
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(stylePage);
    res.end();
  } else if (req.url === "/assets/images/Rectangle-11.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(imageOne);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`
        <h2>Page not found - 404</h2>
        <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
