const score = 400
// console.log(score);

const myNumber = new Number(2.2332);
// console.log(myNumber);

// console.log(myNumber.toString().length);
// console.log(myNumber.toFixed(2));
// console.log(myNumber.toPrecision(3));

let hundreds = 100000000
// console.log(hundreds);
// console.log(hundreds.toLocaleString()); // => 100,000,000 => converts number to string and represent it in this US form
// console.log(hundreds.toLocaleString('en-IN')); // => 10,00,00,000 => converts number to string and represent it in Indian form

// +++++++++++++++++++++++++++++++++++ Maths  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)