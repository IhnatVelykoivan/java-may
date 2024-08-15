// function rectangle (num1, num2){
//         if (num1 >= 0 && num2 >= 0){
//             return num1 * num2;
//         }
//         return 0;
// }
//
// let res = rectangle(10, 2)
// console.log(res);

// function circle (area){
//     let S = Math.PI * Math.pow(area,2)
//     if (S >= 0){
//         return S;
//     }
//     return 0;
// }
// let res = circle(13 )
// console.log(res)

// function cylinder (height, radius){
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
//
// function arrayPrinter(arr) {
//     for (const arrElement of arr){
//         console.log(arrElement)
//     }
// }
//
// arrayPrinter(arrA);
// arrayPrinter(arrB);
// arrayPrinter(arrC);

// function printtodoc(msg, tag)  {
//     document.write(`<${tag}>${msg}</${tag}>`);
//     console.log(arguments);
// }
// printtodoc('Privit', 'div');
// printtodoc('Hola','h1');
// printtodoc('Kunichua','span');
// printtodoc('Hello','p');

// function printtodoc(msg1, msg2, msg3, msg4, tag1, tag2)  {
//     document.write(`<${tag1}><${tag2}>${msg1}${msg2}${msg3}${msg4}</${tag2}</${tag1}>`);
// }
// printtodoc('Privit', 'Hola', 'Bonjour', 'Hello', 'ul', 'li');

// function foobar(text){
//     document.write(`<p>${text}</p>`)
// }
// foobar("text")

// function foobar(text) {
//     document.write(
// `        <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>`);
// }
// foobar('hello world');

// function foobar(text, counter){
//     document.write('<ul>')
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>')
// }
// foobar('hello', 23)

// function foobar(primitive) {
//     document.write('<ul>')
//     for (const item of primitive) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write('</ul>')
// }
// foobar(arrA)
// foobar(arrB)
// foobar(arrC)

// function foobar(users) {
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

// function arr(nums){
//     let min = nums[0];
//     for (const num of nums) {
//         if (num < min) {
//             min = num
//         }
//     }
//     return min;
// }
//
// console.log(arr([1.1, 2, 33, 44]));

// function arr(nums){
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

// function sum(arr){
//     let boll = 0;
//     for (const item of arr){
//         boll = boll + item;
//     }
//     return boll;
// }
//
// console.log([123, 123, 123, 12, 3])

// function swap(arr, index1, index2) {
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

// function exchange(sumUAH,currencyValues,exchangeCurrency){
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
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));

