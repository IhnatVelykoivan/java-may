// const rectangle = (a, b) => a * b;
// console.log(rectangle(10, 20))

// const circle = (S) => {
//     let area = Math.PI * Math.pow(S,2)
//         if (S >= 0){
//         return area;
//     }
//     return 0;
// }
// console.log(circle(5))

// const cylinder = (height, radius) => {
//     let S = 2 * Math.PI * height * radius;
//     if (S >= 0){
//         return S;
//     }
//     return 0;
// }
// let res = cylinder(13,23)
// console.log(res)

// let arrA = [1, 2, 3, 4];
// let arrB = [11, 22, 33, 44];
// let arrC = [111, 222, 333, 444];
// let innerArray = [];
//
//
// function flatter(arr) {
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             flatter(item)
//         } else {
//             innerArray.push(item);
//         }
//     }
// }
//
// flatter(arrA)
// flatter(arrB)
// flatter(arrC)
// console.log(innerArray)

// const foobar = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// foobar("qwerty")

// const foobar = (text) => {
//     document.write(
// `        <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>`);
// }
// foobar('hello world');

// const foobar = (text, counter) =>{
//     document.write('<ul>')
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>')
// }
// foobar('hello', 23)

// const foobar = (primitive) => {
//     document.write('<ul>')
//     for (const item of primitive) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write('</ul>')
// }
// foobar(arrA)
// foobar(arrB)
// foobar(arrC)

// const foobar = (users) => {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// foobar([
//     {name: 'vasya', age: 31, id: false},
//     {name: 'petya', age: 30, id: true},
//     {name: 'kolya', age: 29, id: true},
//     {name: 'olya', age: 28, id: false},
//     {name: 'max', age: 30, id: true},
//     {name: 'anya', age: 31, id: false},
//     {name: 'oleg', age: 28, id: false},
//     {name: 'andrey', age: 29, id: true},
//     {name: 'masha', age: 30, id: true},
//     {name: 'olya', age: 31, id: false},
//     {name: 'max', age: 31, id: true}
// ])

// const arr = (nums) => {
//     let min = nums[0];
//     for (const num of nums) {
//         if (num < min) {
//             min = num
//         }
//     }
//     return min;
// }
//
// console.log(arr([1.1, 0.78, 33, 44]));

// const arr = (nums) => {
//     let min = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         let num = nums[i];
//         if (num < min) {
//             min = num
//         }
//     }
//     return min;
// }
//
// console.log(arr([1.1, 2, 33, 44]));

// const sum = (arr) => {
//     let boll = 0;
//     for (const item of arr){
//         boll = boll + item;
//     }
//     return boll;
// }
//
// console.log([123, 123, 123, 12, 3])

// const swap = (arr, index1, index2) => {
//     if (index1 < arr.length && index2 < arr.length) {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//
//         return arr;
//     }
//     return 'Not found!';
// }
// console.log(swap([123, 232, 23, 122, 432], 3, 1))

// const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//     let currencyValue;
//     for (const item of currencyValues) {
//        if (item.currency === exchangeCurrency){
//            currencyValue = item;
//        }
//        let res = sumUAH/currencyValue.value;
//        return res;
//     }
// }
//
// console.log(exchange(55555,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
