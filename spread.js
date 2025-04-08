/*✅ Spread Operator (...) in JavaScript
🔹 What is it?
The spread operator (...) is used to expand elements of an array, object, or iterable into individual elements.

Think of it like "unpacking" values! 
🧠 Why Use the Spread Operator?
To copy arrays or objects

To merge arrays or objects

To pass multiple values (e.g., into a function)

To avoid mutation of original data (immutable code)  */

// Using Spread Operator
const a =[1,2,3,4,5];
const b =[1,2,3,4,5];
const copy = [...a,...b];
console.log(copy)