const movieList = document.getElementById("movie-list");

movieList.style.display = 'block';
// movieList.style.backgroundColor = "red";
movieList.style["background-color"] = "red";
// movieList.style['backgroundColor'] = "red";

const person = {
  'first name': "Mateusz",
  age: 38,
  hobbies: ["programming", "gaming", "traveling"],
  greet: function () {
    alert(`Hello, my name is ${this['first name']} and I am ${this.age} years old!`);
  },
};

// person.greet();

// person.age = 31; - changing the value of an existing property
// person.hairColor = 'blonde'; - adding a new property to the object
// delete person['first name']; - deleting an existing property from the object

console.log(person['first name']);
console.log(person);
