const word1 = "abc";
const word2 = "xyz";

let word = [...word1.split(""), ...word2.split("")];

console.log(word);
