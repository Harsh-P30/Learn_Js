function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3));  // normal function take all the values if you give all the value of argument still it will run 
console.log(add(1, 2));  // it runs and gives NaN 



// But in Currying till you give all values of argument it will not run;

function curryingAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}


console.log(curryingAdd(2)(3)(4));
console.log(curryingAdd(2)(3));  // not run 

/*

🌟 What is currying?
Currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking one argument at a time.

In short:
👉 Instead of calling f(a, b, c) → you call f(a)(b)(c)

🚀 Why use currying?
✅ To break complex functions into smaller, reusable functions
✅ To preload (preset) some arguments
✅ To write more flexible and composable code

💡 Benefits of currying
✅ Makes code modular
✅ Enables function reuse
✅ Allows partial application (presetting arguments)
 */