import userDetails from "./userdetails.js";
import { userOne, userTwo, userThree } from "./demouser.js";
import { displayUser, displayAge } from "./userdetails.js";
const username = "John";
console.log(username);
console.log(userDetails);
console.log(userOne);
console.log(userTwo);
console.log(userThree);
displayUser("Demo User");
displayAge(23);

// import varName from "./path"
// import varName => importing single value  (export default)
// import {var-1, var-2,..., var-N} => importing multiple value (export)
