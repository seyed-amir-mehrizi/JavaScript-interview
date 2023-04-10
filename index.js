
//recursive with JavaScript

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1)
}

console.log("factorial(n) : " , factorial(5))








//event loop in JavScript

console.log("1");
setTimeout(() => {
    console.log("2");
})


setTimeout(() => {
    console.log("3");
}, 0);


new Promise((resolve, reject) => {
    console.log("4");

    resolve();
})
    .then(() => console.log('5'))
setTimeout(() => {
    console.log("6");
}, 10);


console.log("7");


//// why :


// This code snippet will output the following to the console:

// 1
// 4
// 7
// 5
// 2
// 3
// 6

// First, the code starts executing and the line with console.log("1") gets executed and prints "1" on the console.

// Then, the first setTimeout function is encountered. This function is asynchronous and its callback function is queued to be executed after a certain amount of time.
//  However,the execution of the current thread continues immediately. Therefore, the next line (setTimeout with delay 0) executes immediately.

// The second setTimeout with delay of 0 also queues its callback function but does not execute it yet as the event loop has already moved forward.

// Next, the Promise constructor is called and '4' is logged.

// The Promise.then() function is called and logs '5'.

// Now, the event loop moves back and the first setTimeout's callback function is executed, logging '2'.

// After that, the second setTimeout's callback function is executed, logging '3'.

// Finally, the third setTimeout's callback function is executed, logging '6'.

// And lastly, the console.log("7") statement is executed and logs '7'.





















