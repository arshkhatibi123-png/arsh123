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

const mySym = Symbol("key1")


const jsUser = {
    name : "Alisha",
    "full name" : "Alisha Khatibi" ,//cant find its op using .js
    [mySym]: "mykey1",// use sqr brckt for act as keys 
     age : 18,
    Email: "ali123@gmail.com",
    isLoggedinDays: false,
    LastLoginDays: ["Monday", "Saturday"]

}
console.log(jsUser.Email); //o/p=ali123@gmail.com// not nessesary only ds use
console.log(jsUser["Email"]); //o/p=ali123@gmail.com// also use ds mthd
//console.log(jsUser.full name]);// error not possible, not able assess
//console.log(jsUser["Email","age","name"]); // not possible//o/p=Alisha(only name)

//**************Symbols as a key**********
//mySym="myKey1"// not possibl, not useas symbol, type of String
//const mySym = Symbol("key1")// not here bfr dcl obj
//[mySym]:"mykey1",// not declare here must b under object
console.log(jsUser[mySym]);


//*****FREEZE*******
jsUser.email = "arshali@chatgpt.com"
Object.freeze(jsUser)
