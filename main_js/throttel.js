function throttel(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        fn(...args);
    }
}

const message = (text) => {
    console.log(`Message ${text}`);
}

const sendMessageWithThrottle = throttel(message, 1000);

sendMessageWithThrottle("Hii");
sendMessageWithThrottle("Hii Harsh");  // ignore because it send before ending the timer
sendMessageWithThrottle("hii master"); // ignore because it send before ending the timer

setTimeout(() => {
    sendMessageWithThrottle("Namste master Sahab") // it will run because it wait till complete timer.
}, 2000);

/*
⚡ Throttle
✅ Definition: Ensures that a function is called at most once every specified time interval, no matter how often the event happens.

👉 Example: On a scroll event, you might want to update something only every 500ms, not on every tiny scroll change.

🔨 How it works
Fires immediately or after the first event.

Ignores further events until the time window passes.

*/