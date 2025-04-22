
let globalScope='Hello Master';
function functionScope(){
    let name='Harsh!';
    console.log(`${globalScope} ${name}`);
}

functionScope();
// name;  // gives the error because it is not into the scope or in lamen language we can't reach to 'name';






// block scope

{
    let x=10;
    console.log(x);
}
// console.log(x);   // accessing out of block so it will give you ReferenceError: x is not defined