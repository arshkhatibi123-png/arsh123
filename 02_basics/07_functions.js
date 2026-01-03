//**************FUNCTIONS***************** */
//Functions in JavaScript are "reusable blocks of code "
// designed to perform "specific tasks". 
// They allow you to "organize, reuse, and modularize code."
//  It can take inputs, perform actions, and return outputs.

// eg:1

function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}    
sayMyName()

//eg:2

function sum(a,b)
{
    console.log(a+b);// o/p=17
    
}
//const result = sum(8,9)
//console.log("Result: ", result);// o/p= Result: undefined, bcz not return this value. 



// ************OR************

function SUM(X,Y)//function keyword , function name and parameters
{

   // let result = X+Y
   // return result

    //***OR** */

   return X+Y;//return keyword and funtn body, once return  functn will not do odr work or print odr thing
    
}
let result = SUM(4,5)// funtn call and arguments
console.log("Result: ", result);


// eg:3

function greet(name)// name= paramtr
{
    //console.log("Hello " +  name);  
}
greet("Alisha");// Alisha = arguments, greet=reference, ()= call , whole wd ()= called execute

//eg:4

function logInUserMessage(username)// if here user nm defined dn value nvr undefined eg username="sam" value "sam" or  "in argument" value
{

    if(username === undefined)// or !undefined
    {
        console.log("Please enter a username");  
        return                           //nxt return will not wrk if undefined
    }
    return `${username} just logged in ` // return d fn
}
console.log(logInUserMessage()); //call d fn and ,o/p= Arshi just logged inabc
