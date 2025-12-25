// objects2
// singleton
//const appUser = new Object()// singleton object

const appUser = {}// op same {}, just it is not singleton object

appUser.id = "123abc"
appUser.name = "rocky"
appUser.isLoggedIn ="false"

console.log(appUser); // 1)op={}// 2)now when declr id,name ,loggedi so o/p will b dt under{}


// ****Objects under Objects**********

const newUser = {
    email: "ak14@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Alisha",
            lastname :"Khatibi"
        }

}
}
console.log(newUser.fullname);

//**********Object assigned********** */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a" ,4: "b"}
const obj3 = {5: "a",6: "e" }

//const obj4 = {obj1, obj2, obj3}
//console.log(obj4);// o/p= {obj1: {'1':'a','2':'b'},obj2:{'3':'a','4':'b'},obj3:{...}:

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);
