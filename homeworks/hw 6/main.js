// let str = 'lorem ipsum';
// console.log(str.length);

// let str = (text) => {
//     console.log(text.toUpperCase());
//     return text
// }
// str('hello world')

// let str = (text) => {
//     console.log(text.toLowerCase());
//     return text
// }
// str('LOREM IPSUM')

// let str = ' dirty string   ';
// const s = str.trim();
// console.log(s)
// console.log(s.length);
// console.log(str.length);

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(['Ревуть', 'воли', 'як', 'ясла', 'повні']);
// console.log(arr)
//
// function strtoarr(str){
//     if (str){
//         const split = str.split(' ');
//         return split;
//     }
//     return ['']
// }
// console.log(strtoarr(str))

// const numbers = [10,8,-7,55,987,-1011,0,1050,0];
// const strings = numbers.map (value => value.toString());
// console.log(strings)

// let nums = [11,0.21,31.1,2.1,3.23];  // don't work
// let ascending = [];
// let descending = [];
//
// function sortNums(nums, direction) {
//     if (direction === 'ascending' ) return nums.sort((a, b) => a - b);
//     if (direction === 'descending' ) return nums.sort((a, b) => b - a);
// }
//
// console.log(sortNums(nums, ascending))
//
// function sortNums(numArray, direction) {
//     const sort = numArray.sort((a, b) => a - b);
//     if (direction === 'ascending'){
//         return sort;
//     }
//     if (direction === 'descending'){
//         return sort.reverse();
//     }
// }

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const toSorted = coursesAndDurationArray
//     .sort((a, b) => a.monthDuration - b.monthDuration);
//
// const filter = toSorted.filter(value => value.monthDuration > 5);
//
// const map = filter.map((value, index) =>{
//     value.id = index + 1;
//     return value;
// })
// console.log(map)
//
// const map1 = coursesAndDurationArray
// .sort((a,b) => b.monthDuration - a.monthDuration)
// .filter(value => value.monthDuration > 5)
// .map((value, index) => {
//     value.id = index + 1;
//     return value;
// });
// console.log(map1)

// const suits = ['spade', 'diamond','heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
// const cards = [];
//
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red' ;
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards)
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'))
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'clubs'));
// console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !=='6' || card.value !=='7' || card.value !=='8' || card.value !=='9')));
//
// const reduce = cards.reduce((accum,card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'clubs':
//             accum.clubs.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//     }
//     return accum;
// } , {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(reduce)

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(course =>{
//     return course.modules.includes('sass')
// }));
//
// console.log(coursesArray.filter(course =>{
//     return course.modules.includes('docker')
// }));
