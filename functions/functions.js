
function ageCalculation(birthYear) {
    return 2019 - birthYear;
}

var johnAge = ageCalculation(1985);
var markAge = ageCalculation(1950);
var janeAge = ageCalculation(1993);
console.log(johnAge, markAge, janeAge);

//Function declaration
function yearTillRetirement(birthYear, person) {
    var age = ageCalculation(birthYear);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(person + " retires in " + retirement + " Years");
    }
    else {
        console.log(person + " is already retired.");
    }
}

yearTillRetirement(1985, 'John');
yearTillRetirement(1950, 'Mark');
yearTillRetirement(1993, 'Jane');


//Function expressions
var whatDoYouDO = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids';
        case 'driver':
            return firstName + ' drives a SUV';
        case 'desinger':
            return firstName + ' design websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDO('teacher', 'john'));
console.log(whatDoYouDO('desinger', 'john'));
console.log(whatDoYouDO('lumber', 'john'));

