const arr =[0,1,2,3,4,5,6,7,8,9,10];
const arr2=[0,1,2,3,4,5,6,7,8];
console.log(arr);
console.log(typeof(arr.join('-'))); // Join convert array into string and part between ('known as seperator');
console.log(arr.join('-')); // Join convert array into string and part between ('known as seperator');


console.log(`Array into string->  ${arr.toString()}`);
console.log(` Array Slice(2,5)->  ${arr.slice(2,5)}`); // take value of starting from index 2 and between 5(left index 5);

arr.forEach(element=>{
    console.log(element)
})

arr.forEach((val,idx,arr)=>{  // mention array is optional in function parameterm
    console.log(`${val} : ${idx}`)
})


arr.pop(); // remove a value from last
console.log(arr);

arr.push(13); // add value from last;
console.log(arr);

arr.shift(); // 	Removes the first element
console.log(arr);
arr.unshift(10); // 	add from value from start
console.log(arr);

delete arr[2]; // Don't use delete with arrays unless you really want a hole (empty item). delete value from index
console.log(arr);

const conct =arr.concat(arr2); // we have to store the value of concated values
console.log(conct)

arr.sort((a,b)=>a-b); // sort the array but it convert everything into string and then sort  alphabetically so if you are sorting some kind of number use a function.like this {array.sort((a,b) => a-b)}
console.log(arr)

arr2.splice(2,5); // Remove from first index to last given next index { 2,3,4,5,6}
console.log(arr2)