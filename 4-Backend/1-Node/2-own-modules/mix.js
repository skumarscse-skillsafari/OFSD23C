const name = "Robert";
const userObj = {
  age: 23,
  isAdmin: true,
};
const hobbies = ["cricket", "football"];
const displayUserInfo = () => {
  console.log(userObj);
};

module.exports.mix = [name, userObj, hobbies, displayUserInfo];
