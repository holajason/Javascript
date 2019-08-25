/*global console*/
/*eslint no-console: "off" */
var toppingItems = [];
var Pizza = function(price, toppingOne, toppingTwo, toppingThree){
    this.price = price;
    toppingItems.push(toppingOne);
    toppingItems.push(toppingTwo);
    toppingItems.push(toppingThree);
}

Pizza.prototype.addTopping = function(extraTopping){
    if(extraTopping === 'pineApple'){
        this.price += 1;
    
    }
    else  if(extraTopping === 'mushroom' || extraTopping === 'greenPepper' ||
            extraTopping === 'olive' || extraTopping === 'bannaPepper'){
        this.price += .5;
       
    }
    toppingItems.push(extraTopping);
}


var NewPizza = new Pizza(7.99, 'ham', 'beef', 'chicke');
NewPizza.addTopping('pineApple');
NewPizza.addTopping('olive');
console.log(NewPizza.price);
for(var count = 0; count < toppingItems.length; count++){
    console.log(toppingItems[count]);
}


//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// Exercises 1 - current dat and time in the format XPM : X: X

var clockTimer = function(){
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    if(currentHour >= 12){
        currentHour -= 12;
        console.log('Curent time is: ' + currentHour + " PM :" + currentMinute + ": " + currentSecond);
        
    }
    else{
        console.log('Curent time is: ' + currentHour + " PM :" + currentMinute + ": " + currentSecond);
    }
}

var currentDate = new Date();
var dayAndTime = function(){
    var currentDay = currentDate.getDay();
    if(currentDay === 0){
        console.log('Today is : Sunday');
    }
    else if(currentDay === 1){
        console.log('Today is : Monday');
    }
     else if(currentDay === 2){
        currentDay = 'Today is : Tuesday';
    }
     else if(currentDay === 3){
       console.log( 'Today is : Wednesday');
    }
     else if(currentDay === 4){
         console.log( 'Today is : Thursday');
    }
     else if(currentDay === 5){
         console.log('Today is : Friday');
    }
     else if(currentDay=== 6){
        console.log('Today is : Saturday');
    }
    clockTimer();    
}
console.log('print the date');
dayAndTime();

//Excise 2 - print current page content

function print_current_page(){
    window.print();
}

function display_something(){
    window.alert("Something");
}


//Excise 3 - get current date formate mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var currentMonth = currentDate.getMonth();
if(currentMonth < 10){
    currentMonth +=1;
    currentMonth = '0' + currentMonth;
}
var day = currentDate.getDate();
var year = currentDate.getFullYear();
console.log("Print the date in following format: ");
console.log('mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy');
console.log(currentMonth +'-'+day+'-'+year);
console.log(currentMonth +'/'+day+'/'+year);
console.log(day+'-'+currentMonth+'-'+year);


//Excise 4:  find the area of a triangle where lengths of the three of its sides are 5, 6, 7
//https://www.mathsisfun.com/geometry/herons-formula.html
var areaOfTriangle = function(sideOne, sideTwo, sideThree){
    var side = (sideOne + sideTwo + sideThree) / 2;
    var area = Math.sqrt(side*(side-sideOne)*(side-sideTwo)* (side-sideThree));
    return area;
}
console.log(areaOfTriangle(5,6,7));

//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


//Exercise 6: determine whether a given year is a leap year in the Gregorian calendar
var leapYear = function(year){
    if((year %100 === 0) ? (year % 400 ===0) : (year % 4) === 0){
        console.log("Leap Year");
    }
    else{
        console.log("Not a Leap Year");
    }
}
leapYear(2000);

//Exercise 7: find 1st January is being a Sunday between 2014 and 2050
for(var year = 2014; year < 2050; year++){
    var day = new Date(year, 0 ,1);
    if(day.getDay() === 0){
        console.log("January 1st begin a sunday in " + year );
    }
}

//Excise 8: Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
var randomNum = Math.floor(Math.random() * 10 +1);
//var guessNum = prompt("Guess a number between 1 - 10");
//if(guessNum === randomNum){
  //  console.log('Good Work');
//}
//else{
  //  console.log('No Matched. The number is: ' + randomNum);
//}

//Exercise 9: Write a JavaScript program to calculate days left until next Christmas. 
var christmas = new Date(currentDate.getFullYear(),11,25);
if(currentDate.getMonth() == 11 && currentDate.getDay() > 25){
    christmas.setFullYear(christmas.getFullYear() + 1);
}
var oneDay = 1000*60*60*24;
var dayTillNextCmas = Math.floor((christmas.getTime() - currentDate.getTime()) /oneDay);
console.log(dayTillNextCmas + ' days till Christmas');

//Exercise 10:  Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
function multiplyBy(){
    firstNum = document.getElementById("firstNumber").value;
    secondNum = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = (firstNum *secondNum)
}

function divideBy(){
    firstNum = document.getElementById("firstNumber").value;
    secondNum = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = (firstNum /secondNum)
}

