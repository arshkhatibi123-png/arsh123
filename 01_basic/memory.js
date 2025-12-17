// Types of memory
// 1) stack memeory (at primitive )=> one over another // 2) Heap memory(at non primitive)=> 
let myYoutubename = "arsh123dotcom"
let anothername = myYoutubename

// console.log(anothername);
anothername = "chaiaurcode"// get copy of original

console.log(myYoutubename);
console.log(anothername);
 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
} //non primitive at heap and will get refernce of orgnl value not copy

let userTwo = userOne
userTwo.email= "arsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);//both same reference in heap so same value

