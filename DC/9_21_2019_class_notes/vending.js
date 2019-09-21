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
        {snack: "Popcorn", price : 1.00}, 
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
            console.log("Snacks" + pullItems.snack + " | Price: " + pullItems.price);
        }
    },
    customers : [
        { name: 'Sarah', total: ["Nickle", "Nickle", "Dime"], snackpurchase: "Popcorn"},
        { name: 'John', total: ["Dime", "Quarter", "Dollar"], snackpurchase: "Nuts" },
        { name: 'Rhonda', total: ["Dollar","Dollar"], snackpurchase: "Nuts" },
        { name: 'Vanessa', total: ["Dime", "Quarter"], snackpurchase: "Cookies"},
        { name: 'Natalie', total: ["Nickle, Nickle, Nickle"], snackpurchase: "Chewing Gum"} ],
    
    checkCurrency : function()
    {
        
    },

    totalCurrency : function()
    {

    },

    purchase : function()
    {
        
    }
    
};

vendingMachine.showPrice();

