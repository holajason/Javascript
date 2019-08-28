//module with closure & IIFE

//Budget Controller
var budgetController = (function(){ //IIFE invoke immediately when function is called
  
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var dataStorage ={
        allItems: {
            exp : [],
            inc : [],
        },
        
        total: {
            expense : 0,
            income : 0
        }
    };
    
    //return object contains all the functions that we want to be public
    return {
        //Closure methods
        addItem: function(type, desrpt, val){
            var newItem, ID;
            //create ID
            //First check the type of budget, second check the size of the type, then add the new id number to the newly added item
            if(dataStorage.allItems[type].length  > 0){
                ID = dataStorage.allItems[type][dataStorage.allItems[type].length -1].id + 1;
            }
            else{
                ID = 0;
            }
            //Create nwe item based on 'inc' or 'exp' type
            if(type === 'exp'){
            newItem = new Expense(ID, desrpt, val);
            }
            else if(type === 'inc'){
               newItem = new Income(ID, desrpt, val);
            }
            //Add the new item to the data storage, compare type
            dataStorage.allItems[type].push(newItem);
            //return new element
            return newItem;
        },
        testingDisplay: function(){
            console.log(dataStorage);
        }
    };
    
})();


// UI controller module
var UIController = (function(){
    //Create a set of querySelector command string
    var DOMStrings = {
        inputType : '.add__type',
        itemDescription : '.add__description',
        inputValue : '.add__value',
        inputButton : '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };
    
    return {
        getUserInput : function(){ 
            return {
                budgetType : document.querySelector(DOMStrings.inputType).value, //the option value with either be income(inc) or expense(exp)
                itemDescription :document.querySelector(DOMStrings.itemDescription).value,
                //parseFloat convert the string value to a int value of the input
                inputValue: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        
        addListItem : function(obj, type){
            var html, newHTML, element;
            //create HTML string with placeholder text
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>' ;
                
            }
            else if (type === 'exp'){
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div> </div> ' ;
            }
            //Replace the placeholder text with actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);
            
            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
        },
        
        //Clear input field after user input
        clearField : function(){
           var inputFields,fieldArr; 
            inputFields  = document.querySelectorAll(DOMStrings.itemDescription + ',' + DOMStrings.inputValue);
            //convert list into array by calling the slice method from Array class
            fieldArr = Array.prototype.slice.call(inputFields);
            //Set the current element back to ""
            fieldArr.forEach(function(currentValue, index, array){
                currentValue.value =" ";
            })
            //Set the fouce back to item_description
            fieldArr[0].focus();
        },
        
        
        
        getDOMStrings : function(){
            return DOMStrings;
        }
    }
      
})();


//Global App Controller module, passing other two modules
var applicationController = (function(budgetCtrl,UICtrl) {
    
    var setupEventListens = function(){
        //Get the DOM string from UI Controller
        var DOM = UICtrl.getDOMStrings();
        //Button click add item (image icon)
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        //<keypress event> | https://developer.mozilla.org/en-US/docs/Web/Events
        document.addEventListener('keypress', function(event){
            //Look up for javaScript keyboard keyboard
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            } 
        });
    }

    var updateBudget = function(){
        //1. Calculate the budget
        
        //2. Return the budget
        
        //3. Display the budget on the UI
    }
    
    var ctrlAddItem = function(){
        var userInput, newItem;
        //1. Get the user input data from UI controller
        userInput = UICtrl.getUserInput();
        if(userInput.itemDescription !=="" && !isNaN(userInput.inputValue) && userInput.inputValue >= 0){
            //2. Add item to the budget controller
            newItem = budgetCtrl.addItem(userInput.budgetType, userInput.itemDescription, userInput.inputValue);
        
            //3. Add the item to the UI
            UICtrl.addListItem(newItem, userInput.budgetType);
        
            //4. Clear the field
            UICtrl.clearField();
        
            //5. Calculate and update the budget
            updateBudget();
        
            //6. Display the budget on the UI
        
        
            // console.log('testing add item');
        }
    };
    
    
    
    //Public Functions
    return {
        init : function(){
          //  console.log('Application has started');
            setupEventListens();
        }
    };

})(budgetController, UIController);


applicationController.init();