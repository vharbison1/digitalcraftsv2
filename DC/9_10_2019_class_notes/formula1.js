// The formula for the LTV - Lifetime Values of a customer in business = 
// LTV = (ARPA * Gross Margin) / CCR
// ARPA: Average Revenue Per Account (The aeverage MRR across all of your active customers)
// Gross Margin: The difference between reveue and COGS (Cost of Goods Sold). This is typically extemely high in
// Customer Churn Rate: The rate at which your customers are cancelling their subscription. ]


var ltvFunction = function(ARPA, GrossMargin, CCR) {
var LTV = (ARPA * GrossMargin) / CCR;
return LTV;
}

console.log(ltvFunction(10,2,5));
console.log("Steve thinks blahblah " + ltvFunction(20,10,15));
console.log("John thinks the LTV should be " + ltvFunction(10,23,45));

