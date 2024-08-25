// let obj = {
//
// };
// console.log(obj.embd?.foo());

// function sample(obj){
//     let {id,foo,xxx} = obj;
//     console.log(id);
//     console.log(foo);
// }
// sample({id:1, foo(){console.log(this);},});
//
// let nums
// let a = nums[0];
// let b = nums[3];
// let c = nums[2];
// let [a,b,c] =  [00,66,33,99];
// console.log(a,b,c);

let users = [
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let[{status}] = users;
// console.log(status)

let user = {
    wife: {
        name:'anna',
        email:'example@example.com'
    },
    name: 'vasya', age: 31, status: false};

// let {wife:vivo,wife:{name},wife:{email}} = user;
// console.log(email);
// console.log(vivo.name);
//
// let [arr1,,arr] = [11,22,[333,666]];
// console.log(arr1);
// let [x,y] = arr;
// console.log(x,y);

// let newUser = {wife:user.wife,name:user.name,age:user.age,status: user.status};
let newUser = {...user, xxx: 'qwerty'};
console.log(user);
console.log(newUser);
console.log(newUser === user);
console.log(newUser.wife === user.wife);

let array = [11,22,33];
let newArray = [44,55,...array];
console.log(newArray)


let jsonObject = JSON.parse(JSON.stringify(user));
console.log(jsonObject);

let userObj = Object.create(user);
console.log(userObj);
console.log(userObj.age);

userObj.name = 'kokos';
console.log(userObj.hasOwnProperty('name'));
console.log(userObj.name);
console.log(userObj);
console.log(userObj.__proto__.name);


user.id = 100600;
console.log(user.id)

Object.defineProperty(user,'id',{
    value: 100500,
        // writable:false,
        // configurable: false,
        // enumerable: true
})

console.log(user.id)
console.log(user)

for (const userKey in user) {
    console.log(userKey)
}

Object.defineProperties(user, {
    'id': {value:'qweqwe',writable:true,configurable:false,enumerable:true},
    'name': {value:'qweqwe',writable:true,configurable:false,enumerable:true},
    'age': {value:'qweqwe',writable:true,configurable:false,enumerable:true},
    'status': {value:'qweqwe',writable:true,configurable:false,enumerable:true}
});

console.log(user);