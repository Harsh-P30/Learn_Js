var arr=[0,1,2,3,4,5,6,7,8,9]//array in numbers
let arr2 = ["apple", "fgh","banana", "orange"];  // Array of strings
let arr3 = new Array(5); // Creates an empty array with length 5

console.log(arr[0])
console.log(arr2[0])
arr.push(88)//add element into last
console.log(arr)
arr.pop()//remove element into last
console.log(arr)
arr.shift();//remove element from first
console.log(arr)
arr.unshift(11)//add element into biginning
console.log(arr)
console.log(arr.indexOf(8))//index of 8 is 8
console.log(arr2.indexOf("banana"))
console.log(arr2.indexOf("pomegranet"))
console.log(arr.includes(4))
arr.forEach(num=>console.log(num))//iterate each element
arr2.sort()
console.log(arr2)
console.log(arr2.reverse())

//learn these thinks also map,filter,spread  https://www.w3schools.com/js/js_array_iteration.asp



const multiArr=[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]
console.log(multiArr)

console.log(multiArr[0][3])