// *********** javascript execution context   *****
// = how to run file by javascript, how to code execute
// =run in two phase :
// 1st) global exctn contxt-> refer to "this" varible =@ browser=window object

//2)fuction exctn cntxt
//3)eval exctn cntxt = but prprty of global object,so also cld cm undr globl
//

// how to exct?
// iin two phases
// 1)memory creation phase or creation phase or memory phase
//= only memory create or allocatn of memory  or space create not exctn of fn 
//2) Exectn phase

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total 
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,5)

// 1) global extn -> this

// 2) memory phase -> allocation of memory 
// val1 - undefined 
// val2 - undefined 
// addnum- definition
//result1- undefined 
//result2- undefined 

//3) Execution phase 
//val1 -> 10
//val2 -> 5
//add Num -> new variable env + exectn Thread
//= memory phase = val1-> undefined , val2-> undefined , total->undefined 
//= execution context= num1 -> 10, num2 -> 5, total-> 15