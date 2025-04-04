import { useRef, useState } from "react";

export function RefFunc1() {
  //1.ref 객체 만들기.
  //여기서는 useRef를 사용한다.
  const inputRef = useRef();
  //3. ref.current에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    inputRef.current.focus(); //input에 focus를 준다.
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <div>
      {/* 2. 선택하고 싶은 태그에 ref를 전달한다. */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}
export function RefFunc2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    //값은 바뀌지만 렌더링이 되지 않아 화면에 변화가 안 일어난다.
    ref.current += 1;

    console.log(`ref.current`, ref.current);
    console.log(ref.current);
  };
  const plusState = () => {
    //값도 바뀌고 렌더링도 일어난다.
    setState(state + 1);
    console.log(`state: ${state}`);
  };
  const plusVariable = () => {
    //렌더링 될 때마다 초기화
    variable += 1;
    console.log(`Variable: ${variable}`);
  };
  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus Ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus State</button>
      <h4>{variable}</h4>
      <button onClick={plusVariable}>Plus Variable</button>
    </div>
  );
}
