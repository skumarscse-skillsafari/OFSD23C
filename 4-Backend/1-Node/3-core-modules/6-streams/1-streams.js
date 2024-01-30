const { createReadStream } = require("fs");

const stream = createReadStream("./write.txt", {
  encoding: "utf-8",
  highWaterMark: 500000,
});
stream.on("data", (result) => {
  console.log(result);
});
