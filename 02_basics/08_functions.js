

//function calculateCartPrice(...num1)// using rest operator,o/p=[3,5,8,7]
function calculateCartPrice(val1, val2, ...num1)// while using ds get o/p =[8,7]

{
    return num1
}
console.log(calculateCartPrice(3,5,8,7));// give o/p as a array=[3,5,8,7]


//Spread Operator (...)

// The spread operator expands an iterable (like an array or object) 
// into individual elements

// used for combining , cloning, merging

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); //op= [1,2,3,4,5,6]

//Rest Operator (...)

//The rest operator collects multiple elements 
// or properties into a single array or object.

//The Rest Parameter allows functions to accept 
// an indefinite number of arguments as an array.
//  It collects multiple arguments into a single array parameter.

// It is used in assignment contexts, specifically in "function parameters"
//  or destructuring assignments, and must be the last element. 

//Feature	Rest Parameter	               Spread Operator

//Syntax    function(...args) {}          [...array], {...object}
//Purpose	Collects multiple arguments     Expands elements of
//          into an array                 an array, object, or string	
//Usage   	Function parameters       	Arrays, objects, function calls
//Returns	An array	                 Individual element



//****** */ using object and function togther********

//const user = {
    //username: "alisha",
    //prices: 200
//}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
 }
//handleObject(user)

//or
handleObject({
    username: "Ali",
    prices:700})// also define objet here instead abv// op= Username is Ali and price is 700


    //******array and fnctn */

    const myNewArray = [200,400,100,600]

    function returnSecondValue(getArray){
        return getArray[1]
    }
    //console.log(returnSecondValue(myNewArray));// op=400
    
    // or
    console.log(returnSecondValue([200,300,400,500]));

    
