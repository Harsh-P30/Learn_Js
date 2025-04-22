let a=4;
const b=5;
var c =3;

console.log(a,b,c);

a=10;
// b=10;  // TypeError: Assignment to constant variable. 
c=10;
console.log(a,b,c);

// let a=5; // SyntaxError: Identifier 'a' has already been declared (can't redeclared block scope variable)
// const b=12; // SyntaxError: Identifier 'a' has already been declared (can't redeclared block scope variable) 
var c=15;  // function scoped
console.log(a,b,c);
