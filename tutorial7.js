//hoisting in js
//var is hoisted up with undefined
//let and const are hoisted up but not initialized
//function definitions are also hoisted up and stored as they are

function consoleNum() {
    console.log(num);
    var num = 10;
}

consoleNum();

//if we used let, it'd give an error.
//var is seen top in run time, then console.log(num)