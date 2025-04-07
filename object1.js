// In javascript mainly 4 method to create object. 
// object is a data type that allow you to store key-value pairs and group related data and functions together.
// an object is a collection of properties, where each property has a key(name) and a value.


// Method 1st :- // Using Object Literals (Most Common); Best for small objects
const people = {  
    name: "Harsh",
    age: 21,
    gender: "man"
}

console.log(people["name"]);


// Method 2nd :- // Using new Object() (Less Common); Useful when dynamically adding properties
const student = new Object;   
student.name = 'harsk';

console.log(student)

// Method 3rd :- // 3. Using a Constructor Function; Best for creating multiple objects of the same type
function car(name, model) {   
    this.name = name;   // this refers to current object.
    this.model = model;
}
const newCar = new car('BMW', 'X');
console.log(car.name)


//Method 4th :-// Using ES6 Classes (Modern & Recommended); Best for large-scale applications
class carr{  

    constructor(name,model){
        this.name=name;
        this.model=model;
    }
}

let myCar = new carr("BMW","B");
console.log(myCar.model);
carr.city="Delhi";  // This is a static property of the class, not an instance property


console.log(myCar.city);  // // Undefined, because "city" is not an instance property.
console.log(carr.city);


// object properties can access by two method 
    //1st:-dot notation(Preferred)
        //object.key
    //2nd :- Bracket Notation(for dynamic keys)
        //object["key"]