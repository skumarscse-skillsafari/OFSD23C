const fs = require("fs");

const fileOne = fs.readFileSync("./file-1.txt", { encoding: "utf-8" });
// console.log(fileOne);
const fileTwo = fs.readFileSync("./file-2.txt", { encoding: "utf-8" });
// console.log(fileTwo);

fs.writeFileSync("./write.txt", `Content: ${fileOne}, ${fileTwo}.\n`, {
  flag: "a",
});
