console.log("connect");

let now = new Date();

console.log(`현재 날짜: ${now}`);
console.log(
  'new Date("September 30, 1990 13:00:00")의 결과: ' +
    new Date("September 30, 1990 13:00:00")
);
console.log("new Date(6000000)의 결과: " + new Date(6000000)); //6000000초가 지난 뒤의 미래
console.log(new Date(0));
console.log(new Date(2010, 2, 2, 18, 35, 50));

console.log(`now.getFullYear(): ${now.getFullYear()}`);
console.log(`now.getMonth(): ${now.getMonth()}`); //0~11
console.log(`now.getDate(): ${now.getDate()}`); //1~
console.log(`now.getHours(): ${now.getHours()}`); //0~23
console.log(`now.getMinutes(): ${now.getMinutes()}`); //0~59
console.log(`now.getSeconds(): ${now.getSeconds()}`); //0~59
console.log(`now.getMilliseconds(): ${now.getMilliseconds()}`); //0~999
console.log(`now.getDay(): ${now.getDay()}`); //0~6(일요일~토요일)
//퀴즈
//오늘(24.11.06)이 주말인지 아닌지 출력하기
//if문
if (now.getDay() === 0 || now.getDay() === 6) {
  console.log("주말입니다.");
} else {
  console.log("주말이 아닙니다.");
}
//삼항 연산자
now.getDay() === 0 || now.getDay() === 6
  ? console.log("주말입니다.")
  : console.log("주말이 아닙니다.");
//switch
let weds = now.getDay();
switch (weds) {
  case 0:
  case 6:
    console.log("주말입니다.");
  default:
    console.log("주말이 아닙니다.");
}

console.log("Math------------------------");

console.log(`Math.E: ${Math.E}`);
console.log(`Math.PI: ${Math.PI}`); //파이. 원주율.
console.log(`Math.SQRT2: ${Math.SQRT2}`); //루트 2.

console.log(`Math.min(50, 10, 0): ${Math.min(50, 10, 0)}`);
console.log(`Math.max(50, 10, 0): ${Math.max(50, 10, 0)}`);
console.log(`Math.random(): ${Math.random()}`); //0보다 크거나 같고, 1보다는 작은 수. 실수.
console.log(`Math.round(3.54): ${Math.round(3.54)}`);
console.log(`Math.round(3.23): ${Math.round(3.23)}`);
console.log(`Math.floor(3.54): ${Math.floor(3.54)}`);
console.log(`Math.ceil(3.23): ${Math.ceil(3.23)}`);

//0부터 9까지의 숫자 중 소수가 아닌 난수.
console.log("0부터 9까지의 숫자 중 소수가 아닌 난수 하나 고르기");
console.log(`Math.floor(Math.random()*10): ${Math.floor(Math.random() * 10)}`);
console.log("1부터 10까지의 숫자 중 자연수 난수 하나 고르기");
console.log(Math.floor(Math.random() * 10) + 1);

//20부터 22까지의 수 중 난수 하나 고르기
console.log(Math.floor(Math.random() * 3) + 20);

console.log("내장 객체로 객체 다루기--------");

const areaNum2 = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

let key = Object.keys(areaNum2);
let values = Object.values(areaNum2);
console.log(key);
console.log(values);
