const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector("#signin-btn");

// console.log(email);
// console.log(password);
// console.log(signinBtn);

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(localStorage);
  const localStorageValues = Object.values(localStorage).map((val) =>
    JSON.parse(val)
  );
  console.log(Object.entries(localStorageValues));
  const findUser = Object.entries(localStorageValues).find(
    (val) => val[1].email === email.value
  );
  console.log(findUser[1]);
  if (findUser[1].password === password.value) {
    window.location.href = `./profile.html?id=${findUser[1].id}`;
  } else {
    alert("Invalid credentials / User not exists");
  }
});
