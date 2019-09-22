/*Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency:
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00

When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices
- They insert money into the machine based on the allowed currency above
- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

With a partner, please discuss the problem by laying each piece of the problem 1 step at a time, and work your way through the problem.
*/

var vendingMachine = {
    items : [
        {snack: "Snickers", price: 1.25}, 
        {snack: "Popcorn", price: 1.00}, 
        {snack: "Chewing Gum", price: .25}, 
        {snack: "Nuts", price: .50}, 
        {snack: "Cookies", price: 1.70}, 
        {snack: "Cup Noodles", price:2.25} ],
    currency : [
        {coin: "Nickle", value: .05},
        {coin: "Dime", value: .10},
        {coin: "Quarter", value: .25},
        {coin: "Dollar", value: 1.00} ],
    showPrice : function()
    {
        for (var i = 0; i < this.items.length;i++)
        {
            var pullItems = this.items[i];
            console.log("Snacks: " + pullItems.snack + " | Price: " + pullItems.price);
        }
    },
    customers : [
        { name: 'Sarah', currencytotal: ["Nickle", "Nickle", "Dime"], snackpurchase: "Popcorn", validcurrency: "", numbertotal: ""},
        { name: 'John', currencytotal: ["Dime", "Quarter", "Dollar"], snackpurchase: "Nuts", validcurrency: "", numbertotal: ""},
        { name: 'Rhonda', currencytotal: ["Dollar","Penny"], snackpurchase: "Nuts", validcurrency: "", numbertotal: ""},
        { name: 'Vanessa', currencytotal: ["Dime", "Quarter"], snackpurchase: "Cookies", validcurrency: "", numbertotal: ""},
        { name: 'Natalie', currencytotal: ["Nickle", "Nickle", "Nickle"], snackpurchase: "Chewing Gum", validcurrency: "", numbertotal: ""} ],
    
    checkCurrency : function()
    {
        //Grab the vending machines valid currency and store into an array.
        var validCurrencyArray = [];

        for (var c = 0; c < this.currency.length;c++)
        {
            validCurrencyArray.push(this.currency[c].coin);
        }

        //Check each customers currency that they put into the vending machine and compare to the validCurrencyArray
        var booleanValidCurrency = true;

        for (var i = 0; i < this.customers.length;i++)
        {
            var pullCustomersTotal = this.customers[i].currencytotal;

            for (var j = 0; j < pullCustomersTotal.length; j++)
            {
                if(validCurrencyArray.indexOf(pullCustomersTotal[j]) == -1)
                {
                    booleanValidCurrency = false;
                }
            }

            //Sets the key value pair for valid currency for each customer
            if(booleanValidCurrency)
            {
                this.customers[i].validcurrency = booleanValidCurrency;
            }
            else 
            {
                this.customers[i].validcurrency = booleanValidCurrency;
            }

            booleanValidCurrency = true;  //Resets the boolean to true. If not reset, the value will always be false.      
        }
       
       // console.log(this.customers);
       //Returns the new customer object with updated key value pair
        return this.customers;
    },

    totalCurrency : function()
    {
        var updatedCustomerCurrencyObject = vendingMachine.checkCurrency(); // This object holds the new currency validation key value pair
        var totalAmountCustomerInput = 0; //This is the number amount the customer placed in machine

        for (var i = 0; i < updatedCustomerCurrencyObject.length; i++)
        {
            var validCurrency = updatedCustomerCurrencyObject[i].validcurrency;
            var currencyTotal = updatedCustomerCurrencyObject[i].currencytotal;

            if(validCurrency)  //if true, it loops through each customer currency, compares to the valid vending machine currency, sums the associated value. done for each customer 
            {
                //console.log("All Valid Currencies! Grab Total!");
                for (var j = 0; j < currencyTotal.length;j++)
                {
                    var currentCurrency = currencyTotal[j];
                    for (var k = 0; k < this.currency.length; k++)
                    {
                        if(currentCurrency == this.currency[k].coin)
                        {
                           totalAmountCustomerInput += this.currency[k].value;
                        }
                    }
                }
            }

            this.customers[i].numbertotal = totalAmountCustomerInput; //Now the total number amount is assigned to each customer object
            totalAmountCustomerInput = 0; //Initialize value back to 0 to prevent input from adding from previous customer
        }
        return this.customers;
    },

    purchase : function()
    {
       var updatedCustomerTotalCurrencyObject = vendingMachine.totalCurrency(); //This object holds the total number the customer input into the totalnumber key
       var getSnackPrice;
       var message = "";
       vendingMachine.showPrice();

       for (var i = 0; i < updatedCustomerTotalCurrencyObject.length;i++)
       {
            var isCustomerValid = updatedCustomerTotalCurrencyObject[i].validcurrency;
            var customerChosenSnack = updatedCustomerTotalCurrencyObject[i].snackpurchase;
            var customerNumberTotal = updatedCustomerTotalCurrencyObject[i].numbertotal;
            var customerName = updatedCustomerTotalCurrencyObject[i].name;

            if(isCustomerValid) //If True, checks customers chosen snack and gets associated price from vending machine
            {
                for (var j = 0; j < this.items.length; j++)
                {
                    if (customerChosenSnack == this.items[j].snack)
                    {
                        getSnackPrice = this.items[j].price;
                        break;
                    }
                }

                if(customerNumberTotal < getSnackPrice) // If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
                {
                    console.log(customerName + ": ERROR NOT ENOUGH MONEY ENTERED");
                }
                else if (customerNumberTotal >= getSnackPrice) //If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
                {
                    console.log(customerName + ": PURCHASE CONFIRMED. HERE IS YOUR LEFTOVER CHANGE: " + (customerNumberTotal - getSnackPrice));
                }
                else //-- If they do not choose an item, all the money can be returned to them
                {
                    console.log(customerName + ": NO ITEM CHOSEN. ALL MONEY WILL BE RETURNED");
                }
            }
            else 
            {
                console.log(customerName + ": INVALID CURRENCY DETECTED. WE ONLY ACCEPT XXXXXXX. SPITS OUT EVERYTHING");
            }
       }
    }    
};

vendingMachine.purchase();
