let num1 = document.querySelector("#value1");
let num2 = document.querySelector("#value2");
const operator = document.querySelector("#operator");
const calculate = document.querySelector("button:nth-of-type(1)");
const reset = document.querySelector("button:nth-of-type(2)");
const result = document.querySelector("#result");

// result.disabled = "false";
//왜 disabled 속성이 안 바뀌는가
//이게 중요할까?
//이게 활성화되어야 결과를 입력하지

// result.removeAttribute("disabled");
//이게 올바른 방법

// console.log(result.disabled);

function cal() {
  let fourOps = operator.value;
  let a = Number(num1.value);
  let b = Number(num2.value);

  console.log(a);
  console.log(b);

  if (fourOps === "+") {
    result.removeAttribute("disabled");
    return (result.value = a + b);
  } else if (fourOps === "-") {
    result.removeAttribute("disabled");
    return (result.value = a - b);
  } else if (fourOps === "*") {
    result.removeAttribute("disabled");
    return (result.value = a * b);
  } else if (fourOps === "/") {
    result.removeAttribute("disabled");
    return (result.value = a / b);
  } else {
    alert("+, -, *, / 중 하나만 입력해주세요.");
  }
}
// //아직도 return에 대해 잘 모르겠다.

function resetInput() {
  num1.value = "";
  num2.value = "";
  operator.value = "";
  result.value = "";
  result.disabled = "true";
}
