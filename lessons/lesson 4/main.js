// function

// s = a*b;
// 200 = 20*10;



// function square(sideAnum,sideBnum){
//     // let s = sideAa * sideBb;
//     if (sideAnum > 0 && sideBnum > 0){
//         return sideAnum*sideBnum;
//     }
//     return 0;
// }
//
// // debugger;
//
// let result = square(10, 30);
// console.log(result);
//
// let result2 = square(4, 87);
// console.log(result2);





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





// let arr = [];
// let brr = [];
// function addobjatarr(obj, array){
//     array[array.length] = obj;
// }
//
// addobjatarr({id: 1}, arr);
// addobjatarr({id: 2,name: 'obrikos'}, brr);
// addobjatarr({id: 3, name: 'kokos'}, arr);
//
// console.log(arr);
// console.log(brr);





// function printtodoc(msg, tag)  {
//     document.write(`<${tag}>${msg}</${tag}>`);
//     console.log(arguments);
// }
// printtodoc('Privit', 'div');
// printtodoc('Hola','h1');
// printtodoc('Kunichua','span');
// printtodoc('Hello','p');





// function foobar(){
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1]
//     }if (arguments.length === 3){
//         return arguments[0] + arguments[1] - arguments[2]
//     }
// }
//
// console.log(foobar(11, 22, 17))



// rest argument

function barfoo(x, ...some){
    console.log(some);
}

barfoo(1,2,3,4,5,6);


function countCheks(nums){
    countCheks(100, 200, 33, 63, 123, 445, 23)
}