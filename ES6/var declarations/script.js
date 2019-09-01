// Lecture : let and const
/*
//ES5 var
var name5 = 'John Smith';
var age5 = 23;
name5 = 'John Miller';

console.log(name5);

// ES6
const name6 = 'John Smith';     //const cannot be mutate
let age6 = 23;          //let can be change
name6 = 'Jogn Miller';
console.log(name6);


//ES5
function driverLicence5(passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = '1990';
        }
        console.log(firstName +' born in ' + yearOfBirth + 'is now officially allowed to drive a car.');
}
driverLicence5(true);


//ES6
function driverLicence6(passedTest){
     let firstName ;
    const yearOfBirth = '1990';
    if(passedTest){
        firstName = 'John';
        }
        console.log(firstName +' born in ' +yearOfBirth + 'is now officially allowed to drive a car.');
}

driverLicence6(true);

//Block and IIFE
//ES 6 
{
const a = 1;
let b = 2;
var c = 3;
}

//console.log(a+b);
console.log(c);

//ES 5 IIFE
(function(){
    var c = 3;
})();


//String in ES 5 and ES 6
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

//ES5
function calcAge (yearOfBirth){
    return 2019 - yearOfBirth;
}

console.log(firstName + ' ' + lastName +' was born in ' + yearOfBirth + ', now is ' + calcAge(yearOfBirth));

//ES6

const n = `${firstName} ${lastName}`;

console.log(`This is ${firstName} ${lastName} was born in ${yearOfBirth} and now is ${calcAge(yearOfBirth)}`);

console.log(n.startsWith('J'));


//Arrow function
const years = [1990,1965,1982,1937];
//ES 5
var ages5 = years.map(function(curElement){
    return 2019 - curElement;
});

console.log(ages5);

//ES 6 - Three ways of writing string in ES6
let ages6 = years.map(currentEle => 2019 - currentEle);
console.log(ages6);

ages6 = years.map((ele, index) => `Age Element ${index} : ${2019 - ele}`);
console.log(ages6);

ages6 = years.map((ele, index) => {
    const now = new Date().getFullYear();
    const age = now - ele;
    return `Age element ${index +1} : ${age}.`
});
console.log(ages6);


//ES5
/*
var box5 = {
    color : 'green', 
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var string = 'This is Box Number ' +self.position + ' and it is ' + self.color;
            alert(string);
        })
    }
}

box5.clickMe();
*/


//ES6
const box6 = {
    color : 'green', 
    position : 1,
    clickMe : function(){
        document.querySelector('.green').addEventListener('click', () => {
            var string = 'This is Box Number ' +this.position + ' and it is ' + this.color;
            alert(string);
        })
    }
}

box6.clickMe();


function Person(name){
    this.name = name;
}
//ES 5
/*
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(currentEle){
        return this.name + ' is friend with ' + currentEle;
    }.bind(this));
    console.log(arr);
} 

var friends =['Bob', 'Jame', 'Mark'];
new Person('John').myFriends5(friends);

//ES 6
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(friends => `${this.name} is friend with ${friends}`);
    console.log(arr);
} 

var friends =['Bob', 'Jame', 'Mark'];
new Person('John').myFriends6(friends);
new Person('Mike').myFriends6(friends);
*/


//Lecture: Destructing

//ES5
/*
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/
//ES 6
const [name,age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName : 'John',
    lastName : 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName :a , lastName :b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new Date(). getFullYear() - year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
/*
// Array
const boxes = document.querySelectorAll('.box');
//ES 5 => list to array

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(currEle){
    currEle.style.backgroundColor = 'dodgerBlue';
})

//ES 6 
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(currentEle => currentEle.style.background = 'dodgerBlue');


//ES5 
for(var index = 0; index < boxesArr5.length; index++){
    if(boxesArr5[index].className === 'box blue'){
        continue;
    }
    boxesArr5[index].textContent = 'I Changed to Blue!';
}

//ES 6
for(const currEle of boxesArr6){
    if(currEle.className.includes('blue')){
        continue;
    }
    currEle.textContent = 'I Changed to Grre!';
}


//ES 5
var ages = [12,17,8,21,14,11];
var fullAge = ages.map(function(currentEle){
    return currentEle >= 18;
})
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);


//ES 6
console.log(ages.findIndex(currentEle => currentEle >= 18));
console.log(ages.find(currentEle => currentEle >= 18));

//Leture: Spread operator

function addFourAges (a,b,c,d){
    return a+b+c+d;
}
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//ES5
var ages1 = [18,30,12,21]
var sume2 = addFourAges.apply(null,ages1);
console.log(sume2);

//ES 6
const sum3 = addFourAges(...ages1); //... expand its array component
console.log(sum3);

const familySmith = ['john','jane','mark'];
const familyMiller = ['mary', 'bob','ann'];
const bigFamily = [...familySmith, 'Lily',...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h,...boxes1];

Array.from(all).forEach(currentEle => currentEle.style.color = 'purple');


////////////////////////////////////
//Lecture: Rest Parameters

//ES 5
function isFullAge5(){
   // console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    argArr.forEach(function(cur){
        console.log((2019 - cur) >= 18);
    })
}
isFullAge5(1990,1993,1955);

//ES 6 
function isFullAge6(...years){
 //   console.log(years);
    years.forEach(cur=>console.log(2019 - cur) >= 18);
}
isFullAge6(1990,1993,1955);
*/

//ES 5
function isFullAge5(limit){
   // console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    argArr.forEach(function(cur){
        console.log((2019 - cur) >= 18);
    })
}
isFullAge5(1990,1993,1955);

//ES 6 
function isFullAge6(limits, ...years){
 //   console.log(years);
    years.forEach(cur=>console.log(2019 - cur) >= limits);
}
isFullAge6(16, 1990,1993,1955);

















