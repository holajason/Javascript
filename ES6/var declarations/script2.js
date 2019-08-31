const hourlyWage = [10,16.5,14,20,18];
let hourWorked = [20,39,40,50,20];
let employee = ['John','Mark','Jane','Mary','Joan'];

let salary = hourWorked.map(function(currentEle, index){
   if(currentEle > 40){
       overTimePay = hourlyWage[index]* 1.5  * (currentEle - 40);
       return overTimePay + (hourlyWage[index] * 40);
   }
    return hourlyWage[index] * currentEle;
});

let overTime = hourWorked.map(function(currentEle){
    if(currentEle > 40){
        return currentEle - 40;
    }
    return 0;
})

console.log(employee.map(ele => ele));


employee.map(function(currentEle, index){
    console.log(`${currentEle} hourly wages is ${hourlyWage[index]} and the weekly pay is ${salary[index]} with ${overTime[index]} hour overtime`);
})