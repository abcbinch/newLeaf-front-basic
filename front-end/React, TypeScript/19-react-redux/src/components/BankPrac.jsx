import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw } from "../store/module/BankReducer";

export default function BankPrac() {
  const money = useSelector((state) => state.bank);
  //BankReducer를 통해 반환된 state 값이 담긴다.

  const dispatch = useDispatch();

  let [input, setInput] = useState(0);
  return (
    <div>
      <h1>코딩온 은행</h1>
      <p>잔액: {money}</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button
        onClick={(payload) => {
          dispatch({ type: "DEPOSIT", payload: payload });
        }}
      >
        입금
      </button>
      <button onClick={withdraw}>출금</button>
    </div>
  );
}
