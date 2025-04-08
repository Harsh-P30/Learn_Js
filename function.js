 // Known as Function declaration
// ✔️ Hoisted: You can call it before it's defined.
function people(name) { 
    console.log("I am named function" + name)
}
people("  hello");  //A function is declared using the function keyword and can be called before or after the declaration.

const fun = (people) => {  //Arrow function is a shorter syntax for writing functions.
    console.log("its a arrow function")
    return people
}

fun(people("  and called by other function"));



(function () {  //A function that executes immediately after definition.
    console.log("immediately invoked function")
})();


// Function Expression
// A Function Expression involves assigning a function to a variable.
// ❌ Not Hoisted: You cannot call it before it's defined.  because it store into a variable
const Anonymous = function add() {
    console.log("i am a anonymous function")
}
Anonymous();
// add(); // add is not defined you have to call using stored varible name




// JavaScript default parameters in "ES6".
function add(a = 10, b = 4) {
    return a + b;
}

console.log(add(7)) // a=7,b=4
console.log(add(6, 4)) // a=6,b=4
console.log(add(undefined, 9)) // a=10,b=9

