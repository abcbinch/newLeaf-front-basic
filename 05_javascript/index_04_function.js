//함수 선언문
function game() {
  console.log("Hollow Knight");
}

game();

//함수 표현식
let game2 = function () {
  return "SANABI";
};

console.log(game2());

//화살표 함수
const game3 = () => {
  console.log("hello charlotte");
};

game3();

// 매개변수가 있는 함수
//함수 선언문
function game4(text) {
  return text;
}
console.log(game4("A little to the left"));

//매개변수 2개, 함수 선언문
function game5(text, name) {
  return `${text} by ${name}`;
}

console.log(game5("silksong", "team cherry"));

//매개변수 2개, 함수 표현식, 안에 콘솔로그
let sayHello3 = function (text, name) {
  console.log(`${text}! ${name}`);
};

sayHello3("안녕", "allie");

//화살표 함수, 리턴
let sayHello4 = (text, name) => {
  return `${text}! ${name}`;
};

console.log(sayHello4("안녕", "allie"));
