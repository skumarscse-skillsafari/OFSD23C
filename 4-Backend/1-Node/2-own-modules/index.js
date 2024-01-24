// commonJS
// const varName = require("path")

/*
let userDetails = {
    fname: "John",
    lname: "Jack"
}
let {propName-1, propName-2,..., propName-N} = {propName-1: propVal-1, propName-2: propVal-2, ..., propName-N: propVal-N}

let {lname} = userDetails
const userObject = {
    userObject: {
        firstname: "John",
        lastname: "Jack",
        age: 23,
        isAdmin: false,
};
}
const {userObject} = userObject;


*/
const { userObject } = require("./object.js");
const { subjects } = require("./array.js");
const { displayMessage } = require("./function.js");
const { username } = require("./variable.js");
const { mix } = require("./mix.js");
// console.log(userObject);
// console.log(subjects);
// // console.log(displayMessage);
// displayMessage("Hello, Node");
// console.log(username);
mix[3]();
