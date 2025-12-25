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
