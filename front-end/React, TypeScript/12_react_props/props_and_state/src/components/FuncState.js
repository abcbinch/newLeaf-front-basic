import React, { useState } from "react";

export default function FuncState() {
  //1. textContent
  //   let peach = "복숭아";
  //   const inEng = () => {
  //     // peach = "peach";
  //     //화면이 재 렌더링 되는 게 아니어서 이렇게 변수만 바꾸면 영어로 바뀌지 않는다.
  //     //textContent를 사용하면 바뀌긴 하겠지만, 그럼 리액트를 쓸 이유가 없다.
  //   };

  //2.useState 사용하기
  //   const [peach, setPeach] = useState("복숭아");
  //   //peach라는 변수에 '복숭아'라는 값을 할당했다.
  //   //setPeach는 state를 바꾸는 함수.
  //   const inEng2 = () => {
  //     setPeach("peach");
  //   };
  //   return (
  //     <div>
  //       <div className="state">{peach}</div>
  //       <button onClick={inEng2}>English(함수형)</button>
  //     </div>
  //   );

  //3.vanilla JS를 사용하기기
  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button
  //         onClick={() => {
  //           const word = document.querySelector(".state");

  //           word.innerText === "사과" //그냥 word라고만 하면 안된다.
  //             ? (word.textContent = "apple")
  //             : (word.textContent = "사과");
  //         }}
  //       >
  //         언어 변경
  //       </button>
  //     </div>
  //   );

  const [chgLang, setChgLang] = useState(true);
  const changeLang2 = () => {
    setChgLang(!chgLang); //toggle 비슷한 효과.
  };
  return (
    <div>
      <div className="state">{chgLang ? "raspberry" : "산딸기"}</div>
      <button onClick={changeLang2}>언어 변경</button>
    </div>
  );
}
