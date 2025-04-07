// setTimeout("console.log('This runs after 3 seconds.')",3000)

// setTimeout(()=>{
//     console.log("printing via using a function in a setTimeout after 2 second")
    
// },2000)


// setInterval(
//     "console.log('hello')",1000
// )

let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    if (counter === 5) {
        clearInterval(intervalId); // Stops the interval after 5 executions
    }
}, 1000);