// closure capture variable not values;

// function outer(){
//     let a=10;
//     inner();
//     function inner(){
//         a++;
//         console.log(a); //11 
//     }
// }
// outer() // return 11 but print a line no 8 and using this syntax we have to invoke 'inner' function before decelaration


// function outer(){
//     let a=10;
//     function inner(){
//         a++;
//         return a;
//     }
//     console.log(inner()) // console the actual funtion directly ; 
// }
// outer()


function outer(){
    let a=10;
    function inner(){
        a++;
        console.log(a);
    }
   return inner();   // it will give you 'undefined'
}
console.log(outer()); // it will give you '11' and then 'undefined';





