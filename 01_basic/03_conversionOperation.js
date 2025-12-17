let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)// doing conversion
console.log(typeof valueInNumber);// actually converted or wht cnvrtd?;some time error even not no but NaN
console.log(valueInNumber); // some time error even not no but NaN


//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN
// true => 1; false =>0

let isLoggedIn = "alisha"

let booleanIsLoggedIn = Boolean(isLoggedIn) // conversion 
console.log(booleanIsLoggedIn);// is converted or what?

//1 => true ; 0=> false
//"" => false
//"alisha" => true

let someNumber =  22

let stringNumber = String(someNumber);
 console.log(stringNumber);
 console.log(typeof stringNumber);

//********Operations******* 

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3);
// console.log(2**3);

let str1 = "hello"
let str2 = "arsh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 +"2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3+4) * 5 % 3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html 













