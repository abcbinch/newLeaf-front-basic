let sum5 = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; //짝수는 더하지 말고 반복문으로 돌아가서 계속하라는 의미

  sum5 = sum5 + i;
}

console.log(sum5);

console.log("----------");

//구구단
//중첩될수록 성능이 저하된다.
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i}X${j}=${i * j}`);
  }
}

console.log("-----------------------");

for (let i = 2; i <= 9; i++) {
  console.log(i + "단");
  for (let j = 2; j <= 9; j++) {
    console.log(i, j);
    console.log(`${i}X${j}=${i * j}`);
  }
}

console.log("------------------------");
let n1 = 1;
while (n1 <= 5) {
  console.log(n1);
  n1++;
}
//증감식을 마지막에 적어야 원하는 대로 나올 가능성이 높다.
//증가/감소한 뒤에 바로 조건식을 마주하게 되기 때문이다.

console.log("10부터 1까지, 홀수만 출력");

let x = 10;
while (x >= 1) {
  if (x % 2 === 1) console.log(x);
  x--;
}
console.log("무한반복");
let a = 0;
while (true) {
  console.log(a);
  a++;
  if (a === 10) break;
}
//무간지옥을 보고 싶지 않다면 쓰지 않는 게 좋다.
//물론 이것도 쓸 데가 있기는 하지만.

console.log("=============");
console.log("while 무한반복으로 confirm 돌리는 중");
let a1 = 0;
while (confirm("continue?") === true) {
  a1++;
  alert(`${a1}번째 alert 창`);
}
