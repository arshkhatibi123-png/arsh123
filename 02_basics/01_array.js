//array

//An array is a fundamental data structure in programming, 
//like a single container holding multiple items (elements) of the same type (numbers, text, etc.) in a sequence, stored side-by-side in memory, and accessed using a numerical index that always starts at 0

//An Array is an object type designed for storing data collections.
//Key characteristics of JavaScript arrays are:
// Elements: An array is a list of values, known as elements.
//Ordered: Array elements are ordered based on their index.
//Zero indexed: The first element is at index 0, the second at index 1, and so on.
//Dynamic size: Arrays can grow or shrink as elements are added or removed.
//Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
// javascript array copy oprtn create "shallow  copies" not "deep copy"
// shallow copy= copy whose properties share same refernce as those of source objct from which copy was made 
// ths chng to source or copy cause odrobjct to chng to, untintnl chng copy or source dt dont expect.

// array in square braqt[]

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);
 
//   PROTOTYPE :
// Every JavaScript object has a prototype,
//  which contains "shared methods and properties" that all instances of that object can use. 
// It's like a template for objects.

// array also have prototype

// ARRAY Methods:
//Basic Array Methods

//Array length//Array toString()//Array at()
//Array join()//Array pop()//Array push()
//Array shift()//Array unshift()//Array isArray()
//Array delete()//Array concat()//Array copyWithin()
//Array flat()//Array slice()//Array splice()
//Array toSpliced()

//myArr.push(6)// new element add to array

//myArr.push(7)

myArr.pop()// remove last value whatever it is .
myArr.unshift(0) // add d value in d start of array
myArr.unshift(9)// add the value in d satrt of array
myArr.shift()// remove d 1st no 
console.log(myArr.includes(9));// does array includes 9 or not?// typeof boolean
console.log(myArr.includes(3));// o/p true array contain 3

console.log(myArr);

// find index
console.log(myArr.indexOf(9));// not exist so -1
console.log(myArr.indexOf(3));// exist; o/p=4
const newArr = myArr.join() // array to string
console.log(newArr);
console.log(typeof newArr);



// Slice, splice 

//console.log("A",myArr);

//const myn1 = myArr.slice(1,3) //The slice() method returns a shallow copy of a portion of an array into a new array object. It does not change the original array. 

//Syntax: array.slice(start, end)
//start: The index to begin extraction (inclusive). Default is 0.
//end: The index before which to end extraction (exclusive). If omitted, it slices to the end.
//Example:
//javascript

const fruits = ["Banana", "Orange", "Lemon", "Apple"];
const citrus = fruits.slice(1, 3); 
console.log(citrus);

// Result: ["Orange", "Lemon"]
// original 'fruits' is still ["Banana", "Orange", "Lemon", "Apple"]

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);// o/p donot change original array

const myn2 =myArr.slice(0,4)// (x,y) =>x=starts , included; y=end ,not included 
console.log(myn2);

const myn3 = myArr.splice(1,3)
console.log(myn3);// o/p=[0,1,2] =>also included  last range
console.log("C",myArr);// also change original value=[0,3,4]


  