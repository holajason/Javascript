/*
 *  Objects and Properties
 */

//{} for objects 
//[] for arrays
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    bithYear: 1990,
    family: ['Jane', 'Mark', 'Tom', 'HBO'],
    job: 'Teacher',
    isMarried: false,
    //calculate age by function, method of john
    calcAge: function () {
        john.age = 2018 - this.bithYear;
    }
};

console.log(john);
console.log(john.firstName);

console.log(john['lastName'], john['job']);
console.log(john.family);
john.job = 'driver';
john['isMarried'] = true;
console.log(john);
john['Hobbit'] = 'Baseball';
console.log(john);
var jane = new Object();
jane.name = 'Jane';
jane.bithYear = 1960;
jane['lastName'] = 'Smith';
console.log(jane);

// Object methods
//console.log(john.calcAge(1990));
john.calcAge();
console.log(john);


//Coding Challenge 4


var John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 105,
    height: 1.85,
    
    calcBMI: function () {
       this.calcBMI = this.mass / (this.height * this.height);
       return this.BMI;
    }
   
}

var Mark = {
    firstName: 'Mark',
    lastName: 'William',
    mass: 75,
    height: 1.75,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}


console.log(John);
console.log(Mark);
if (John.calcBMI() === Mark.calcBMI()) {
    console.log("Both have same BMI");
}
else if (John.BMI > Mark.BMI) {
    console.log("John has a higher  BMI of: " + John.BMI);
}
else {
    console.log("Mark has a higher BMI of: " + Mark.BMI);
}

*/

/*
//Loops and iteration
for (var index = 0; index <= 10; index++) {
    console.log(index);
}


var john = ['John', 'Smith', 1985, 'designer', false];
for (var index = 0; index < john.length; index++) {
    console.log(john[index]);
}

var index = 0;
while (index < john.length) {
    console.log(john[index]);
    index++;
}



var john = ['John', 'Smith', 1985, 'designer', false, 'green'];

for (var index = 0; index < john.length; index++) {
    if (typeof john[index] !== 'string') {
        continue;
    }
    console.log(john[index]);
}

console.log("Break if integer is encounter");
for (var index = 0; index < john.length; index++) {
    if (typeof john[index] !== 'string') {
        break;
    }
    console.log(john[index]);
}

for (var index = 0; index < john.length; index++) {
    if (typeof john[index] === 'number') {
        console.log(john[index]);
    }
    continue;
}


console.log("Loop backward");
for (var index = john.length; index >= 0; index--) {
    if (typeof john[index] !== 'string') {
        continue;
    }
    console.log(john[index]);
}
*/

//JS Section 2: Javascrip Basic : last Challenge 5

/*
  John: Bill were $124,48,268,180,42
 Implement a tip calculator using objects and loops:
 1. Create an object with an array for the vall values
 2. Add a method to calculate the tip
 3. THis method should include a loop to iterate over
 all the paid bills and do the tip calculations
 4. As an output, create 1) a new array containing
 all tips, and 2) an array containing final paid amount
 (bill + tips)
  
 Extra after finishing above
 Mark: 77,375,110,45
 tip percent 20% for bills less than 100, 10% between 100 -300
 25% if bill > 300
 5. Implement the same functionality as before but with mark tipping rules
 6. Create a function(not method) to calculate the average tips 
 of given array of tips.
 7. Calculate the average tipe for each family
 8. Log to the console which family paid the highest tips on avg

 */
 
var john = {
    bills: [124, 408, 268, 180, 4552],
    calcTips: function () {
        this.tips = [];
        this.finalBill = [];
        for (var index = 0; index < this.bills.length; index++) {
            var percentage;
            if (this.bills[index] > 200) {
                percentage = .1;
            }
            else if (this.bills[index] > 50 && this.bills[index] < 200) {
                percentage = .15;
            }
            else {
                percentage = .2;
            }
            this.tips[index] = this.bills[index] * percentage;
            this.finalBill[index] = this.bills[index] + this.tips[index];
        }
    }
}

john.calcTips();
console.log(john.bills);
console.log(john.tips);
console.log(john.finalBill);


var Mark = {
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalBill = [];
        for (var index = 0; index < this.bills.length; index++) {
            var percentage;
            if (this.bills[index] > 300) {
                percentage = .25;
            }
            else if (this.bills[index] >= 100 && this.bills[index] <= 300) {
                percentage = .1;
            }
            else {
                percentage = .2;
            }
            this.tips[index] = this.bills[index] * percentage;
            this.finalBill[index] = this.bills[index] + this.tips[index];
        }
    },
}

Mark.calcTips();
console.log(Mark.tips);
var avgTip = function calcTips(tips) {
    var sum = 0;
    for (var index = 0; index < tips.length; index++) {
        sum += tips[index];
    }
    return sum /tips.length;
}

var johnFamilyAvgTip = avgTip(john.tips);
var markFamilyAvgTip = avgTip(Mark.tips);
console.log("John's tips avgerage: " + johnFamilyAvgTip);
console.log("Mark's tips average: " + markFamilyAvgTip);

var isHigherTips = johnFamilyAvgTip > markFamilyAvgTip ? 'John Family has higher average tips'
    : 'Mark Family has higher average tips';
console.log(isHigherTips);