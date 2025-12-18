 const name = "Alisha"
 const repoCount = 50

//  console.log(name + repoCount + " Value");// but dont use this method = outdated
 
//   now use back stick wd string interpollation

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('alishakh')

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

