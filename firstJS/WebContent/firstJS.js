/**
 

var firstName = "john";
console.log(firstName);
var lastName ="Snow";
console.log(lastName);
var age = 27;
console.log(age);

var fullName = true;
console.log(fullName);

var job;
console.log(job);
job = "teacher";
console.log(job);

//Variable naming rule
var starting = "HEllo WOrld!";
console.log(starting);

var firstName, lastName, jobTitle, isMarried;

firstName = "John";
lastName = prompt("What is " + firstName + " last Name? ");
jobTitle = prompt("What does " + firstName + " do for living");
isMarried = false;

console.log(firstName + ' ' + lastName + " is a " + jobTitle + ". Is he married? " + isMarried);
alert(firstName + ' ' + lastName + " is a " + jobTitle + ". Is he married?" + isMarried);


var now, johnYear, markYear;
var johnAge, markAge;
now = 2018;
johnAge = 28;
markAge = 30;

johnYear = now - johnAge;
markYear = now - markYear;

var isJohnOlder = johnYear > markYear;
alert("Is John older than mark? " + isJohnOlder);
console.log(typeof isJohnOlder);

var now, johnYear, legalAge;
now = 2018;
johnYear = 1989;
legalAge = 21;
var isLegalAge = now - johnYear >= legalAge;
alert("Is legal to purchase alchohol? " + isLegalAge);

*/