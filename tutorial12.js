//array method examples

//forEach
//Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
const months = ["Jan", "Feb", "Mar", "Apr"];
months.forEach(function (month) {
    console.log(month);
})

//equivalent for loop code for the above example
for (let i = 0; i < months.length; i++) {
    console.log(months[i])
}

//forEach does not return any value
const returnedValue = months.forEach(function (month) {
    return month
})
console.log(returnedValue)

//forEach is only used to loop throught the array and perform some logging and processing
//doesn't return any value
months.forEach(function (month, index, array) {
    console.log(month, index, array)
})

/////////////////////////////////////////////////////////////

//map
const days = ["mon", "tue", "wed", "thu"];
const transformedArray = days.map(function (day) {
    return day.toUpperCase();
})
console.log(transformedArray)

//equivalent for loop code for the above example
converted = [];
for (i = 0; i < days.length; i++) {
    converted.push(days[i].toUpperCase());
}
console.log(converted)

//map does not change the original array
const users = [
    { first_name: "Mike", last_name: "Cherry", age: 30 },
    { first_name: "Tim", last_name: "Li", age: 45 },
    { first_name: "John", last_name: "Carpenter", age: 60 }
]

const userList = users.map(function (user) {
    return user.first_name + " " + user.last_name;
    //return `${user.first_name} ${user.last_name};`
})
console.log(userList);

//you can get specific data
const ages = users.map(function (user) {
    return user.age;
})
console.log(ages)

/////////////////////////////////////////////////////////////

//find
const employees = [
    {
        name: "David Carlson", age: 22
    },
    {
        name: "Johnny Old", age: 57
    },
    {
        name: "Michel Brown", age: 42
    },
    {
        name: "Michel Sybatsky", age: 27
    }
]

const employee = employees.find(function (employee) {
    return employee.name.indexOf("Michel") > -1
})
console.log(employee) // { name: "Johnny Old", age: 34 }

//equivalent loop for find
let emp;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].name.indexOf("Michel") > -1) {
        emp = employees[i];
        break;
    }
}
console.log(emp)
//it stops loop as soon as if finds the match, no need for an extra break statement

/////////////////////////////////////////////////////////////

//filter
//returns a new array that satisfy the provided test condition

const filterEmployee = employees.filter(function (filterEmployee) {
    return filterEmployee.name.indexOf("Michel") > -1
})
console.log(filterEmployee)
//it helps to find all elements

//equivalent loop
let filtered = [];
for (i = 0; i < employees.length; i++) {
    if (employees[i].name.indexOf("Michel") > -1) {
        filtered.push(employees[i])
    }
}
console.log(filtered)

/////////////////////////////////////////////////////////////

//every
//tests whether all elements in the array pass
//return boolean true or false
let numbers = [10, -30, 40, 59]

let allPositive = numbers.every(function (number) {
    return number > 0;
})
console.log(allPositive)
//it's great for checking certain criteria without writing a lot of code

/////////////////////////////////////////////////////////////

//some
//checks whether one of the elements passes the condition
//returns true or false
let containsPositive = numbers.some(function (pos) {
    return pos > 0;
})
console.log(containsPositive)

//example
let indexValue = -1;
const emply = employees.some(function (here, index) {
    const isFound = here.name.indexOf("Michel") > -1;
    if (isFound) {
        indexValue = index;
    }
    return isFound
});
console.log(emply, indexValue)

/////////////////////////////////////////////////////////////

//reduce
//Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
//resulting in a single output value
const values = [45, 425, 12, 0, 4];
const sum = values.reduce(function (accumulator, number) {
    return accumulator + number;
}, 0) //0 is the initialValue for the accumulator
//it is not required to put by the way
console.log(sum)

//example
const coordinates = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 4 }
];

const summation = coordinates.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, 0);

console.log(summation); // 6

//Source: https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/