// two types of data types => 1) Primitive  2) nonPrimitive 

// Primitive Data Types => are data types there copy is passed when calling rather than passing the reffernce of original value
//                      => changes happend in copy
// 1) String
// 2) Number
// 3) Boolean
// 4) null
// 5) undefined
// 6) Symbol
// 7) BigInt

// const value = 10
// const valueInNumber = 1212.2
// console.log(typeof value); // => number
// console.log(typeof valueInNumber); // => number

// const myName = "hansraj"
// console.log(typeof myName); // => Stirng

// const temprature = null;
// console.log(typeof temprature); // => object

// let score;
// console.log(typeof score); // => undefined

// let button = Symbol('123')
// console.log(typeof button); // => symbol


// NonPrimitive Data Types => are data types there refference is passed when calling rather than passing there copy
//                         => changes happened in original value

// 1) Array
// 2) Object
// 3) function

// let data = {
//     name:"Hansraj",
//     age:22
// }
// console.log(data);
// console.log(typeof data); // => object

// let func = function(){
//     console.log("Hello World");
//     return 0;
// }
// console.log(func());
// console.log(typeof func);  // function

const heros = ['Shaktiman','nagraj','chirangivi']
console.log(typeof heros);

