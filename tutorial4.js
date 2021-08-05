//you can make functions in two ways
function a() {
    console.log("function a");
}

const b = () => {
    console.log("arrow function b");
}

const c = (name) => {
    console.log(`My name is " + ${name}`);
}

const greet = () => {
    const prefix = "Mr"
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()(`Abe`));