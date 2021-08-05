function x() {
    var a = 7
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();

console.log(z);
z()

//Closures

let add = function (x) {
    return function (y) {
        console.log(x + y)
    }
}

let addByTwo = add(2);
addByTwo(3);

function Counter() {
    var count = 0;
    this.incrementCount = function () {
        count++;
        console.log(count)
    }
}

//console.log(count); //error
var adder = new Counter();
adder.incrementCount(); //1