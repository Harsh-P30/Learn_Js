// function functionName(...restParameter) {
//     // code that uses restParameter
//   }

//rest operator combines the values of argument as input into a array.
//In traditional JavaScript functions, there was an arguments object that stores all passed arguments. However, the arguments object is not an array, so you couldn’t directly use array methods on it.

//Rest parameters, on the other hand, are an actual array, making it more useful and easier to work with.

/*
// before Rest Parameter  "we use Arguments Object"
function total(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log("total valuse "+total(1,2,3,4,5));  // concatinate number and string
console.log(`total valuse ${total(1,2,3,4,5)}`); // use backticks to create template literal , "${....} -> known as interpolation and this use for insert javascript code into string"

*/
// Using Rest paramenter
/*
let sum = 0;
let sum2 = 0;
function add(a, b, ...c) {
    console.log(a)
    console.log(b)
    for (index in c) {  // we can access each element using "for...in" or "for...of" loop; 
        sum = sum + c[index];
    }

    for (index of c) {
        sum2 = sum2 + index;
    }
    return sum - sum2;  // from 2nd index
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));



*/

/*
// Rest Parameter using Arrow funtion 
const sum = (...num) => num.reduce((acc,num) => acc+num ,0);
console.log(sum(1,2,3,4));


*/


/*
Key Points to Remember
The rest parameter must be the last parameter in the function definition.

It captures all remaining arguments passed to the function and stores them as an array.

// You can combine rest parameters with other regular parameters. */