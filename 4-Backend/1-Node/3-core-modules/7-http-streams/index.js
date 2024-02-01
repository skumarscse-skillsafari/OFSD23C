const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./write.txt", {
    encoding: "utf-8",
    highWaterMark: 100000,
  });
  stream.on("open", () => {
    stream.pipe(res);
  });
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});

server.on("error", (err) => {
  console.log(err);
});
