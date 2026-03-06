const person = {
    name: "Mateusz",
    age: 38,
    hobbies: ["programming", "gaming", "traveling"],
    greet: function() {
        alert(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
    }
};

// person.greet();

person.age = 31;
person.hairColor = 'blonde';
delete person.name;

console.log(person);