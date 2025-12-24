const marvel_heros = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]//o/p=['Thor','ironman,'spiderman'['superman','flash','batman']]
//marvel_heros.push(dc_heroes) // gave  o/p = array over array, so not use.
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);// 3rd element 1st


//****concat****

//The concat() method concatenates (joins) two or more arrays.
//The concat() method returns a new array, containing the joined arrays.
//The concat() method does not change the existing arrays.

//const arr1 = ["Cecilie", "Lone"];
//const arr2 = ["Emil", "Tobias", "Linus"];
//const children = arr1.concat(arr2);
//console.log(children);

//const heroes = marvel_heros.concat(dc_heroes)
//console.log(heroes);

//****spread******* */

const heroes =[...dc_heroes,...marvel_heros]// spread
console.log(heroes);

//*******flat***** */

const another_array = [1,2,3,[4,5,6,[7,8,9] ] ]
const all_array = another_array.flat(Infinity)
console.log(all_array);// o/p=[1,2,3,4,5,6,7,8,9]

//checking is array?

console.log(Array.isArray("alisha"));// o/p=false, not array

// convert into array

console.log(Array.from("alisha"));// o/p=['a','l','i','s','h','a']

console.log(Array.from({name :"alisha"}));// not able to detect gave empty array=> o/p=[]


