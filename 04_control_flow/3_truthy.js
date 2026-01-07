 //    ############# truthy and falsy values   ###############

 // falsy values :
 // false , 0, -0,  BigInt On , "", null , undefined , NaN

 // Truthy values 
 //"0",'false'," ",[],{},function(){}

 const userEmail = ""

 if (userEmail)
    {
    console.log("Got user email");
 } 
 else {
    console.log("Don't have user email");
 }


 // to check array


 if(userEmail.length === 0)
    {
    console.log("Array is empty");  
 }

 // to check object empty

 const emptyObj = {}

 if (Object.keys(emptyObj).length===0)  //array.length
 {
    console.log("Object is empty");
 }


 // false == 0, op=true
 // false =='', op=true
 // 0 == '', op=true

 // +++++++++ Nullish coalescing Operator   ++++++++++

 let val1;
 //val1 = 5 ?? 10 // op=5
 //val1 = null ?? 10 //0p=10
// val1 = null ?? 10 ?? 20 //0p=10
 val1 = undefined ?? 15  //0p=15
 console.log(val1);


 //####### Terniary Operator  ####
 
 // condition ? true : false
 
 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less than 80") :  console.log("more than 80");
  

 