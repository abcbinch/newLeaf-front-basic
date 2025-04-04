//옛날(common JS) 방식으로 불러오기
// const module1 = require("./custom_module.js"); //js 생략 가능
//객체 형태로 담겨 있다.
// const { icecream } = require("./custom_module.js"); //구조분해할당 활용
//변수가 하나면, 첫 번째 속성값만 담긴다.
//변수명은 모듈 내의 변수 및 함수명과 같아야 함. 맞나?

//따로 내보낸 것
// const module2 = require("./custom_module.js");
//하지만 불러오는 방식은 같다. 객체로 담아서 가져온다.

//ES6버전
import { getNumber, numberData } from "./custom_module_03.js";
import { chuntaro, ukogi } from "./custom_module_04.js";
import hey from "./custom_module_05.js";
// console.log(module1);

// console.log(icecream);

// console.log(module2);

console.log(getNumber());
console.log(numberData);

console.log(chuntaro);
console.log(ukogi());

console.log(hey());
