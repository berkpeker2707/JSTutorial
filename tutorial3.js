//storing in array

let a = 5;
const b = 7;
var c = "howdy";

const array = [a, b, c];

//or you can do directly

const arr = [5, 7, "howdy"];

console.log(array, arr);

//arrray methods
//map, filter, forEach, find, reduce

//map - creates new copy of the original array
//map iterates over original array and takes a call back function as an argument

const s = [0, 4, 6, 2, 8];

const d = s.map(function (item) { return item * 2 });
console.log(d);

//filter creates a new array with elements giving condition
const words = ["baba", "ulala", "tata", "kugavragrgarhahah"];
const ans = words.filter((words) => { return words.length > 6 });
console.log(ans);

//without array method
let newArr = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6)
        newArr.push(words[i])
}

console.log(newArr);

//foreach
//foreach doesn't return a new array and similar to map
//return a new array with map while even numbers are multiplied with 2
let arrr = [1, 2, 3, 4, 5, 6, 7];
function consolelogEvenNumbers(arrr) {
    let data = arrr.map((num) => (num % 2 === 0 ? num * 2 : num * 1))

    console.log(data);
}
consolelogEvenNumbers(arrr)

//with foreach
function consolelogEvenNumbersWithForEach(arrr) {
    let data = arrr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
    console.log(data); //undefined
}
consolelogEvenNumbersWithForEach(arrr);

//with mapping we can do chaining in map but not in forEach
function consoleEven(arrr) {
    let data = arrr
        .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
        .map((num) => (num % 2 === 0 ? num / 2 : num * 1))

    console.log(data);
}
consoleEven(arrr)

//note both forEach and map doesn't change the original array