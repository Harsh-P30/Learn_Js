/* Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope (global or function scope) before code execution.

Only declarations are hoisted, not initializations.

Applies to var, function, and (partially) let/const.

*/

console.log(varr);  // hoisted and gives undefined (not error)
var varr = 9;

// console .log(lett);   // ReferenceError: Cannot access 'lett' before initialization(because it goes to Temproral dead zone)
// let lett=0;

// console.log(constt);   // ReferenceError: Cannot access 'lett' before initialization(because it goes to Temproral dead zone)
// const constt=9;

functionn();   // Function declarations are fully hoisted with their definitions. it means the whole finction code is hoisted;
console.log(functionn);    /*ƒ functionn (){          // if you run this on the browser you can see it;
                               console.log("ky haal");
                                }

                                */



function functionn() {
    console.log("Am i going to hoisted");
}
