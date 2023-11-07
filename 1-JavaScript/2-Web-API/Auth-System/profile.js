const UrlId = new URLSearchParams(location.search);
const id = UrlId.get("id");
// console.log(UrlId.get("firstname"));
// console.log(UrlId.get("lastname"));
// console.log(UrlId.values());
// const [id, firstname, lastname] = UrlId.values();
// console.log(id);
// console.log(firstname);
// console.log(lastname);
// console.log(id);
// console.log(localStorage.getItem(id));

const findUser = JSON.parse(localStorage.getItem(id));
console.log(findUser);

const username = document.querySelector("#username");
const welcome = document.querySelector("#welcome");
const email = document.querySelector("#email");
const userId = document.querySelector("#userID");
const signOutBtn = document.querySelector("#signOutBtn");

username.textContent = `Username: ${findUser.username}`;
welcome.textContent = `Welcome, ${findUser.username}`;
email.textContent = `User email: ${findUser.email}`;
userId.textContent = `User id: ${findUser.id}`;

signOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.removeItem(findUser.username);
  window.location.href = "./index.html";
});
