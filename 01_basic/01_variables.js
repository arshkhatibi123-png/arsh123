const accountId = 144553
let accountEmail = "arsh123@gmail.com"
var accountPassword ="1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "xuy@gmail.com"
accountPassword = "123456"
accountCity = "Raipur"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
