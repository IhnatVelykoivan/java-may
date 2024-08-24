// function userFactoryFunction (id, name){    // factory function
//     return {
//         id, name
//     }
// }
//
// function clientFactoryFunction (id, name, password){    // factory function
//     return {
//         id, name, password
//     }
// }
//
// let userFactoryObject = userFactoryFunction('1', 'qwerty');
// let client = clientFactoryFunction('1','kokos', 'kokos123');
//
// console.log(userFactoryObject)
// console.log(client)
//
// function User(id, name) {
//     this.id = id
//     this.name = name
//     this.greeting = function (msg) {
//         console.log(msg + ' my name is ' + this.name)
//     }
// }
//
// let user1 = new User(1, 'zxc');
// console.log(user1 instanceof User)
// user1.greeting()
// let user2 = new User('2', 'qwe')
// console.log(User);
// console.log(user2 instanceof User);
//
//
// User.prototype.nums = 1003000;
// let user3 = new User('3', 'blame')
// console.log(user3 instanceof User);
// console.log(user3.nums)
//
// let nums = [11, 22, 33];
// console.log(nums instanceof Array);
// Array.prototype.xxx = function (){
//     console.log(this)
// }
// nums.xxx()
//
// user1.greeting.call(userFactoryObject, 'hola')
// user1.greeting.apply(userFactoryObject, ['aloha'])
//
// const greetingClone = user1.greeting.bind(userFactoryObject);
// greetingClone('ramirez')
// greetingClone('ramirez')
// greetingClone('ramirez')
// greetingClone('ramirez')
//
// function SuperUser(id, name, login, password) {
//     User.apply(this, [id,name]);
//     this.login = login;
//     this.password = password;
// }
// const superUser = new SuperUser(123, 'Bohdan', 'inlove', 'GFCg^^hw637');
// console.log(superUser);

// class User {
//     constructor(id,name) {
//         this.id = id;
//         this.name = name;
//     }
//     greeting(msg) {
//         console.log(msg, 'my name is', this.name);
//     }
// }
//
// console.log(User.prototype.greeting(asdasd))

// const user1 = new User(1, 'Bender');
// const user2 = new User(2, 'Bender');
// const user3 = new User(3, 'Bender');
// const user4 = new User(4, 'Bender');
// console.log(user1, user2,user3,user4);
// console.log(Array.isArray(user4))
//
// class SuperUser extends User{
//     constructor(id,name,password,login) {
//         super(id,name);
//         this.login = login;
//         this.password = password;
//     }
//     foobar() {}
// }
// const superUser = new SuperUser(321,'Lila','gstGYHJyf567', 'LilandStich');
// console.log(superUser);
// superUser.greeting('ololo');

// const time = new Date();
// console.log(time);
// console.log(time.getDay());

// let set = new Set();
// set.add('zxc')
// set.add('vbn')
// set.add('rty')
// set.add('qwe')
// set.keys()
// console.log(set);
//
// console.log({} === {});
//
// console.log(set.has({}));

// let map = new Map();
// map.set('doctor', {name: 'roman'});
// map.set('dosya', {name: 'nikolaj'});
// map.set('petrushka', {name: 'alexandr'});
//
// console.log(map);
//
// let entries = map.entries();
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());
//
// map.get(map.get('boris'));

