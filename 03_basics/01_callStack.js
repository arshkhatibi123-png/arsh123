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
console.log(let result1 = addNum(val1, val2));
console.log(let result2 = addNum(10,5));