//0에서 10 사이의 랜덤한 숫자.
// let ranNum = Math.floor(Math.random() * 11);
// console.log(ranNum);

//15에서 27 사이의 랜덤한 숫자
let ranNum2 = Math.floor(Math.random() * 13) + 15;
console.log(ranNum2);

//splice는 문자열에도 쓸 수 있을까?
console.log("test-----------");

let song = "gas! gas! gas!";
let hornet = "git gud!";

console.log(hornet.indexOf("kassa!"));
console.log(song.indexOf("dash"));

console.log("------------------------");

let arr = [2, 4, 6, 8, 10];
let arr2 = [];
let arr2_2 = new Array(4);
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr4 = ["vanilla", "chocolate", "strawberry"];

let test = arr3.find((comp) => comp % 2 === 1);
let test2 = arr3.map((comp) => comp % 2 === 1);
let test3 = arr3.map((comp) => {
  if (comp % 2 === 1) {
    console.log(comp);
  }
});
let test4 = arr4.map((comp) => comp.includes("s"));
let test4_02 = arr4.filter((comp) => comp.includes("s"));

console.log(test);
console.log(typeof test);
console.log(test2);
console.log(typeof test2);
console.log(test4);
console.log(test4_02);
