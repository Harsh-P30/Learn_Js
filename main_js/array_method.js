const arr =[0,1,2,3,4,5,6,7,8,9,10];
const arr2=[0,1,2,3,4,5,6,7,8];
console.log(arr);
console.log(typeof(arr.join('-'))); // Join convert array into string and part between ('known as seperator');
console.log(arr.join('-')); // Join convert array into string and part between ('known as seperator');


console.log(`Array into string->  ${arr.toString()}`);
console.log(` Array Slice(2,5)->  ${arr.slice(2,5)}`); // take value of starting from index 2 and between 5(left index 5);



arr.pop(); // remove a value from last
console.log(arr);

arr.push(13); // add value from last;
console.log(arr);

arr.shift(); // 	Removes the first element
console.log(arr);
arr.unshift(10); // 	add from value from start
console.log(arr);

delete arr[2]; // Don't use delete with arrays unless you really want a hole (empty item). delete value from index
delete arr[4]; // Don't use delete with arrays unless you really want a hole (empty item). delete value from index
console.log(arr);

// const conct =arr.concat(arr2); // we have to store the value of concated values
// console.log(conct)

// arr.sort((a,b)=>a-b); // sort the array but it convert everything into string and then sort  alphabetically so if you are sorting some kind of number use a function.like this {array.sort((a,b) => a-b)}
// console.log(arr)

// arr2.splice(2,5); // Remove from first index to last given next index { 2,3,4,5,6}
// console.log(arr2)

// console.log(arr.reverse());  // to reverse a array

// arr.forEach(element=>{  
//     console.log(element)
// })

// arr.shift(); // removing first element (because first is element empty)
// arr.forEach((val,idx,arr)=>{  // mention array is optional in function parameterm
//     console.log(`${val} : ${idx}`)
// })

// console.log("Map is a method that used to preform some operation on each element of array and put into a new array");
// let mapedApp = arr.map(num => num*2); // It does not modify the original array.
// console.log(mapedApp); 


// console.log(" Filter is a method that used to filter element and create a new array");
// var result = arr.filter(a => a > 5);
// console.log(`filter a>5 :-> ${result}`)
// var result = arr.filter(a => a % 5 == 0);
// console.log(`using filter a%5 :-> ${result}`)
// var result = arr.filter(a => a*5); 
// console.log(`using filter a*5(no change we are trying to multiply by 5 and that is work of map ) :-> ${result}`)
