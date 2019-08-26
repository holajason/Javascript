

var year = [1990,1965,1937,2005,1998];
function arrayCalc(arr, fooFunction){
    var arrRes = [];
    for(var index = 0; index < arr.length; index++){
        arrRes.push(fooFunction(arr[index]));
    }
    return arrRes;
}

function calcAge(element){
    return 2016 - element;
}

function isFullAge(element){
    return element >= 18;
}

function maxHeartRate(element){
    if(element >= 18 && element <= 81){
        return Math.round(206.9 - (0.67 * element));
    }
    else{
        return -1;
    }
}

var age = arrayCalc(year, calcAge);
console.log(age);

var fullAge = (arrayCalc(age, isFullAge));
console.log(fullAge);

var heartRate = arrayCalc(age, maxHeartRate);
console.log(heartRate);


//Leture: Function return functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' ,can you please explain what UX desing is?');
        }
    }
    else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach, ' + name + ' ?' );
        }
    }
    else{
        return function(name){
               console.log('What do you do? ' + name + ' ?');
        }
    }
}

var teacherInterviewQuestion = interviewQuestion('teacher');
teacherInterviewQuestion('john');

var desingerQuestion = interviewQuestion('designer');
desingerQuestion('Jane');
//Read left -> right, read teacher first -> mark
interviewQuestion('teacher')('Mark');


//Immediately Invoked Function Expression (IIFE)
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

(function(){
 var score = Math.random() * 10;
    console.log(score >= 5);
 })();

//For data privacy, data does not interfere variable
(function(goodLuck){
 var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
 })(3);


// *********** Leture: Closures *****************

function retirement(retireAge){
    var str = ' years left until retirement.';
    return function (yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retireAge - age) + str);
    }
}


var retireUS = retirement(66);
var retireGermany = retirement(65);
var retirementIceland = retirement(67);
retireUS(1990);
retireGermany(1990);
retirementIceland(1990);

//retirement(66)(1990);

//Chanllenge 8: rewrite interview question with closure

function interviewQuestions(job){
    return function(name){
         if(job === 'designer'){
            console.log(name + ' ,can you please explain what UX desing is?');
        }
        else if(job === 'teacher'){
            console.log('what subject do you teach, ' + name + ' ?' );
        }
        else{
              console.log('What do you do? ' + name + ' ?');
        }
    }
}

interviewQuestions('teacher')('john');


//Bind. Call And Apply methods
var john = {
    name : 'John',
    age : 26,
    job: 'teacher',
    presentaion: function(style, timeOfDay){
    if( style === 'formal'){
    console.log('Good ' + timeOfDay + ' Ladies and Gentelmen! I\'m ' + this.name + '. I\'m a' + this.job + ' and I\m ' + this.age + ' old.');
    }
        else if( style === 'friendly'){
    console.log('Hey! What\'s up! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' old.'+ ' Have a nice ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age : 35,
    job: 'desinger'
}
john.presentaion('formal', 'morning');
//Call : method borrowing
john.presentaion.call(emily, 'friendly', 'afternoon');

//john.presentaion.apply(emily,['friendly','afternoon']);

//Bind method
var johnFriendly = john.presentaion.bind(john, 'friendly');

johnFriendly('night');


var emilyFriendly = john.presentaion.bind(emily, 'formal');
emilyFriendly('afternoon');




//Recall from the first question(top)
function isFullAges(limit, element){
    return element >= limit;
}

var ages = arrayCalc(year, calcAge);

var fullAgeInJapan  = arrayCalc(ages, isFullAges.bind(this,20));
console.log(ages);
console.log(fullAgeInJapan);





































