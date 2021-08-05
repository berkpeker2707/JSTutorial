var a = 5; //we can access this a anywhere

function adder() {
    let b = 7;
    console.log(a + b);
}

console.log(adder());

console.log(b); //cannot access it

{
    const c = 10
    console.log(c); //10
}

console.log(c); //cannot access it