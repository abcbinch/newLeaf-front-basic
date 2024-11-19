// let mathSco = prompt("수학 점수는?");
// let engSco = prompt("영어 점수는?");

// let res = (mathSco + engSco) / 2;

// console.log(res);

//형변환

let str1 = true;
let str2 = 1925;
let str3 = null;

console.log(String(str1));
console.log(typeof String(str1));
console.log(typeof str1.toString());
console.log(String(str2));
console.log(typeof String(str2));
console.log(String(str3));
console.log(typeof String(str3));

let num1 = true;
let num2 = "1925";
let num3 = "3.14";
let num4 = "4.5";

console.log(Number(num1));
console.log(typeof Number(num1));
console.log(typeof parseInt(num1));
console.log(Number(num2));
console.log(typeof Number(num2));
console.log(Number(num3));
console.log(typeof Number(num3));
console.log(parseInt(num4));

// let english = prompt("영어 점수를 입력해주세요.");
// let math = prompt("수학점수를 입력해주세요.");

// english = Number(english);
// math = Number(math);

// let average = (english + math) / 2;
// console.log(average);

let a = 1;
let b = "1";

console.log(a == b);
console.log(a === b);

//var
var name = "charles";
console.log(name);
name = "vincent";
console.log(name);

var name = "scarlet";
//재선언이 가능하면 협업과 유지보수가 힘들다.
console.log(name);

//let
let cookie;
cookie = "chocolate";
console.log(cookie);
// let cookie;
cookie = "lemon";
console.log(cookie);
//재할당

//const
const tea = "ceylon";
// const tea;
// tea = 'assam';

let q1 = 3;
let q2 = q1 - 2;
console.log(q1);

//비교 연산자
console.log("==비교 연산자");
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 1);
console.log(1 != 2);
console.log(1 == "1");
console.log(1 != "1");
console.log(1 == "2");

console.log("=== 비교 연산자");
console.log(1 === 1);
console.log(1 === 2);
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 === "1");
console.log(1 !== "1");
console.log(1 === "2");

console.log("크기 비교");
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);

console.log("산술 연산자");
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(8 % 5);
console.log(2 ** 5);

//논리 연산자
console.log(true);
console.log(false);
console.log(!true);
console.log(!false);
console.log(!!false);
console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log("문제--------------");
console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && 0 > -2) || 5 < 2);
console.log("0과 빈 문자열과 false의 상관관계");
console.log("" == "0");
console.log(false == undefined);
console.log(false == null);
console.log("===");
console.log("0" == false);
console.log("0" == 0);
console.log("" == 0);
console.log(undefined == null);
