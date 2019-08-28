
//module with closure & IIFE
var budgetCOntroller = (function(){
    var x  = 23;
    var add  function(a){
        return x +a;
    }
    
    //return object contains all the functions that we want to be public
    return {
        publicTest : function(b){
            console.log(add(b));
        }
    }
    
}){};