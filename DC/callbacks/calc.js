var add = function(num1,num2)
{
    return num1 + num2;
}

var subtract = function(num1, num2)
{
    return num1 - num2;
}

var calculator = function(a,b,operand)
{
    return operand(a,b);
}

var result = calculator(5,10,add);


var result = calculator(3,2,function(num1,num2)
{
    return num1*num2;
});


//Using the calculator function, write a function that 
//takes in 2 numbers, multiplies it, and finds the remainder by diving by 5

var result = calculator(10,15,function(num1,num2)
{
    return (num1*num2) % 5;
});


//Using the calculator function
//Have it add the two number together, and then find the square root
//Use the add function inside the function that will find the square root
//two ways
calculator(6,3,function(num1,num2) {
    var result = add(num1,num2);
    return Math.sqrt(result);
});

calculator(6,3,function(num1,num2) {
    return Math.sqrt(add(num1,num2))
}