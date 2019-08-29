//module with closure & IIFE

//Budget Controller
var budgetController = (function(){ //IIFE invoke immediately when function is called
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome )* 100);
        }
        else{
            this.percentage = -1;
        }
    };
    
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var calculateTotal = function(type){
            var sum = 0;
        //select the type of budget and sum all element
            dataStorage.allItems[type].forEach(function(currentElement){
                sum += currentElement.value;
            });
        //store the sum in total
        dataStorage.total[type] = sum;
    };
            
    var dataStorage ={
        allItems: {
            exp : [],
            inc : [],
        },
        
        total: {
            exp : 0,
            inc : 0
        },
        
        budget : 0,
        percentage : -1  
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
        
        deleteItem : function(type, id){
            var itemID, index;
            itemID =  dataStorage.allItems[type].map(function(currentElement, currentIndex, entireArray){
                //map return an new array
                return currentElement.id;   //return an array of current element id of all item
            });
            
            index = itemID.indexOf(id); //Return the index number of the element from the returned array
            if(index !== -1){
                dataStorage.allItems[type].splice(index,1); //splice = the element index and number of ele
            }
        },
        
        calculateBudget : function(){
            //Calculate the sume of all income and expense
            calculateTotal('exp');
            calculateTotal('inc');
            //Calculate the budget : income - expense
            dataStorage.budget = dataStorage.total.inc - dataStorage.total.exp;
            //calcualte the each expense percentage from the total budget
            if(dataStorage.total.inc > 0){
             dataStorage.percentage = Math.round((dataStorage.total.exp / dataStorage.total.inc) * 100);
            }
            else{
                //-1 is non-existence
                dataStorage.percentage = -1;
            }
        },
        
        calculatePercentage : function(){
            dataStorage.allItems.exp.forEach(function(current){
                current.calcPercentage(dataStorage.total.inc);
            })          
        },
        
        getAllExpPercentages : function(){
          var allPercentage = dataStorage.allItems.exp.map(function(current){
              return current.getPercentage();
          })  
          return allPercentage;
        },
        
        getBudget : function(){
            return {
                budget : dataStorage.budget,
                totalIncome : dataStorage.total.inc,
                totalExpense : dataStorage.total.exp,
                percentage : dataStorage.percentage
            }
        },

        testingDisplay: function(){
            console.log(dataStorage);
        }
    };
    
})();


// UI controller module
var UIController = (function(){
    //QuerySelector command string
    var DOMStrings = {
        inputType : '.add__type',
        itemDescription : '.add__description',
        inputValue : '.add__value',
        inputButton : '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container : '.container',
        expensesPercentageLabel : '.item__percentage',
        dataLabel : '.budget__title--month'
    };
     
        formatNumber  = function(num, type){
            var splitNum, intNumber, decNumber;
        /*
         + or - before number exactly 2 decimal points
         comma separating the thousands
         
         2310.456 -> +2,230.46
         2000 -> + 2,000.00
          Math.abs = absolute
         */
            num = Math.abs(num);
            num = num.toFixed(2);
            splitNum = num.split('.');
            intNumber = splitNum[0];
             if(intNumber.length > 3){
                 intNumber = intNumber.substr(0,intNumber.length - 3) + ',' + intNumber.substr(intNumber.length - 3, 3);
             }
            decNumber = splitNum[1];
             return (type === 'exp' ?  '-' : '+') + ' ' + intNumber + '.'+ decNumber;
        };
        
        var nodeListForEach = function(list, callback){
            for(var index = 0; index < list.length; index++){
                callback(list[index], index);
            }
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
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>' ;
            }
            else if (type === 'exp'){
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div> </div> ' ;
            }
            
            //Replace the placeholder text with actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));
            
            //Insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
        },
       
        deleteListItem : function(seletorID){
            //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
            var selectElement = document.getElementById(seletorID);
            selectElement.parentElement.removeChild(selectElement);
        },
        
        //Clear input field after user input
        clearField : function(){
           var inputFields,fieldArr; 
            inputFields  = document.querySelectorAll(DOMStrings.itemDescription + ',' + DOMStrings.inputValue);
            //convert list to array
            fieldArr = Array.prototype.slice.call(inputFields);
            //Set current element back to null
            fieldArr.forEach(function(currentValue, index, array){
                currentValue.value ="";
            })
            //Set focus back to item_description
            fieldArr[0].focus();
        },
        
        displayBudget : function(obj){
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExpense, 'exp');
            
           if(obj.percentage > 0){
               document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;
           }
            else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '--';
            }  
        },
        
        
        displayPercentage : function(percentageArr){
            var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel); //Return a Node List
            nodeListForEach(fields, function(current, index){
                if(percentageArr[index] > 0){
                current.textContent = percentageArr[index] + '%';
                }
                else{
                    current.textContent = '--';
                }
            })
        },
        
        displayMonth : function(){
            var now, year, months, month, day;
            now = new Date();
            months = ['January', 'February', 'March','April','May','June','July','August', 'September', 'October', 'November', 'December'];
            year = now.getFullYear();
            month = now.getMonth();
            document.querySelector(DOMStrings.dataLabel).textContent = months[month] + ' ' +year;  
        },
        
        changeType : function() {
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' + 
                DOMStrings.itemDescription +',' +
                DOMStrings.inputValue);
            nodeListForEach(fields, function(current){
               current.classList.toggle('red-focus'); 
            });
            document.querySelector(DOMStrings.inputButton).classList.toggle('red');
        },
        
        getDOMStrings : function(){
            return DOMStrings;
        }
    } 
})();

//Global App Controller module
var applicationController = (function(budgetCtrl,UICtrl) { 
    var setupEventListens = function(){
        //Get the DOM string from UI Controller
        var DOM = UICtrl.getDOMStrings();
        //Button click add item (image icon)
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        //<keypress event> | https://developer.mozilla.org/en-US/docs/Web/Events
        document.addEventListener('keypress', function(event){
            //Look up for javaScript keyboard code
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            } 
        });
        
       //Container is the parent class of both income_delte and expense delete 
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        //Add event listenr 'change'
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        //Store the item type and the item id for item deletion
        itemID =  event.target.parentNode.parentNode.parentNode.parentNode.id; //trace back to the root parent and store the id for deletion
        if(itemID){
            //income-1, split in 'income','1'
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]); //convert string ID to int ID
            //1. Delete the item from data storage
            budgetCtrl.deleteItem(type, ID);
            //2. Delete item from the UI
            UICtrl.deleteListItem(itemID);
            //3. Update and display the new budget
            updateBudget();
            //4. Calculate and update the percentage
            updatePercentage();
        }
    }
    
    var updateBudget = function(){
        //1. Calculate the budget
        budgetCtrl.calculateBudget();
        //2. Return the budget
        var budget = budgetCtrl.getBudget();
        //3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    }
    
    
    var updatePercentage = function(){
        //1. Calculate percentages
        budgetCtrl.calculatePercentage();
        //2. Read percentage from the budget controller
        var percentages = budgetCtrl.getAllExpPercentages(); 
        //3. Update the UI with the new percentage
        UICtrl.displayPercentage(percentages);
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
            //6. Calculate and update the percentage
            updatePercentage();
            // console.log('testing add item');
        }
    };
    
    //Public Functions
    return {
        init : function(){
          // set all label to 0
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget : 0,
                totalIncome : 0,
                totalExpense : 0,
                percentage : -1
            });
            setupEventListens();
        }
    };

})(budgetController, UIController);


applicationController.init();