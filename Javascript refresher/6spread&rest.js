const hobbies = ["sports", "cooking"];
//for (let hobby of hobbies) {
//  console.log(hobby);
//}
// console.log(hobbies.map((hobby) => "hobi: " + hobby));
// console.log("hobi " + hobbies);
// hobbies.push("tidur");
// console.log(hobbies);
const coppiedArray = [...hobbies];
console.log(coppiedArray);

const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4, 5));
