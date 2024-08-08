// let mass = ['asd', 'iop', 'wer', 'tyu', 'hjk', 'vbn', 'ert', 'dfg', 'zxc', 'qwe'];
// console.log(mass);

// let book = {
//     cost: 150,
//     pageCount: 300,
//     genre: 'prose',
//     author:{
//         age:75,
//         name: 'Varlam',
//         surname:'Shalamov'}}
// console.log(book)
//
// let menu = document.querySelector('.menu');
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(value => value.json())
// .then(users => {
//     for (const user of users) {
//         let li = document.createElement('li');
//         li.innerText = user.name;
//         let li1 = document.createElement('li1');
//         li1.innerText = user.id;
//         let li2 = document.createElement('li2');
//         li2.innerText = user.email;
//             menu.append(li,li1,li2);
//             console.log(li,li1,li2)
//     }
// })
//
// let x = prompt();
//      if (x >= 1){
//          console.log(true)
//      }else if (x <= -1) {
//          console.log(false)
//      } else if (x <! 0) {
//          console.log(false)
//      } else {
//          console.log('?????')
//      }
// console.log(x);
//
//
// let time = prompt();
// if (time <! 0 ){
//     console.log('more time')
// }else if (time <= 15){
//     console.log('first half hour')
// }else if (time <= 30){
//     console.log('second half hour')
// }else if (time <= 45){
//     console.log('third half hour')
// }else if (time <= 60){
//     console.log('fourth half hour')
// }else {
//     console.log('????')
// }
//
// let day = prompt();
// if (day <! 0 ){
//     console.log('dayZ')
// }else if (day <= 11){
//     console.log('first decade of the month')
// }else if (day <= 21){
//     console.log('second decade of the month')
// }else if (day <= 31){
//     console.log('third decade of the month')
// }else {
//     console.log('????')
// }
//
// let week = [
//     {day: 'Sunday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Monday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Tuesday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Wednesday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Thursday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Friday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Sabbath', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']}
// ];
// console.log(week);

// let week1 = prompt();
// switch (week1){
//     case 'Sunday':
//         console.log('chill');
//         break;
//     case 'Monday':
//         console.log('lesson!');
//         break;
//     case 'Tuesday':
//         console.log('cons!');
//         break
//     case 'Wednesday':
//         console.log('lesson!');
//         break;
//     case 'Thursday':
//         console.log('cons!');
//         break;
//     case 'Friday':
//         console.log('lesson!');
//         break
//     case 'Sabbath':
//         console.log('english!');
//         break
//     default:
//         console.log('?????');
// }

// let a = +prompt();
// let b = +prompt();
// let global = a||b;
// if (a > b) {
//     console.log(a);
// }else if (a < b){
//     console.log(b)
// }else if (a === b){
//     console.log(global)
// }else {
//     console.log('Not found')
// }


// let a = prompt();
// switch (a) {
//     case null:
//     case undefined:
//     case 0:
//         break
//     default:
//         console.log('default')
// }

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let study = coursesAndDurationArray.monthDuration
// if (study[0] > 5){
//     console.log('super')
// }
// else if (study[1] > 5){
//     console.log('super')
// }
// else if (study[2] > 5){
//     console.log('super')
// }
// else if (study[3] > 5){
//     console.log('super')
// }
// else if (study[4] > 5){
//     console.log('super')
// }else if (study[5] > 5){
//     console.log('super')
// }