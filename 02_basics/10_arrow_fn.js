const user = {
    username: "Ali",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);// this. refr current context
        console.log(this);// shown fully current context of ali and sam both
        
    }
}
user.welcomeMessage() // o/p= Ali, wlcm to website
user.username = "sam"
user.welcomeMessage() // o/p= sam, wlcm to website, bcz this. shown current text

// if comment abv all three dn got empty{} o/p bcz this oprtr shown emmpty object but not in browser , shown window object bcz in browser global object is window object , while in code env global object is empty object{}
console.log(this);

//*************************************************** */

// function chai()
// {
    
//     console.log(this); // o/p = lots of value, only wrk in objject notin fn , eg blw
    
// }
// chai()



// function chai()
// {
//    let username = "Arsh"
//     console.log(this.username);//op= undefined
// }
// chai()



// const chai = function (){
//     let username = "Ali"
//     console.log(this.username);// op = undefined
    
// }
// chai()



// const chai =  () => {    // arrow fn
//     let username = "Ali"
//     console.log(this.username);// op = undefined
    
// }
// chai()

   
//##################   ARROW FN   #################### 

// //Arrow Functions were introduced in ES6.
// Arrow Functions allow a shorter syntax for function expressions.
// You can skip the function keyword, the return keyword, and the curly brackets:
//If the function has only one statement that returns a value, you can remove the brackets and the return keyword.


// const addTwo = (num1, num2) => 
// {
//     return num1 + num2
// }
// console.log(addTwo(4,6)); // op = 10



// const addTwo = (num1, num2) =>  num1 + num2 // implicit return = no need of use paranthesis{} and return ; in same line written
// console.log(addTwo(4,6))    // op = 10


//**********    OR    ********* */



// const addTwo = (num1, num2) =>  (num1 + num2) // in {} return need to written but in () return no need to written
// console.log(addTwo(4,6))  // op = 10



const addTwo = (num1, num2) => ({username:"Ali"}) // object return need to add parnthesis and curly brackt
console.log(addTwo(4,6))  // op = { username: 'Ali' }



// const chai =  () => {    // arrow fn
//     let username = "Ali"
//     console.log(this);   // op = {}
    
// }
// chai()




//    %%%%   for array   %%%%%%%


// const myArray = [2,3,4,5,6]
// myArray.forEach(function()  {})



// /************OR******* */



// const myArray = [2,3,4,5,6]
// myArray.forEach(() => {}) // using arrow fn



// //*****  or   *****/


// const myArray = [2,3,4,5,6]
// myArray.forEach(() => ()) // using arrow fn










