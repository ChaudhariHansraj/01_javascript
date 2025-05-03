// let arr = [10,20,30,40,50,60,70,80,90]
// console.log(arr);
// arr.push(11)
// arr.push(22,33,44)
// console.log(arr);
// let newArr = arr
// newArr.push(101)
// console.log(newArr);
// console.log(arr);
// arr.pop()
// console.log(arr);
// console.log(newArr);
// arr.shift()
// console.log(arr);
// arr.unshift(31)
// console.log(arr);

const myArr = [1,2,3,4,5,6,7]
const myn1 = myArr.slice(1,3)  // => not Manipulate original array
console.log(myn1);
console.log(myArr);

const heros = ["Saktiman","Gama","Gado"]
const myHeros = heros.splice(1,3)  // => Manipulate original array
console.log(heros);
console.log(myHeros);
console.log(myArr.length);
