function debouncing(fn , delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId);

        timerId = setTimeout( () =>{
            fn(...args);
        },delay)
    }
}


function search(query){
    console.log(`searching for ${query}`);
}


const searchWithDebounce = debouncing(search,1000);





searchWithDebounce("H");
searchWithDebounce("Har");
searchWithDebounce("Harsh");

setTimeout(()=>{
    searchWithDebounce("After delay");
},5000)
setTimeout(()=>{
    searchWithDebounce("After ");
},5000)


/* 
🌊 Debounce
✅ Definition: Ensures that a function is called only after a certain amount of time has passed since the last event.

👉 Imagine you’re typing in a search box, and the app only sends the search request after you stop typing for, say, 300ms.

🔨 How it works
Fires once after the last event.

Resets the timer each time the event happens.
*/