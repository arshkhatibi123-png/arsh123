// if

const isUserloggedIn = true
const temperature = 41

if (temperature === 40)
{
console.log("less than 50");
}
else {
    console.log("temperature is greater than 50");
}
console.log("Executed");


// == chck value , === als chck data type


const score = 200
if (score > 100){
    let power = "fly"
    console.log(`User Power: ${power} `);
}
  //console.log(`User Power: ${power} `); // cant use here bcz dclr inside pvt scope , will find error= pwr not defined