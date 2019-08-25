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
dayAndTime();


