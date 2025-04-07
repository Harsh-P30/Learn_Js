let iswestartboolean=true
let iswenotstartboolean=false
console.log(iswestartboolean)
console.log(iswenotstartboolean)

console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true
console.log(Boolean([]));      // true (empty array)
console.log(Boolean({}));      // true (empty object)
console.log(Boolean(-42));     // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false (empty string)
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false
console.log(Boolean(false));   // false
console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 > 3 && 10 < 20); // true (both conditions are true)
console.log(true || false);  // true
console.log(false || false); // false
console.log(5 > 10 || 10 < 20); // true (one condition is true)
console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true
console.log(!1);     // false
console.log(5 == 5);    // true (Equality)
console.log(5 === "5"); // false (Strict Equality)
console.log(10 != 5);   // true (Not Equal)
console.log(10 !== "10"); // true (Strict Not Equal)
console.log(5 > 3);     // true (Greater than)
console.log(5 < 3);     // false (Less than)
console.log(5 >= 5);    // true (Greater or Equal)
console.log(3 <= 5);    // true (Less or Equal)
console.log(false && "Hello"); // false (stops at first `false`)
console.log(0 && "World");     // 0
console.log(1 && "JavaScript"); // "JavaScript" (since 1 is truthy)
console.log(true || "Hello");  // true (stops at first `true`)
console.log("Hi" || "World");  // "Hi" (since "Hi" is truthy)
console.log(0 || "JavaScript"); // "JavaScript" (since 0 is falsy)
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome, User!");
} else {
    console.log("Please log in.");
}

// Output: "Welcome, User!"
let username = null;
console.log(username ?? "Guest"); // "Guest"

let age = 0;
console.log(age ?? 18); // 0 (because `0` is NOT null or undefined)