//
//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, no code is executed.
//switch is often used as a more readable alternative 
// to many if...else if...else statements,
//  especially when dealing with multiple possible values



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }




const month = 3

switch(month) {
    case 1:
console.log("January");
    break;
    case 2:
console.log("Feb");
    break;
    case 3:
console.log("March");
    break;
    case 4:
console.log("April");
    break;// match all data aftr match ,excpt default

    default:
        break;
}