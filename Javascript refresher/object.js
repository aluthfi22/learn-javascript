const person = {
  name: "Suryo",
  age: 90,
  greet() {
    console.log("woy, I am " + this.name);
  },
};

person.greet();
console.log(person);
