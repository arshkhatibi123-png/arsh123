 const name = "Alisha"
 const repoCount = 50

//  console.log(name + repoCount + " Value");// but dont use this method = outdated
 
//   now use back stick wd string interpollation

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('alisha-kh')

console.log(gameName[0]);//key access of alishakh
console.log(gameName.__proto__);// access prototype

console.log(gameName.length);// acess length of alishakh

console.log(gameName.toUpperCase());// changes to upper case // not change original string
console.log(gameName.indexOf('a'));//finding pstn of d character
console.log(gameName.charAt(2));//

const newString = gameName.substring(0,5)
console.log(newString);


const anotherString = gameName.slice(-7, -4)
console.log(anotherString);

const newStringOne = "    Arshi      "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim remove the unnessary space

const url = "http://arsh123.com/arsh%20khatibi"

console.log(url.replace('%20','_'));// replace string
console.log(url.includes('arsh'));// true present abv string
console.log(url.includes('123'));// true present 

console.log(url.includes('alisha'));// false not present

/* Array can hold any of the data types. But, the String can hold only a char data type */

const str = 'My country name is India';
const words = str.split(' ');// split word 
console.log(words[2]);

const chars = str.split(' ');
console.log(chars[5]);

//The JavaScript split() method divides a string into an ordered list of substrings 
// and returns them as a new array. 
// The original string is not modified. 
console.log(gameName.split("-"));//alisha-kh gve o/p alisha ,kh = seperated by '-'

console.log(str.split("country"));





