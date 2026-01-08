// ******** For *************

//for (let index = 0; index < array.length; index++) {
    //const element = array[index];  
//}



// for(let index = 0 ; index <= 10 ; index++){
//     const element = index;
//     console.log(element);
// }



// for(let i = 0 ; i <= 10 ; i++){
//     const element = i;
//     if (element == 5){
//        // console.log("5 is best number");
//     }
//    // console.log(element);
// }



// for (let i = 2; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//        // console.log(`Inner loop value ${j} and inner loop ${i}`); 
//         console.log(i + '*'+ j +' = '+ i*j );
//     } 
// }



// let myArray = ["flash", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {  //if <= o/p give = flash  batman  superman  undefined ; if not ++ o/p only ifinit flash
//     const element = myArray[index];
//     console.log(element);  // op= flash  batman  superman
// }



// Break and continue


// for (let index = 1; index <=20; index++) {
//     console.log(`value of i is ${index}`);
// }


// for (let index = 1; index <=20; index++){
//     if (index==5){
//         console.log( "number 5 detected" );  
//         break ;                             // after detection 5 , break , and process stop
//     } 
//     console.log(`value of i is ${index}`);
//}


for (let index = 1; index <=20; index++){
    if (index==5){
        console.log( "number 5 detected" );  
        continue;                       // after detection 5 , skip 5 and write"number 5 detected"  and again continue....
    } 
    console.log(`value of i is ${index}`);
}
