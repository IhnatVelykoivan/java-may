// function User(id,name,surname,email,phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// let userList = [
//     new User(10, 'Bender', 'Rodrigez', 'example@example.com', '+380966666666'),
//     new User(9, 'Leela', 'Touranga', 'example@example.com', '+380966666666'),
//     new User(8, 'Doctor', 'Zoydberg','example@example.com', '+380966666666'),
//     new User(7, 'Phillip', 'Fri', 'example@example.com', '+380966666666'),
//     new User(6, 'Amy', 'Wong','example@example.com', '+380966666666'),
//     new User(5, 'Professor', 'Farnsworth', 'example@example.com', '+380966666666'),
//     new User(4, 'Cleaner', 'Scruffy', 'example@example.com', '+380966666666'),
//     new User(3, 'Zapp', 'Brennigan', 'example@example.com', '+380966666666'),
//     new User(2, 'Kif', 'Kroker', 'example@example.com', '+380966666666'),
//     new User(1, 'Hermes', 'Conrad', 'example@example.com', '+380966666666')
// ];
// console.log(userList)
//
// function filterFunction(user){
//     return user.id % 2 === 0;
// }
// const filterUser = userList.filter(filterFunction)
// console.log(filterUser)
//
// function sorter(user1, user2) {
//     return  user1.id - user2.id;
// }
//
// console.log(userList.sort(sorter))
//
// console.log(userList.sort((user1,user2) => user1.id - user2.id));

//     function Client (id, name, surname, email, phone, ...products) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = products;
//     }
//
// function Products(title,price) {
//     this.title = title;
//     this.price = price;
// }
//
// let clients = [
//     new Client(1, 'Petr','Banka','example@example.com','+380666666666',[new Products('tv',130000),new Products('remote control',300)]),
//     new Client(1, 'Pavel','Cherep','example@example.com','+380666666666',[new Products('computer', 340000),new Products('mouse+keyboard', 2499)]),
//     new Client(1, 'Boris','Drozd','example@example.com','+380666666666',[new Products('boiler', 150000 ), new Products('wiring', 999)]),
//     new Client(1, 'Alexandr','Golandec','example@example.com','+380666666666',[new Products('PlayStation 5', 277000), new Products('set of stick', 7500),new Products('webcam', 4499)]),
//     new Client(1, 'Bohdan','Pingvin','example@example.com','+380666666666',[new Products('laptop', 199000)]),
//     new Client(1, 'Olga','Banchmark','example@example.com','+380666666666',[new Products('electrical scooter', 58000 )]),
//     new Client(1, 'Ekaterina','Privacy','example@example.com','+380666666666',[new Products('sawdust', 199000)]),
//     new Client(1, 'Mariya','Token','example@example.com','+380666666666',[new Products('atomizer', 5000), new Products('scanner', 3300), new Products('printer', 5700)]),
//     new Client(1, 'Oksana','P2P','example@example.com','+380666666666',[new Products('jackhammer', 14900),new Products('drill', 9900)]),
// ];
//
// const clientActions = clients
//     .sort((a,b) => a.order.length - b.order.length)

// function Car (model, producer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.drive = function (){
//             console.log(`We drive at a speed ${this.maxSpeed} of k/h`);
//         }
//         this.info = function (){
//             for (const key in this){
//                 console.log(key, this[key]);
//             }
//         }
//         this.increaseMaxSpeed = function (speedToAdd){
//             if (speedToAdd > 0)this.maxSpeed = this.maxSpeed + speedToAdd;
//         }
//         this.changeYear = function (year){
//             if (year > 1815) this.year = year;
//         }
//         this.addDriver = function (driver) {
//             if (driver) this.driver = driver;
//         }
// }
// const car = new Car('fusion','ford','2015',240,'2.0')
// console.log(car);
// car.year()
// car.drive();
// car.driver();
// car.info();
// car.increaseMaxSpeed();
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive() {
//         console.log(`We drive at a speed ${this.maxSpeed} of k/h`)
//     };
//     info(){
//         for (const key in this){
//             console.log(key, this[key]);
//         }
//     };
//     increaseMaxSpeed(speedToAdd){
//             if (speedToAdd > 0)this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     changeYear(year){
//             if (year > 1815) this.year = year;
//     };
//     addDriver(driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car('fusion','ford','2015',170,'2.0')
// console.log(car);
// car.changeYear(2018)
// car.addDriver();
// car.drive();
// car.info();
// car.increaseMaxSpeed();

// class Cinderella {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footsize;
//     };
// }
//
// class Prince{
//     constructor(name, age, searchSize) {
//         this.name = name;
//         this.age = age;
//         this.searchSize = searchSize;
//     };
// }
//
// const cinderellas = [
//     new Cinderella('Kate','24','36'),
//     new Cinderella('Nikki','28','37'),
//     new Cinderella('Alex','25','38'),
//     new Cinderella('Isabella','23','36.5'),
//     new Cinderella('Caroline','26','37.5'),
// ];
//
// const prince = new Prince('Robert', '28', '36.5');
//
// // for (const cinderella of cinderellas) {
// //     if (cinderella.footSize === prince.searchSize) {
// //         prince.wife === cinderella;
// //     }
// // }
//
// const cinderellaMain = cinderellas
//     .find(cinderella => cinderella.footSize===prince.searchSize);
//
// prince.wife = cinderellaMain;
// console.log(prince.wife);

// Array.prototype.myForEach = function (callBack){
//     const yourArray = this;
//     for (const item of yourArray) {
//         callBack(item);
//     }
// };
//
// [11,22,33].myForEach((x)=> console.log(x));
//
// Array.prototype.myFilter = function (predicate) {
//     const arr = [];
//     for (const item of this) {
//         if (predicate(item)){
//             arr.push(item)
//         }
//     }
//     return arr;
// };
//
// const users = [
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
//
// const result = users.myFilter((user) => user.status);
// console.log(result);

// function clonner(object){
//     if (object) {
//         let functions = [];
//         for (const key in object) {
//             if (typeof object[key] === 'function'){
//                 const functionClone = object[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObject = JSON.parse(JSON.stringify(object));
//         for (const func of functions) {
//             cloneObject[func.key] = func.functionClone;
//         }
//         console.log(cloneObject);
//         return cloneObject
//     }
//     throw new Error(`Not found`)
// }
//
// const clone = clonner({id:123,name:'qwerty', greeting() {console.log('hello')}, foo() {console.log('bar')}});
// clone.greeting();

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1,...course})));
