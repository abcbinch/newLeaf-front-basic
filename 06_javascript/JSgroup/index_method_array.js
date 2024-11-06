console.log("배열 메소드-------------");

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["mash", "broken vessel", "ji", "nobara", "giyuu"];
console.log("arr1: " + arr1);
console.log("arr2: ", arr2);

arr1[5] = 6;
arr1[8] = 8;

console.log(arr1);
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(7);
arr1.push(8);
console.log(arr1);

console.log(arr1.pop());
arr1.pop();
arr1.pop();
console.log(arr1);

arr2.unshift("napstablook");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

console.log("----------------------------");

console.log(`arr2.includes("napstablook"): ${arr2.includes("napstablook")}`);
console.log(`arr2.includes("ji"): ${arr2.includes("ji")}`);

arr1 = [1, 2, 3, 4, 5];

console.log(`arr1.length: ${arr1.length}`);
console.log(`arr1.indexOf(4): ${arr1.indexOf(4)}`);
arr1.reverse();
console.log(`arr1.reverse(): ${arr1}`);
console.log(`arr1.join(): ${arr1.join()}`);
console.log(`type of arr1: ${typeof arr1}`);
console.log(`type of arr1.join(): ${typeof arr1.join()}`);
console.log(`arr1.join(""): ${arr1.join("")}`);

console.log("----------------------------");
console.log("반복문으로 배열 요소 꺼내기");
console.log("for");

let arr3 = [1, 5, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log("for of");

for (let el of arr3) {
  console.log(el);
}

console.log("forEach 함수");

arr3.forEach(function (comp, index, c) {
  console.log("첫 번째 매개변수(요소): " + comp);
  console.log("두 번째 매개변수(인덱스): " + index);
  console.log("세 번째 매개변수(배열): " + c);
  console.log("------------");
});
console.log("화살표함수로!");
arr3.forEach((comp) => console.log(comp));

console.log("----------------------------");

let sweets = ["chocolate", "cookie", "candy", "jelly"];

console.log("for of 반복문으로 배열 sweets의 요소 꺼내오기");
for (let sweet of sweets) {
  console.log(sweet);
}

console.log("세 가지 방법을 써서 numbers 안의 숫자 더하기");

let numbers = [2, 4, 6, 8, 10];

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
