class Element{
    constructor(name, yearBuild ){
        this.name = name;
        this.yearBuild = yearBuild;
    }
};

class Park extends Element{
    constructor(name, yearBuild, parkArea, numTrees){
        super(name, yearBuild);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }
     
    treeDensity(){
       return(`${this.name} has a tree density of ${this.numTrees/this.parkArea} per square km`);
    }
}


class streets extends Element{
    constructor(name, yearBuild, length, size = 3){
        super(name, yearBuild);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet(){
        const streetSize = new Map();
        streetSize.set(1, 'Tiny');
        streetSize.set(2, 'Small');
        streetSize.set(3, 'Normal');
        streetSize.set(4, 'Big');
        streetSize.set(5, 'Huge');
        
        return (`${this.name}, bulit in ${this.yearBuild}, is a ${this.size} street.`);
    }

}

class averageCalc{
    constructor(numElement, parkAge=[]){
        this.numElement = numElement;
        this.parkAge = parkAge;
    }
    
    totalSum(){
        var sum = 0;
        for (var index = 0; index < this.parkAge.length; index++) {
            sum += this.parkAge[index];
        }
        return sum;
    }
    
    averageSum(){
        var total = this.totalSum();
        return total/this.numElement;
    }
}


console.log('---Park Report---');
const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 945)
                 ];
for(var index = 0; index < allParks.length; index++){
    
    console.log(allParks[index].treeDensity());
    /*
    if(allParks[index].numTrees > 1000){
        console.log(allParks[index].name + ' has more than 1000 trees.');
    }
    */
}
const tree = allParks.map(ele => ele.numTrees).findIndex(ele => ele >= 1000);
    console.log(`${allParks[tree].name} has more than 1000 trees`);

    
console.log('---Town Street Report---');
const allStreet = [ new streets('Ocean Avenue', 1999, 2.7,2),
                  new streets('4th street', 2015, 0.8),
                  new streets('Sunset Blvd', 1982, 2.5, 5)];

for(var index = 0; index < allStreet.length; index++){
    console.log(allStreet[index].classifyStreet());
    
}
