//In this assignment, we are going to have a  for loop that 
//iterates over 20 numbers

//if the number at the current i is divisible by both 2 and 3, console.log(FizzBuzz)
//if the number at the current is only divisible by 2, console.log(Fizz)
//if the number at i is only divisibly 3, console.log(Buzz)

//for division (if divisible), its if (number % other_number)

var arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (var i = 0; i < arrayNumbers.length;i++)
{
	if (arrayNumbers[i] % 2 == 0 && arrayNumbers[i] % 3 == 0)
	{
		console.log("FizzBuzz");
	}
	else if (arrayNumbers[i] % 2 == 0)
	{
		console.log("Fizz");
	}
	else if (arrayNumbers[i] % 3 == 0)
	{
		console.log("Buzz");
	}
}
