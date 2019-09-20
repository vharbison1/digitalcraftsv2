//We are going to  have an array of items.
//We are going to create a function with 2 parameters
//The first parameter will be an array to search
//The second parameter will be a value to find

//Inside the function, use a for loop to go through the array
//and return true if it finds the second parameter inside the array
//otherwise returns false

var items = ["Cat", "Dog", "Snake", "Ferret", "Big Foot"];

var findItem = "Big Foot";

function animalSearch(items, findItem)
{
	for (var i = 0; i < items.length; i++)
	{
		if(items.indexOf(findItem) > -1)
		{
			console.log("TEST");
			return true;
		}
	}
	return false;
}

animalSearch(items,findItem);
