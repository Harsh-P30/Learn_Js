// function functionName(...restParameter) {
//     // code that uses restParameter
//   }

//rest operator combines the values of argument as input into a array. 

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