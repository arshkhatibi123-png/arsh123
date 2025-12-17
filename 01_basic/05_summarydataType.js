// dataType

// Primitive:

// 7 types: String , no.,boolean(t/f), Null(empty not 0), Undefined , Symbol, BigInt(scientific value or large value; not use commonly) 

// const score = 100 // not need to define it is number datatype in javascript
// const scoreValue = 100.3 // no. category

// const isLoggedIn= false //bollean type
// const outsideTemp = null // cmplnodet empty
// let userEmail; //undefined


const id = Symbol('123')//symbol type
const anotherId = Symbol('123')// not similar to above

console.log(id === anotherId);// lets check similar or not

const bigNumber = 37588585389099999n //bigInt

// Non primitive(or reference):

// Array, Object ,Functions 

const heros = ["shaktiman, naagraj, doga"]// array
let myObj = {
    name: "hitesh",
    age: 22,
}// under curly bracket =obj

const myFunction = function(){// functn as variable
console.log("Hello World");
}

console.log(typeof bigNumber );


// Type of Variable

// undefined=undefined, 
// null=object, 
// boolean=boolean, 
// number=number, 
// string=string, 
// symbol=>symbol
// object(native and doesnot implement([[Call]])=object
// object(native or host and does implement [[Call]])= function
// object(host and doesnot implement [[Call]]) = implementtion defined except maynot be "undefined", "boolean","number"or "string"
// BigInt=>bigint

// non primitive :
// functn() =>functn 
// object=>object
// Array=>object


//In javascript we donot define variable ;eg 100 not need to define it is number , false donot need to define it is boolean

// javascript is a dynamically typed lng, mns variable types are determined at run time not need to explicitly declare the type of variable before using it.
//  unlike statically typed lngs (java , c++, and typeScript)