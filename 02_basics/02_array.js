const marvel_heros = ["Shaktiman","Aladin","Gama"]
const dc_heros = ["Superman","Flash","Batman"]
console.log(marvel_heros);
console.log(dc_heros);

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr);

// console.log(marvel_heros);
// console.log(dc_heros);

console.log(dc_heros.toString())
let allHeros = [...marvel_heros,...dc_heros]
console.log(allHeros);

let newArr = [1,2,3,[4],5,[6,[7,[12,[23] ],8],9]]
console.log(newArr);
console.log(newArr.flat(Infinity));

console.log(Array.isArray("Hansraj"));

console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hansraj",age:21}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));


console.log(typeof marvel_heros);
console.log(marvel_heros[1]);

let numbers_array = [8,4,6,2,4,1]
console.log(numbers_array.sort());
console.log(numbers_array.length);
console.log(numbers_array.join(","));   // => join all array elements with specified string and covert it into a string.

delete numbers_array[0]
console.log(numbers_array);
console.log(numbers_array.slice(1,3));

console.log(numbers_array);
