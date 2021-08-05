//variable can be string number or other types
//js is loosely-typed, which meang you don't have to state what type
//3 types const, var, let

//const cannot be redeclared within scope, cannot be updated, have declared with initialization
//var can be redeclared, can be updated, functionally or global, can be declared withiout initialization
//let blocked like const, within scope; cannot be redeclared, can be updated, can be declared withiout initialization

var a = 3;

var a = 4;

console.log(a); //logs 4

let a = 5;

let b = 6;

console.log(b); //syntax error since it cannot be redeclared

const c = 1;

const c = 2;

console.log(c); //syntax error since it cannot be redeclared or updated