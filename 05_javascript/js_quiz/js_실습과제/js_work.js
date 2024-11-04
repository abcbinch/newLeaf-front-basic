//1. 연령대별 단어 출력

let age = Number(prompt("나이를 입력해 주세요.", "00"));

if (age >= 20 && age <= 100) {
  console.log("성인");
} else if (age >= 17 && age <= 100) {
  console.log("고등학생");
} else if (age >= 14 && age <= 100) {
  console.log("중학생");
} else if (age >= 8 && age <= 100) {
  console.log("초등학생");
} else if (age >= 0 && age <= 100) {
  console.log("유아");
} else {
  console.log("0에서 100 사이의 수를 입력해주세요.");
}

//2. 삼항 연산자로 오전인지 오후인지 판별해보기

let now = new Date().getHours();

now >= 0 && now < 12 ? console.log("오전") : console.log("오후");

//3. 10000까지의 숫자 중에서 13의 배수이면서 홀수인 숫자를 찾기

let basket = [];

for (let i = 0; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) basket.push(i);
}

console.log(basket);

//+ 수를 입력받아서, 1에서 해당 수 사이에 13의 배수이면서 홀수인 수가 있는지 찾기

let bowl = [];
let yourNum = Number(prompt("숫자를 입력하시오."));

for (let i = 0; i <= yourNum; i++) {
  if (i % 13 === 0 && i % 2 === 1) bowl.push(i);
}

console.log(bowl);

//4. 0에서 100 사이의 숫자 중에서 2의 배수 또는 5의 배수의 총합을 구하기

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);

//5. 구구단 만들기

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
