// %%%%%%%    "Immediately invoked function expression(IIFE)"  %%%%%%%%


//it is a JavaScript function that runs as soon as it is defined. 
// It is a design pattern used primarily to create a private scope for variables,
//  thus preventing them from "polluting" the global scope. 


//  *******   Syntax  ********

// The fundamental syntax of an IIFE involves two main parts:

// A function expression wrapped in parentheses () to treat it as an expression rather than a declaration.
// A second pair of parentheses () immediately following the first, which invokes (calls) the function immediately. 

// javascript

//  (function() 
//  {      // Code to be executed immediately
//  })();


//***********   or    ******

 //or using modern arrow functions

 //  (() => { /* ... */ })();

(function chai(){                      // using iife ,called named iife
    console.log(`DB connected`); // op = DB conected
})();

//       or

(() => {                      // using iife and arrow function ,called simple iife
    console.log(`DB connected two`); // op = DB conected
})();


  // or

((name) => {                      // using iife and arrow function
    console.log(`Her name is ${name}`); // op = Her name is Alisha
})('Ali');

// while writing two iife semicolon ; is must b/w two 