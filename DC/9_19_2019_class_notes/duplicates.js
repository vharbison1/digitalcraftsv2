//In this exercise, we are going to find an array that has duplicate values
//We will have a first loop that goes throgh all the items in the array
//We will have a second loop that checks all of the items again in the index
//of the first loop

var items = ["Cat", "Dog", "Ferret", "Allen", "Dog", "Bird", "Ferret"];
var counter = -1;
var dupFound = [];
for (var i = 0; i < items.length;i++)
{
	for  (var j = 0; j< items.length;j++)
	{
		if(items[i] == items[j])
		{
			counter++;
		}
	}

	if(counter >  0)
	{
		console.log('DUP FOUND:' + items[i]);
	}
	counter = -1;
}
