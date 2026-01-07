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
 //false=='', op=true
 //0 == '', op=true