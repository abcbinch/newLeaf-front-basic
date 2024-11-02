/*자료형 기억해두기
1. 문자열 String, 숫자 number, boolean, null, undefined
2. 객체 object, 배열 array */

// String
let myName = "charlotte";
let email = "wiltshire@naver.com";
console.log(myName);
console.log(email);

console.log("Hi! I am " + myName + "!");
console.log("Hi! I am", myName, "!");
let sayhi = `Hi! I am ${myName}!`;
console.log(sayhi);

// Number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);
console.log(number + opacity);
console.log("apple" - 3);

//boolean -- true, false
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

//undefined
//값이 없는 상태. 아예 아무것도 주지 않았다.
let undef;
let obj = {
  abc: 123,
};
console.log(undef);
console.log(obj.abc);
console.log(obj.efg);

//null
//빈 값. 일부러 빈 값을 넣은 것.
let empty = null;
console.log(empty);

//array
let icecream = ["strawberry", "vanilla", "chocolate", "coffee"];
let soft = new Array("strawberry", "vanilla", "chocolate", "coffee");

console.log(icecream[1]);
console.log(soft[2]);

let data = [1, true, null, "string", 100];
console.log(data);
console.log(data[3]);

//2차원 배열
let game = [
  ["hollow knight", "nine sols", "ori and the blind forest", "rainworld"],
  ["baba is you", "a little to the left", "vignettes", "a tower full of cats"],
  ["friday night funkin", "rythm doctor", "muse dash"],
];

//object
//키 값 쌍.
let cat = { name: "루루", age: "5", gender: "M", isCute: "true" };
console.log(cat.name);
console.log(cat["name"]);
cat.like = ["banana", "bread", "brocoli"]; /*객체 배열 안에 키와 값 추가. */
cat["hate"] = "hospital";
console.log(cat);

//typeof
console.log("---------------------------------------------------------");
let und;
console.log(typeof und);
console.log(typeof "character");
console.log(typeof 100);
console.log(typeof 0.773);
console.log(typeof {});
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof function () {});
