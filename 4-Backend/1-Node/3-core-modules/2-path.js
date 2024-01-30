const path = require("path");

const customPath = path.join("/main-folder", "sub-folder", "index.html");

// console.log(customPath);

const basefile = path.basename(customPath);
console.log(basefile);

const absolutePath = path.resolve(
  __dirname,
  "main-folder",
  "sub-folder",
  "index.html"
);
console.log(absolutePath);
