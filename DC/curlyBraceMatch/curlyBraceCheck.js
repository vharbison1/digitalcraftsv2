//Write function that takes in string

//Iterate through each character in the string

//Find the characters that are curly braces

//Determine if equal opening 

//FInd the brace that is open


const findOpenBrace ='{';
const findClosingBrace = '}';

let holdBraceMatch = [];

checkString('{ddfddfdf}dfdfd}');

function checkString(userstring)
{
    let openingCountBrackets = 0;
    let closingCountBrackets = 0;

    const stringArray = userstring.split('');

    console.log(stringArray);

    stringArray.forEach( function(value,index)
    {

        if(value.indexOf(findOpenBrace) > -1 )
        {
            console.log('Opening brace');
            console.log(index);
            //increment by 1 for open brace
            openingCountBrackets+=1;

            //store index 
            //holdBraceMatch.push(index);


        }       
        else if(value.indexOf(findClosingBrace) > -1)
        {
            console.log('Closing brace');
            console.log(index);

            //increment by 1 for close brace
            closingCountBrackets+=1;

            //store index
        }
    });

    if(openingCountBrackets != closingCountBrackets)
    {
        //}} example. 2 closing. 0 open. find the non match inbetween
        if (closingCountBrackets > openingCountBrackets)
        {
            let straggledBrackets = closingCountBrackets - openingCountBrackets;
            //

        }
        else 
        {
            let straggledBrackets = openingCountBrackets - closingCountBrackets;
            //
        }
    }
}