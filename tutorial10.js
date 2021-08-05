//promises, async
const promise = new Promise((resolve, reject) => {
    let value = true;
    if (value) {
        resolve("Value is true")
    } else {
        reject("Value is not true, error")
    }
})

promise.then((x) => { console.log(x) }).catch((err) => console.log(err))

//instead of then/catch we call it async/await
async function asyncCall() {
    const result = await promise
    console.log(result)
}

asyncCall()
//this above code is much cleaner and avoids the callback hell