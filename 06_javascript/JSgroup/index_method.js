console.log("connect");

// toUpperCase, toLowerCase, length, repeat
// replace, replaceAll, slice, indexOf, charAt, split

let str1 = "Strawberry Moon";
let str2 = " Strawberry Moon ";

console.log(`str1: '${str1}'`);
console.log(`str2: '${str2}'`);

console.log(`str[0] : ${str1[0]}`);
console.log(`str1[0] + str1[11]: ${str1[0] + str1[11]}`);

console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

console.log(`str1.length: ${str1.length}`);
console.log(`str2.length: ${str2.length}`);

console.log(`str2.trim(): '${str2.trim()}'`);

console.log(`str1.toLowerCase(): ${str1.toLowerCase()}`);
console.log(`str1.toUpperCase(): ${str1.toUpperCase()}`);

console.log("------------------------------------------");

let fruit = "applemango";

console.log(`fruit: ${fruit}`);

console.log(`fruit.indexOf('e'): ${fruit.indexOf("e")}`);
console.log(`fruit.indexOf('a'): ${fruit.indexOf("a")}`);
console.log(`fruit.indexOf('apple'): ${fruit.indexOf("apple")}`);
console.log(`fruit.indexOf('mango'): ${fruit.indexOf("mango")}`);
console.log(`fruit.indexOf('y'): ${fruit.indexOf("y")}`);

console.log(`fruit.charAt(0): ${fruit.charAt(0)}`);
console.log(`fruit.charAt(8): ${fruit.charAt(8)}`);
console.log(`fruit.charAt(10): ${fruit.charAt(10)}`);

console.log(`fruit.slice(5): ${fruit.slice(5)}`);
console.log(`fruit.slice(3,6): ${fruit.slice(3, 6)}`);
console.log(`fruit.slice(-1): ${fruit.slice(-1)}`);
console.log(`fruit.slice(-4): ${fruit.slice(-4)}`);

console.log("------------------------------");

let msg1 = "Wow~ It is so amazing!!! Wow";

console.log(`msg1: ${msg1}`);

console.log(`msg1.replace("Wow", "Hey~~~"): ${msg1.replace("Wow", "Hey~~~")}`);
console.log(`msg1.replaceAll("o", "OO"): ${msg1.replaceAll("o", "OO")}`);

console.log("------------------------------");

let date = "2024.11.06";

console.log(`date: ${date}`);
date.replaceAll(".", "-");
console.log(date.replaceAll(".", "-"));

console.log("------------------------------");

let hello = "hello";

console.log(`hello: ${hello}`);
console.log(`hello's type: ${typeof hello}`);

console.log(`hello.split(""): ${hello.split("")}`);
console.log(hello.split(""));
console.log(hello.split("e"));
console.log(date.split("."));

console.log("------------------------------");
