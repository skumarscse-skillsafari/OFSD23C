const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signupBtn = document.querySelector("#signup-btn");

// console.log(username);
// console.log(password);
// console.log(confirmPassword);
// console.log(email);
// console.log(signupBtn);
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    username.value === "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    alert("All the fields as mandatory");
  } else {
    if (password.value !== confirmPassword.value) {
      alert("Password and Confirm password are not same");
    } else {
      let userDetails = {
        id: Math.floor(Math.random() * 100),
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };
      let storedUsers = Object.values(localStorage);
      // console.log(storedUsers);
      let storedUsersObj = storedUsers.map((user) => JSON.parse(user));
      console.log(storedUsersObj);
      let findData = storedUsersObj.find(
        (user) =>
          user.username === userDetails.username ||
          user.email === userDetails.email
      );
      console.log(findData);
      if (findData) {
        alert("User already exists");
      } else {
        localStorage.setItem(userDetails.id, JSON.stringify(userDetails));
        alert("User added successfully");
        window.location.href = "./index.html";
      }
    }
  }
});
