// // if

// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 40)
// {
// console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("Executed");


// // == chck value , === als chck data type


// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power} `);
// }
//   //console.log(`User Power: ${power} `); // cant use here bcz dclr inside pvt scope , will find error= pwr not defined

//   // ******** shorthand notation ***********

//  // const balance = 1000 
//   //if (balance > 500) {
//    // console.log("expensive");
//  // }

//         // or 

//  //if (balance>500) console.log("expensive"); // implicit scope,but only execute n single line or by using "," ; but not use in practical= usimg ","



//  const balance = 100
//  if (balance < 500){
//     console.log(" In budget");
//  }
//  else if (balance<700){
//     console.log(" budget can improve");
//  }
//  else if (balance <1200){
//     console.log("still little chances ");   
// }
// else{
//     console.log("cant afford");
// }

const userLoggedIn = true
const debitcard = true
const userLoggedInFromMail = true
const userLoggedInFromGoogle = false

if (userLoggedIn && debitcard){      //  && = rqr both cndtn to fulfill
    console.log("allow user to purchase");
 }
 else {
    console.log(" sorry not allow");
 }
 if (userLoggedInFromGoogle || userLoggedInFromMail){
    console.log("user allow to logged in ");
 }
 
