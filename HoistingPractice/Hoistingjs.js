///////////////////////////////////////
// Lecture: Hoisting
calcAge(1990);
//Function
function calcAge(year) {
    console.log (2019 - year);
}

//retirement(1959);
var retirement = function (year) {
    console.log(65 - (2019 - year));
}




//Variable
var age = 23;
//console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);










///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

/*
console.log(this);
calculateAge(1984);
function calculateAge(year) {
    first();
    console.log(2019 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1984
};
//method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();

