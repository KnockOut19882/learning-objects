const movieList = document.getElementById("movie-list");

movieList.style.display = 'block';
movieList.style.backgroundColor = "red"; 
// movieList.style["background-color"] = "red";
// movieList.style['backgroundColor'] = "red";

const userChosenKeyName = 'level';

const person = {
  'first name': "Mateusz",
  age: 38,
  hobbies: ["programming", "gaming", "traveling"],
  [userChosenKeyName]: "", // computed property name - the value of the variable userChosenKeyName will be used as the property name
  greet: function () {
    alert(`Hello, my name is ${this['first name']} and I am ${this.age} years old!`);
  },
  1.5: "This is a property with a numeric key",
};

// person.greet();

// person.age = 31; - changing the value of an existing property
// person.hairColor = 'blonde'; - adding a new property to the object
// delete person['first name']; - deleting an existing property from the object

const keyName = 'first name';

console.log(person[keyName]); // dynamic property access using a variable
console.log(person['first name']); // console.log(person.first name); - this will cause a syntax error because of the space in the property name
console.log(person[1.5]); 
// console.log(person['1.5']); - this will work because the property name is a string
console.log(person);
