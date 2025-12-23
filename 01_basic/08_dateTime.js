// Dates = typeof = object

let myDate = new Date()
console.log(myDate.toString());// date, time and gmt
console.log(myDate.toDateString());// only date
console.log(myDate.toLocaleString());// date and time but date mm/dd/yy
console.log(typeof myDate);


//let myCreatedDate = new Date(2023, 0,23)// months starts from "0"
//console.log(myCreatedDate.toDateString());


//let myCreatedDate = new Date(2023, 0,23,5,3) // date and time
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")  // date and time
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());// store time value in millisecond


let myTimeStamp = Date.now() 
console.log(myTimeStamp);// gave millisecond value

console.log(Math.floor(Date.now()/1000));// date in seconds

let newDate =new Date()
console.log(newDate.getMonth()+1); // starts from 0 drfr 11=dec, also start by add 1 get exact mnth
console.log(newDate.getDay());// 1= monday

//'${newDate.getDay()}' and the time ''

newDate.toLocaleString('default',{weekday: "long"})




