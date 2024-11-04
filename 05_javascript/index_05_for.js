console.log("connect------------------------for");

console.log("인디언송");

for (let i = 0; i < 10; i++) {
  console.log(`${i + 1} little indian(s)`);
}

console.log(`0에서 10 사이의 홀수는?`);

for (let i = 1; i < 10; i += 2) {
  console.log(`${i} `);
}

//1부터 5까지의 수 출력
console.log("1부터 5까지의 수 출력");
for (let y = 1; y <= 5; y++) {
  console.log(y);
}

//이번엔 반대로
console.log("이번엔 반대로!");

for (let y = 5; y > 0; y--) {
  console.log(y);
}

//배열 요소 꺼내기
//과일 바구니에서 과일 고르기
console.log("바구니에 어떤 과일이 들어있어?");
let fruits = ["apple", "orange", "banana", "pineapple", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//1부터 n까지 더하기
console.log("1부터 11까지 더해보자");

let sum = 0;
let i;

for (i = 1; i <= 11; i++) {
  sum += i;
}

console.log(`1에서 11까지의 합은 ${sum}입니다.`);

//문제
console.log("간단문제: 99 + 98 + 85 + 77 + 100 + 50 = ?");

let arr = [99, 98, 85, 77, 100, 50];

let arrSum = 0;

for (let i = 0; i < arr.length; i++) {
  arrSum += arr[i];
}

console.log(arrSum);

//1이상 20 이하의 수 중에서 짝수만 더한 값 출력하기
console.log("1에서 20 사이의 수 중 짝수만 골라서 더해봐");

let evenSum = 0;

for (let i = 0; i <= 20; i += 2) {
  evenSum += i;
}

let evenSum2 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    evenSum2 += i;
  }
}

console.log(evenSum);
console.log(evenSum2);
