function oldEnoughDrive(name,age)
{
	if(age <= 15)
	{
		return name + " is not old enough to drive - " + false;
	}
	else 
	{
		return name + " is old enough to drive - " + true;
	}
}

function oldEnoughDrink(name,age)
{
	if(age<=20)
	{
		return name + " is not old enough to drink - " + false;
	}
	else 
	{
		return name + " is old enough to drink - " + true;
	}
}  

function oldEnoughRentACar(name,age)
{
	if(age<=24)
	{
		return name + " is not old enough to rent a car - " + false;
	}
	else 
	{
		return name + " is old enough to rent a car - " +  true;
	}
}


function mcdonaldsBallPitPlay(name,age)
{
	if(age<10)
	{
		return name + " is old enough to play at Mcdonalds - " + true;
	}
	else 
	{
		return name + " is too old to play at Mcdonalds - " + false;
	}
}


var storeArraySarah = [oldEnoughDrive("Sarah", 32), oldEnoughDrink("Sarah",32), oldEnoughRentACar("Sarah",32), mcdonaldsBallPitPlay("Sarah",32)];
var storeArrayBob = [oldEnoughDrive("Bob", 19), oldEnoughDrink("Bob",19), oldEnoughRentACar("Bob",19),mcdonaldsBallPitPlay("Bob",19)];
var storeArrayHenry = [oldEnoughDrive("Henry", 22), oldEnoughDrink("Henry", 22), oldEnoughRentACar("Henry", 22), mcdonaldsBallPitPlay("Henry", 22)];
var storeArrayKatie = [oldEnoughDrive("Katie",9), oldEnoughDrink("Katie",9), oldEnoughRentACar("Katie", 9), mcdonaldsBallPitPlay("Katie",9)];
console.log(storeArraySarah);
console.log(storeArrayBob);
console.log(storeArrayHenry);
console.log(storeArrayKatie);
