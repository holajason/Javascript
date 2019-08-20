// JavaScript source code
var names = ['John', 'Mark', 'Mary'];
var year = new Array(1985, 1965, 1970);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
console.log(names)
//names[5] = 'Jack';
//console.log(names);
//Add element to the back of the array
names[names.length] = 'Jack';
console.log(names);

names[names.length] = 'Adam';
console.log(names);

//Different data type;
var john = ['John', 'Smith', 1985, 'designer', false];
john.push('blue');  //add to the back
console.log(john);
john.unshift('Mr.');    //adding to the front
console.log(john);
john.pop(); //Remove from the back
console.log(john);
john.shift();
console.log(john); // remove the front element

console.log("Index of Year: " + john.indexOf(1985));
console.log("Index of Year: " + john.indexOf(85));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);


//JS coding Chanllenge 3, Tips calculator
var tipCalculator = function (billAmount) {
    if (billAmount > 200) {
        return billAmount * .1;
    }
    else if (billAmount > 50 && billAmount < 200) {
        return billAmount * .15;
    }
    else {
        return billAmount * .2;
    }
}


var newBillCalculator = function (billAmount) {
    if (billAmount  > 200) {
        return billAmount * .1 + billAmount;
    }
    else if (billAmount > 50 && billAmount < 200) {
        return billAmount * .15 + billAmount;
    }
    else {
        return billAmount * .2 + billAmount;
    }
}

var tips = new Array(tipCalculator(124), tipCalculator(48), tipCalculator(268));
var newBill = new Array(newBillCalculator(124), newBillCalculator(48), newBillCalculator(268));
console.log(tips);
console.log(newBill);