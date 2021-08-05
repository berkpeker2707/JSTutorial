console.log(this);

function myFunc() {
    console.log(this)
}

const obj = {
    bool: true,
    myFunc: myFunc
}

obj.myFunc();


//explicit binding
const student_1 = {
    name: "Randy",
    displayName_1: function displayName() {
        console.log(this.name)
    }
}

const student_2 = {
    name: "Earl",
    displayName_2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName_1();
student_2.displayName_2();

//call forced displayName_1 to use second object as its this
student_1.displayName_1.call(student_2);

const myData = {
    name: "Rajat",
    city: "Delhi",
    displayStay: function () {
        console.log(this.name, "stays in", this.city)
    },
}
yourData = {
    name: "Berk",
    city: "Istanbul",
}
myData.displayStay();

myData.displayStay.call(yourData);

// create an object yourData and try to use displayStay