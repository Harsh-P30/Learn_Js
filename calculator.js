// A function that takes another function as an argument or returns a function.

function calculator(a,b,operation){
    return operation(a,b)
}
const add=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const multi=(a,b)=>{
    return a*b
}
const div=(a,b)=>{
    return a/b
}
console.log(calculator(7,8,add));
console.log(calculator(7,8,sub));
console.log(calculator(7,8,multi));
console.log(calculator(7,8,div));