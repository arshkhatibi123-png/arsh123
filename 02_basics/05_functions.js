//**************FUNCTIONS***************** */
//Functions in JavaScript are reusable blocks of code 
// designed to perform specific tasks. 
// They allow you to organize, reuse, and modularize code.
//  It can take inputs, perform actions, and return outputs.
function SUM(X,Y)//function keyword , function name and parameters
{
    return X+Y;//return keyword and funtn body
}
let result = SUM(4,5);// funtn call and arguments
console.log(result);

function greet(name)// name= paramtr
{
    console.log("Hello " +  name);
    
}
greet("Alisha");// Alisha = arguments