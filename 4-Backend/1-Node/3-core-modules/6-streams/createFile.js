const fs = require("fs");

for (let i = 1; i <= 100000; i++) {
  fs.writeFileSync("./write.txt", `Line number - ${i}.\n`, { flag: "a" });
}
