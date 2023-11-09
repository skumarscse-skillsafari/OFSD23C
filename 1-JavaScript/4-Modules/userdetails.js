const userDetails = [
  { id: 1, name: "John", age: 23 },
  { id: 2, name: "Jack", age: 20 },
  { id: 3, name: "Mary", age: 25 },
];

// console.log(userDetails);

export const displayUser = (name) => {
  console.log(name);
};

export const displayAge = (age) => {
  console.log(age);
};
// export const varName => exporting morethan one value
// export default varName => exporting single value (end of the file)

export default userDetails;
