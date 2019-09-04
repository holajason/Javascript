const question = new Map();
question.set('question','What is the offical name of the lastest major JavaScript version?');
question.set(1,'ES5');
question.set(2,'ES');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('Correct',3);
question.set(true,'Correct Answer :D');
question.set(false,'Please try again!');

console.log(question.get('question'));

if(question.has(4)){
   // question.delete(4);
}

/*delete all question*/
//question.clear();

//question.forEach((val,key)=>console.log(`This is ${key} and it set to ${val}`));

for(let [key,val] of question.entries()){
    //console.log(`This is ${key} and it set to ${val}`)
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} : ${val}`);
    }
}

const ans = parseInt(prompt('Enter the correct answer'));
console.log(question.get(ans === question.get('Correct')));
