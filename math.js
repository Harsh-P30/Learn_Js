let num1=25;
let num2=42.574;
let scinum=4e2;//Scientific notation 400
let bignum=547817916781676781678147867877817811671n// for big int number in last add n with number
console.log(scinum)
console.log(bignum)
console.log(num1+num2)
console.log(Math.floor(num2))
console.log(++num1)
console.log(--num1)
console.log(Number("123"));  //string to integer 123
console.log(parseInt("123")); // string to 123 (Integer)
console.log(parseFloat("123.45")); //string to float 123.45 (Float)
console.log((123).toString()); //number to string"123"
console.log(Math.ceil(4.1)); // 5 round up
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(Math.random()); // Example: 0.745328
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10)); // Random number between 1 and 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25)); // 5
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5
console.log(isNaN("Hello")); // true
console.log(isNaN(123));     // false
console.log(isFinite(1000));   // true
console.log(isFinite(Infinity)); // false
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false