import { useRef, useState } from "react";

export default function SetText() {
  const refVal = useRef<number>(0); //변수로 사용할 ref
  const refInput = useRef<HTMLInputElement>(null); //기본 리액트에서는 값을 할당할 필요가 없었으나,
  //타입스크립트와 연동할 경우에는 null 값이라도 일단 초기값을 줘야 한다.
  //타입을 추론하고 있기 때문에 제너릭을 안 써도 문제는 없다.
  //<HTMLInput Element>는 인풋을 선택하겠다는 의미.
  const [text, setText] = useState("");

  //refVal 변수를 변경하는 함수
  const changeRef = () => {
    refVal.current += 1;
    console.log(refVal.current);
  };

  const changeState = () => {
    //onchange 아니다!
    //ref를 활용할 것이다.
    // setText(refInput.current.value);//null일 가능성이 있어서 오류가 뜬다.
    if (refInput.current) {
      //null이 아닌, 값이 있을 경우에만!
      console.log("state 변경 완료");
      setText(refInput.current.value);
    }
  };
  return (
    <div>
      <h2>useRef 와 useState 사용해보기</h2>
      <input type="text" ref={refInput} />
      <button onClick={changeState}>state 변경</button>
      <button onClick={changeRef}>ref +1</button>
      <br />

      <p>state: {text}</p>
      <p>refVal: {refVal.current}</p>
      {/* 처음에는 기본값인 0이 나올 것이다. */}
      <p>refInput의 값(value): {refInput.current?.value}</p>
      {/* ?를 붙여서 value가 있을 때만 출력되도록 했다. */}
    </div>
  );
}
