// function asd (a, b){
//     return a + b;
// }

// const calc = function (a, b){
//     console.log(arguments);
//     return a + b;
// }
// console.log(calc(10, 20))

// const calc = (a, b) => {
//     return a + b;
// }
// console.log(calc(10, 20))

// const calc = (a, b) => a + b;
// console.log(calc(10, 20))

// let obj = {
//     id: 1232,
//     name: 'vasya',
//     greeting1: function (msg){
//         console.log('hello',msg, this.name)
//     },
//     greeting2(msg){
//         console.log('hello2',msg, this.name)
//     },
//     greeting3: (msg) => {
//         console.log('hello3',msg, this.name)
//     }
//
// }
//
// obj.greeting1('you');
// obj.greeting2('me');
// obj.greeting3('us');

// function userBuilder(id, name) {
//     let user = {
//         id,
//         name,
//     }
//     return {
//         getID: ()=> {
//             console.log(user.id);
//         },
//         getName() {
//             console.log(user.name)
//         },
//         setID(id) {
//             if (id > 0) {
//                 user.id = id;
//             }
//         },
//         setName (name) {
//             if (name) {
//                 user.name = name
//             }
//         },
//         getObjectCopy () {
//             return  {
//                 id:user.id,
//                 name:user.name
//             }
//         }
//     };
// }
//
//
// let manipulatorOverUser1 = userBuilder(1, 'kokos');
// let manipulatorOverUser2 = userBuilder(2, 'abrikos');
//
// manipulatorOverUser1.getID();
// manipulatorOverUser1.getName();
//
// manipulatorOverUser1.setID(100);
//
// manipulatorOverUser1.getID();
//
// manipulatorOverUser1.setName('abrikos')
// manipulatorOverUser1.getName()
//
// let userCopy = manipulatorOverUser1.getObjectCopy()
// console.log(userCopy)

// let arr =  [11, 22, 33, [44, 55], [66 , 77, [111, 222]]];
// let innerArray = [];
//
// function flatter (array) {
//     for (const item of array) {
//         if (Array.isArray(item)){
//             flatter(item)
//         }
//         else {
//             innerArray.push(item);
//         }
//     }
// }
//
// flatter(arr);
// console.log(innerArray);
//

// function iterator (arr, i){
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i);
//     }
// }
// iterator(innerArray)

// function* cardholder () {
//     let cards = [
//         {value: 6, suite: 'diamond'},
//         {value: 7, suite: 'spade'},
//         {value: 8, suite: 'diamond'},
//         {value: 9, suite: 'spade'},
//     ]
//
//     for (const card of cards) {
//         yield card;
//
//     }
// }
// let holder = cardholder();
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());

// try {
//     console.log(a);
// } catch (e){
//     console.log(e);
// }


// console.log('qwerty')
//
// function asd(a, b) {
//     if (b === 0){
//         throw new Error('Not found!')
//     }
// }
//
// try {
//     asd(100, 0);
// } catch (e) {
//
// }