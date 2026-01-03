//let a = 10
//const b = 20
//var c = 30

//console.log(a);
//console.log(b);
//console.log(c);// op=10,20,30


var c =300// still in o/p c value remain 30
if(true) {
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a); // give error a not defined
//console.log(b);// give error b not defined
console.log(c);// if comment abv console logs give o/p=30

// so not use var 

let a = 200
if(true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}
console.log(a); 
//console.log(b);
//console.log(c);

// o/p = INNER: 10
//       200

// *** scope under windows***
//scope under console in browser and in  code enviornment run under node are differnt

//************Nested Scope************ */

function one(){
    const username = "Alisha" 

    function two(){
        const website = "Youtube"
        console.log(username);// can take frm parent scpe but not vice versa
  }
 // console.log(website); // cant use website bcz ended in abv scope, shown error website not defined
  two()// if comment abv console dn gv, op= Alisha
}
one()

if (true){
    const username = "Ali"
    if(username==="Ali"){
        const website =" youtube"
        console.log(username + website);
    } 
   // console.log(website); // will show error bcz website outside scope 
console.log(username);
}
//console.log(username);// will show error bcz username outside its scope


//+++++++++++++interesting++++++++

console.log(addone(5));// can written  in d 1st or lst also  bcz not dclr as variable
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
addTwo(5) // can't written in d starting  bcz fntn not only declr but also hold as variables..