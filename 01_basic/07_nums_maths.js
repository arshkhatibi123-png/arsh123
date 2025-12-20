const score = 400
//console.log(score);


const balance = new Number(100)// specify it is number
// console.log(balance);


//console.log(balance.toString().length); // converted to string , provide sm extra prprty
//console.log(balance.toFixed(2)); //100.00=fixed upto 2 decimal value


const otherNumber = 23.68934
//console.log(otherNumber.toPrecision(3)); // o/p=23.7
 
const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++  MATHS  ++++++++++++++++++++++++++++++// 

//console.log(Math);// o/p =Object [Math] {}
//console.log(Math.abs(-4));// abs=absolute=-ve to +ve; o/p = 4
//console.log(Math.round(4.445));// round of 4.445=4; o/p = 4

//console.log(Math.ceil(4.445));// take highest value; o/p = 5
//console.log(Math.floor(4.445));// take lowestvalue ; o/p = 4
//console.log(Math.max(35,87,999,34));// o/p=999

//console.log(Math.min(23, 56,9,12));// o/p=9
 




// math lib mostly in math.random

console.log(Math.random());// value betw 0 and 1
console.log((Math.random()*10) + 1);// +1, bcz need value more than 1

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






