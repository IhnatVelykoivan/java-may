let a = 0;
//postfix

// increment
// a++; // short
// a = a +1 // long

// decrement
// a--;
// a = a -*/** 1; //any function


//prefix

// a++;
// console.log(a);
// let b = a++;
// console.log(b);
// console.log(a);

//cycle

// for (let counter = 0; counter < 5; counter++){
//     console.log('.')
// }

// itar

// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//
// }

// ritar

// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//
// }

// for of

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray){
//     if(element.monthDuration > 5){
//         console.log('')
//     } else {
//         console.log(' ')
//     }
// }

// for in

// let user = {
//     id: 1,
//     name: 'kokos',
//     age: 23,
//     surname: 'kokosiv',
//     skills: ['html', 'css', 'js']
// }
// for (const key in user){
//     console.log(key);
//     if (Array.isArray(user[key])){
//         for (const element of user[key]) {
//             console.log(element);
//         }
//     }
// }


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
//
// let arrTrue = [];
// let arrFalse = [];
//
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     if (user.status){
//         arrTrue[arrTrue.length] = user;
//         // arrTrue.push(user);
//     }else {
//         // arrFalse[arrFalse.length] = user;
//         arrFalse.push(user);
//     }
//     i++;
// }
// console.log(arrTrue);
// console.log(arrFalse);
//
// do {
//     console.log('qwe');
// } while (false)


