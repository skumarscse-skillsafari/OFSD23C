const os = require("os");

// console.log(os.arch());
console.log(os.cpus());

const sysInfo = {
  arch: os.arch(),
  totalMem: os.totalmem(),
  type: os.type(),
};
console.log(sysInfo);
