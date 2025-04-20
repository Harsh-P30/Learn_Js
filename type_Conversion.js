let a= '100.23';
let b='100a.23';
let c='123.25c';

console.log(Number(a));  // convert string into number either float or integer, return "100.23"
console.log(Number(b));  // during conversion it get a "Non-number" so return "NaN";
console.log(Number(c));  // during conversion it get a "Non-number" so return "NaN";

console.log(parseFloat(a));  // convert string into floating point number return " 100.23"
console.log(parseFloat(b));  // during conversion it get a "Non number character so it stop there and return till value "100" ;
console.log(parseFloat(c));  // during conversion it get a "Non number character so it stop there and return till value "123.25"

console.log(parseInt(a));  // convert string into number stop if non-number occure, return "100"
console.log(parseInt(b));  // during conversion into number stop if non-number occure, return "100";
console.log(parseInt(c));  // during conversion into number stop if non-number occure, return "123";



console.log(typeof(Number(a))); 
console.log(typeof(Number(b))); 
console.log(typeof(Number(c)));  
console.log(typeof(parseFloat(a)));  
console.log(typeof(parseFloat(b))); 
console.log(typeof(parseFloat(c)));
                                                                                                                                                
console.log(typeof(parseInt(a)));  
console.log(typeof(parseInt(b)));  
console.log(typeof(parseInt(c)));

/*
Function     | Returns       | Stops at invalid char? | Handles floats? | Accepts non-string types
parseInt()   | Integer       | ✅ Yes                 | ❌ No          | ✅ Converts to string first
parseFloat() | Float         | ✅ Yes                 | ✅ Yes         | ✅ Converts to string first
Number()     | Integer/Float | ❌ No                  | ✅ Yes         | ✅ Native conversion
*/