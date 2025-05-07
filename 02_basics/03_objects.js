const mysym = Symbol("Key1")


const jsUser = {
    name: "Hansraj",
    "full name" : "Hasnraj Chaudhari",
    age : 21,
    [mysym] : "My Symbol",
    location : "Chalisgaon",
    email: "hansraj@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]

};

console.log(jsUser.email);
console.log(jsUser["isLoggedin"]);
console.log(jsUser["full name"]);
console.log(jsUser.lastLoginDays);
console.log(jsUser.lastLoginDays[0]);

console.log(jsUser[mysym]);
console.log(typeof jsUser[mysym]);

console.log(jsUser);
