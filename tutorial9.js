//whenever we create object of function, js gives it same properties and methods
//all this comes via prototypes
//__proto__ is the object where js is putting it all

let arr = ["Abe", "Li"];
console.log(arr.__proto__.forEach)
console.log(arr.__proto__) // same as Array.prototype
console.log(arr.__proto__.__proto__) // same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__) // null

//this is called proto chain
//We will always find Object.prototype behind the scenes.
//That's why you may have heard that everything in JS is an object.

//js is a single threaded language, that's why we need asynchronous 
//to reduce time and waiting

//setTimeout()
//setInterval()

setTimeout(() => {
    console.log("Here wait 3 seconds")
}, 2000);

const timer = setInterval(() => {
    console.log("Here keep coming back until you clear me for 2 seconds")
}, 2000);

clearInterval(timer); //clear like this

//examples

console.log("Hellü")
setTimeout(() => {
    console.log("lovely folk!")
}, 0)
console.log("HERE!")

for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}