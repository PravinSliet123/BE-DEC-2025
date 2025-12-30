// let userList = [1, 2, 3, 4, 5, 7, 2, 4];
// console.log('userList: ', userList);

// userList.splice(2,5,0,0,3,4,5,66)

// console.log("userList: ", userList.slice(2,5));
//Add value in Array

//1. Add last
// userList.push(6);
//2. Add at begining
// userList.unshift(0);
//3. remove from end
// userList.pop();
//4. remove from starting
// userList.shift()

//LOOPING

// for (let i = 0; i < userList.length; i++) {
//   console.log("user-", userList[i]);
// }

// let i = 5;

// do {
//   console.log("while-user-", userList[i]);
//   i++;
// } while (i < userList.length);

// console.log("userList: ", userList);

//forEach

// function sum(){

// }

// function sum(a) {
//   return function val2(b) {
//     console.log(a + b);
//   };
// }

// const val= sum(10);
// console.log('val: ', sum(5)(4));

// const users = userList.forEach((item,index)=>{
//     console.log('item: ', item);

// })

// Map

// const users = userList.map((item,index,arr)=>`user-${item}`)
// console.log('users: ', users?.filter((item,index,arr)=>item=="user-4"));
// console.log('users: ', users?.findIndex((item,index,arr)=>item=="user-4"));

// let arr = [1,2,[3,4,[5,5,[,[,[,[]]]]]]]
// console.log('arr: ', arr.flat(Infinity));

//Object

// let user = [
//     {
//         name: "Sarv Infotech",
//         licNo: "233",
//         address: "Muzaffarpur",
//     },
//     {
//         name: "Sarv Infotech",
//         licNo: "233",
//         address: "Muzaffarpur",
//     },
//     {
//         name: "Sarv Infotech",
//         licNo: "233",
//         address: "Muzaffarpur",
//     },
//     {
//         name: "Sarv Infotech",
//         licNo: "233",
//         address: "Muzaffarpur",
//     },
// ];
// user.forEach(element => {
//     console.log('element: ', element.address);

// });

// let companyProfile = new Object();
// console.log('user: ', user);
// companyProfile["pinCode"]="843320"
// console.log('companyProfile: ', user["licNo"]);

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let key in user){
//     console.log(key+":",user[key]);
//     console.log()
// }

//Prototype

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.userNames = function () {
//   return `hello ${this.name}`;
// };

// const p1 = new Person("Sarv");
// console.log("p1: ", p1.userNames());
// const p2 = new Person("Info");
// console.log("p2: ", p2.userNames());
