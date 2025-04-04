import { useState, useEffect, useCallback } from "react";

export default function UseCallbackEx2() {
  let [input, setInput] = useState("");
  //이 함수는 렌더링 될 때마다 다시 메모리에 저장이 되고 있다.
  //   const chgInput = (e) => setInput(e.target.value);

  //첫 번째 렌더링이 되었을 대만 메모리에 저장된다.
  //계속 해당 주소를 가져다 쓰는 중이다.
  //지금 것은 그냥 예시일 뿐이라 사용한 거지만,
  //onchange 한 줄 정도는 괜찮다.
  //오히려 별 것 아닌 일에 usecallback, usememo를 남발하는 게 더 안 좋다.
  const chgInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  return (
    <div>
      <input type="text" value={input} onChange={chgInput} />
      <p>작성한 값: {input}</p>
    </div>
  );
}
