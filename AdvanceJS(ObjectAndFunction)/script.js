//Function Constructor

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