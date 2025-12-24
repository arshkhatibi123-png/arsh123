//In JavaScript, both arrays and objects are used to store collections of data,
// but they differ primarily in how data is organized, indexed, and optimized. 
// Arrays are ideal for ordered, list-like data with numeric indexing,
//  while objects are better suited for storing related data using named key-value pairs. type or structure	Used for grouping related data using labels (properties)

///*************OBJECT************ */

//Note:

//You should declare objects with the "const keyword".
// When an object is declared with const, you cannot later reassign it to point to a different variable.
// It does not make the object unchangeable. You can still modify its properties and values.


// ***singleton**** 
// = declare as literals  no singleton but from constructor will be singleton.


//****Object literals*** */
const jsUser = {
    name : "Alisha",
    "full name" : "Alisha Khatibi"
    age : "18",
    Email: "ali123@gmail.com",
    isLoggedinDays: false,
    LastLoginDays: ["Monday", "Saturday"]

}
//console.log(jsUser.Email); //o/p=ali123@gmail.com// not nessesary only ds use
console.log(jsUser["Email"]); //o/p=ali123@gmail.com// also use ds mthd

//console.log(jsUser["Email","age","name"]); // not possible//o/p=Alisha(only name)
