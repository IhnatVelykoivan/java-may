// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// let arr = [];
// console.log(Array.isArray(arr));
// arr.push('qwerty1');
// arr.push('qwerty2');
// let num =  arr.push('qwerty3');
// console.log(arr);
// console.log(num)
//
// let pop = arr.pop();
// console.log(arr);
// console.log(pop);
//
// arr.unshift('qwerty5');
// console.log(arr);
// // arr.shift() // delete obj
//
// console.log(arr);
// let s = arr.join();
// console.log(s);
//
// let arr2 = [11, 22, 33];
//
// let concatedArray = arr.concat(arr2);
// console.log(concatedArray);
// concatedArray.reverse();
// console.log(concatedArray);
//
// let reverse = concatedArray.reverse();
//
// console.log(concatedArray);
// console.log(reverse);
// console.log(reverse === concatedArray);
//
// console.log(concatedArray.slice(1, 3));
// console.log(concatedArray);
//
// // let removedItem = concatedArray.splice(2, 1, 111);
// // console.log(concatedArray);
// // console.log(removedItem);
//
// console.log(concatedArray.indexOf(33));
// console.log(concatedArray.indexOf(3, 33));
// console.log(concatedArray.includes(22));

// users.forEach(function (user){  // alpha
//     console.log(user);
// });
//
// let resulFilterArray = users.filter(function (user1){
//     return user1.status;
// });
//
// let resulFilterArray = users.filter((user) => user.status);
// let predicate = user => user.age >30;
// let predicate1 = user => !user.status;
// let resulFilterArray = users.filter(predicate); //,predicate1);
//
// console.log(resulFilterArray);
//
// let newVar =  function (item){   // active
//     console.log(item);
// };
// for (const user of users) {
//     newVar(user);
// }
//
// for (const user of users) {  // lazy
//     (function (item){
//         console.log(item);
//     }(user))
// }

// let mapResultArray = users.map((user, index) => {
//     let obj = {
//         id: index + 1,
//         name:user.name,
//         age: user.age,
//         status: user.status
//     }
//     return obj;
// });
// console.log(mapResultArray === users);
// console.log(mapResultArray);
// console.log(users);
//
// let mapResultArray = users.map((user, index) => {
//     let obj = JSON.parse(JSON.stringify(user));
//     obj.id = index + 1;
//     return obj;
// });
//
// let mapResultArray = users.map((user, index) => {
//
//     return {...user,id: index + 1};
// });
//
// let mapResultArray = users.map((user, index) => ({...user,id: index + 1}));
//
// console.log(mapResultArray === users);
// console.log(mapResultArray);
// console.log(users);

// let toSorted = users.toSorted((user1, user2) =>{
//     // return user1.age - user2.age
//     return user1.name.localeCompare(user2.name)
//     // return user1.name.toLocaleLowerCase().localeCompare(user2.name.toLocaleLowerCase())
// });
// console.log(users)
// console.log(toSorted)

// omega // let reduce = users.reduce((accumulator, user) => {
//     if(user.status) {
//         accumulator[0].push(user);
//     } else {
//         accumulator[1].push(user)
//     }
//
//     return accumulator;
//
// }, [[],[]]);
// console.log(reduce);
//
// let reduce = users.reduce((accumulator, user) => {
//     accumulator += user.age;
//     return accumulator;
// }, 0);
// console.log(reduce);
//
// function calc(numa, numb, actionFn) {
//     actionFn(numa, numb);
// }
// calc( 10, 20, (a,b)=> console.log((a + b)/ 2))

