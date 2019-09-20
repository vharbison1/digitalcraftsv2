

//Add All the Values in The Array and Print to Screen
var numbers = [4,5,6,7];
//Using the For Loop and If Statements inside the for loop
//Find  the largest number in the array
var largestHolder = 0;
for(var i = 0; i< numbers.length;i++)
{
	if(numbers[i] > largestHolder)
	{
		largestHolder = numbers[i];
	}
}
//console.log('LARGEST NUMBER: ' + largestHolder);

//Step 1
// Create a for loop that creates an array of 100 random numbers
// Step 2 From the random number array created above, find the smallest

var arrayRandomNumbers = [];

for (var i = 0; i <= 100;i++)
{
	arrayRandomNumbers.push(Math.floor(Math.random(100)*100));
}

console.log(arrayRandomNumbers);
//Step 2
var smallestNumber = arrayRandomNumbers[0];
for (var j = 0; j < arrayRandomNumbers.length; j++)
{
	if(arrayRandomNumbers[j] < smallestNumber)
	{
		smallestNumber = arrayRandomNumbers[j];
	}
console.log(smallestNumber);
}
console.log(smallestNumber);
