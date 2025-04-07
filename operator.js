var a=10
var b=12

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(++a)
console.log(--a) 
console.log("------------------------------------------------------------------------------------")

console.log(a==b)
console.log(a===b)
console.log(a>b)
console.log(a<b)
console.log(a!==b)
console.log(a>=b)
console.log(a<=b)
console.log("------------------------------------------------------------------------------------")
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false
console.log(10 > 5 && 5 < 8); // true (both conditions are true)
console.log(10 > 5 || 5 > 8); // true (one condition is true)
console.log("------------------------------------------------------------------------------------")
console.log(false && "Hello"); // false
console.log(true || "World");  // true
console.log("------------------------------------------------------------------------------------")
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"