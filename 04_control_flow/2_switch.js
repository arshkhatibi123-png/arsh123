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
    break;  // match all data aftr match ,excpt default

    default:
        break;
}

//The break Keyword:

// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// No more statements in the switch block will be executed.
// It is not necessary to break the last case. The switch ends (breaks) there anyway.

// Note:

// The break keyword is crucial for preventing a "fall-through."
// Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.