// let text = "HELLO WORLD";
// let char = text.charAt(0); // => returns the character at 0th position
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);  // => returns the ascii code of character present at 0th position
// console.log(char);

// const name = "W3Schools";
// let letter = name.at(2); // => get the letter at 2nd position
// console.log(letter); 

// const name = "W3Schools";
// let letter = name[2];  // => returns the letter of 2nd position
// console.log(letter);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);  // => If a parameter is negative, the position is counted from the end of the string:
// console.log(part);


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6); // => This example slices out a portion of a string from position -12 to position -6:
// console.log(part);

// the slice() and substring methods are similar 
// The difference is that start and end values less than 0 are treated as 0 in substring().


// this method treat any negative position as a 0
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);  // => this method will returns the portion from 0 to 13th position => Apple, Banana
// console.log(part);

// substr() is similar to slice() but the second parameter specifies the length of the extracted part
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6); // => Banana
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4); 
// console.log(part);

// let name = "Hansraj Chaudhari"
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let text1 = "Hello"
// let text2 = "World"
// let text3 = text1.concat(" ",text2)
// console.log(text3);


// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);

// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// console.log(text2);


// Pad a string with "0" until it reaches the length 4 starting:
// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);

// Pad a string with "0" until it reaches the length 4 from end:
// let text = "5";
// let padded = text.padEnd(4,"0");
// console.log(padded);

// let text = "Hello world!";
// let result = text.repeat(5);
// // console.log(result);

// // repplace method is used to replace the part of a string
// let text = "Please visit Microsoft and Microsoft!"
// let text2 = text.replace("Microsoft","ITHans") // => this method replace only the first occurence 
// console.log(text2);

// let text3 = text.replace(/Microsoft/g,"ITHans") // => to replace all occurences use /g flag like this
// console.log(text3);

text = "cats, dogs, horses, Cats"
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

