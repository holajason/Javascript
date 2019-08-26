//Function Constructor
/*
var john = {
    name: john,
    yearOfBirth: 1990,
    job: 'teacher'
};

//Function contructor always start with a capital letter(P in this case)
var Person = function (
    name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
 
}

Person.prototype.calcAge = function () {
    console.log(2016 - this.yearOfBirth);
}


Person.prototype.lastName = 'Smith';

//'new' create a new object
var john = new Person('john', 1990, 'teacher');

var jane = new Person('Jane', 1950, 'desinger');

var mark = new Person('Mark', 1940, 'retired');
john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);


//Object.create
var personProto = {
    calculateAge : function(){
        console.log(2019 - this.yearOfBirth);
    }
};


var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
    name: {value : 'Jabe'},
    yearOfBirth : {value: 1950},
    job : {value : 'desinger'}
})
*/


//Primitives vs objects
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects
var obj1 = {
    name: 'John',
    age : 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


//Function
var age = 27;
var obj = {
    name : 'Jason',
    city : 'New Toy'
}

function change(a,b){
    a = 30 ;
    b.city = 'LA';
}

change(age,obj);
console.log(age);
console.log(obj.city);

























