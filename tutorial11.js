//first html & css is parsed
//then dome trees created
//and then from the render tree a layout is created
//defer is like async, you use it if you need other script executions

//storage in js
//localStorage persists even after closing
//sessionStorage you lose data once session is over,
//like when you close browser

//save
localStorage.setItem("key", "value");
//get saved data
let data = localStorage.getItem("key");
console.log(data);

//Source: https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/