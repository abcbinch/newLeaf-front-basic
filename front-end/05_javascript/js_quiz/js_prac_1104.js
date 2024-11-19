//선언문, 반환, 매개변수 2개

function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(2, 3));

//표현식, 매개변수 하나, 콘솔창 출력

let square = function (num) {
  console.log(num ** 2);
};

square(4);

//증감연산자 후위 전위

let num = 3;
console.log(`num은 ${num}, res는 num++`);
let res = num++;

console.log(`후위 연산자 num++을 담은 res의 값: ${res}`);
console.log(`후위 연산자 계산 이후의 num 값: ${num}`);

let num2 = 5;
console.log(`num2는 ${num2}, res2는 ++num`);
let res2 = ++num2;

console.log(`전위 연산자 ++num을 담은 res의 값: ${res2}`);
console.log(`후위 연산자 계산 이후의 num 값: ${num2}`);
