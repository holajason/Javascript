//Lecture: Classes

//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var John = new Person5('John',1993,'engineer');

//ES6
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calcAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting(){
        console.log("Hello There");
    }
}

const mark = new Person6('Mark',1995, 'teacher');
Person6.greeting();



/******************************************************/
/******************************************************/
//Classes with subclasses

//ES5 - subclass
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();


//ES6 subclass
class Athlete6 extends Person6{
    constructor(name,yearOfBirth, job, olympicGames,medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    womMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const MarkAthlete6 = new Athlete6('Mark', 1996, 'Basketball Player', 3,12);
MarkAthlete6.womMedal();
MarkAthlete6.calcAge();








































































































































