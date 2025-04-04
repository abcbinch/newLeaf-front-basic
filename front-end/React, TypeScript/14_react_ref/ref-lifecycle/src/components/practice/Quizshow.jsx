import { useState, useRef } from "react";

export default function Quizshow() {
  //입력란
  let inputRef = useRef();
  let [input, setInput] = useState("");
  //랜덤 숫자
  let num1 = Math.floor(Math.random() * 11);
  let num2 = Math.floor(Math.random() * 11);
  //랜덤 연산 부호
  let calSign = ["+", "-", "x"];
  let randomSign;
  calSign.map((_, idx) => {
    idx = Math.floor(Math.random() * 3);
    randomSign = calSign[idx];
  });
  //정답
  let answer;

  //계산식
  const calcul = () => {
    if (randomSign === "+") {
      answer = num1 + num2;
    } else if (randomSign === "-") {
      answer = num1 - num2;
    } else if (randomSign === "*") {
      answer = num1 * num2;
    } else {
      answer = "error";
    }

    if (Number(inputRef.current.value) === answer) {
      alert("정답입니다!");
      inputRef.current.value = "";
      inputRef.current.focus();
    } else {
      alert("오답입니다.");
      inputRef.current.value = "";
      inputRef.current.focus();
      return false;
    }
  };
  return (
    <div>
      <h2>quizshow</h2>
      <div>{`${num1} ${randomSign} ${num2}`}</div>
      <br />
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={calcul}>정답 제출</button>
    </div>
  );
}
