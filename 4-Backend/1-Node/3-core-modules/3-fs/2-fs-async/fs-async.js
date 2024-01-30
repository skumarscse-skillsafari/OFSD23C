const fs = require("fs");

fs.readFile("./file-1.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) return err;
  const fileOne = data;
  fs.readFile("./file-2.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) return err;
    const fileTwo = data;
    fs.writeFile(
      "./write.txt",
      `Content: ${fileOne}, ${fileTwo}\n`,
      { flag: "a" },
      (err) => {
        if (err) return err;
        console.log("File written successfully");
      }
    );
  });
});
