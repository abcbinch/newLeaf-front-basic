/* var str = "hello";
var a = 2;
var b = {
  name: "charlotte",
};
console.log(str);
console.log(a);
console.log(b);
(""); */
//typescript 폴더가 있는 위치에서 cmd로
//tsc (파일명).js
//라고 하면 ts 파일이 js 파일로 바뀐다.

function jsPrint(a, b, c) {
  console.log(`${a}와 ${b}와 ${c}`);
}

jsPrint("charlotte", "anri", "C");
jsPrint("charlotte", "anri");

let sum = 0;

function test(...a) {
  console.log(typeof a);
  console.log(a);
  let look = a.reduce((acc, cur) => (acc += cur), 0);
  return look;
}

console.log(test(2, 4, 6, 8));
