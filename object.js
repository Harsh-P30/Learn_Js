const person = {
    name: "harsh",
    class: "4csa",
    rollno: 40,
    age: 21,
    alive: true,
    greet: function () {
        return `hello this is ${this.name}` // this is always a reference to an object      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    }
}

console.log(person.greet())  //(.)dot notation
console.log(person["alive"]) //([]) bracket notation

person.country = "india"; // add
console.log(person.country)

person.age = 20;//modify existing properties

delete person.rollno;
console.log(person.rollno)  // undefined

console.log("name" in person); // true
console.log("salary" in person); // false
console.log(person.hasOwnProperty("age")); // true
console.log(person.hasOwnProperty("salary")); // false
for (let key in person) {
    console.log(`${key} :${person[key]}`)
}
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person));
var newObject = new Object(); // Using new Object()
newObject.name = "harsh prasad"
console.log(newObject.name)
console.log(Object.entries(person))
const jsonFile=JSON.stringify(person) // convert string into JSON file.
console.log(jsonFile)
const stringFile=JSON.parse(jsonFile) //convert JSON into string.
console.log(stringFile)


const personn = [  //  map() is only used on arrays in JavaScript.  
    { name: "Alice", age: 22 },
    { name: "Bob", age: 28 },
  ];
  
  let personsname = personn.map(person => person.name);
  console.log(personsname); // ["Alice", "Bob"]
  