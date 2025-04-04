import { useReducer, useState } from "react";

//하나의 상수 객체로 관리
//한결 편해진다.
const BANK_ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

//컴포넌트 함수 밖에 적거나
//컴포넌트 함수 최상단에 적어야 한다.
//쓰기 전에 선언을 해 줘야 하기 때문에.
//
//action은 dispatch의 요구사항이다. reducer의 두번째 인자이다.
//action = {type, payloac} 이렇게 작성한다.
const reducer = (prevState, action) => {
  console.log("dispatch 함수가 호출되면, reducer가 동작!!");
  console.log("prevState", prevState);
  console.log("action", action);
  //알맹이
  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPES.withdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  //money는 따로 관리. useReducer 사용
  const [money, dispatch] = useReducer(reducer, 0); //꼭 reducer로 짓지 않아도 됨. 단, 위의 함수와 명칭을 통일시킬 것.

  return (
    <div>
      <h2>useReducer 사용하기</h2>
      <p>현재 잔고: {money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
