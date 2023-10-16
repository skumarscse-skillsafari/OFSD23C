// DOM - Styles
const h2 = document.querySelector("h2");
console.log(h2.style);
//   h2.style.color = "green";
//   h2.style.border = "1px solid green";
//   h2.style.padding = "20px";

console.log(h2.className);
console.log(h2.classList);

// classList
// add()
// remove()
// toggle()
// contains()
// replace()
const para = document.querySelector("#para");
console.log(para);
//   para.classList.add("para");
//   para.classList.remove("para");

const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const toggleBtn = document.querySelector("#toggle");

addBtn.addEventListener("click", function () {
  para.classList.add("para", "head");
  para.classList.toggle("hide");
  //   document.querySelector("p").style.display = "none";
});

removeBtn.addEventListener("click", function () {
  para.classList.remove("para");
});

toggleBtn.addEventListener("click", function () {
  para.classList.toggle("para");
});

console.log(h2.classList.contains("head"));

h2.classList.replace("head", "new-head");
