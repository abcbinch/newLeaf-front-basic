import React, { useState } from "react";

export default function CalcNum() {
  let [firstNum, setFirstNum] = useState(0);

  let addTwo = () => {
    setFirstNum(firstNum + 2);
  };

  let minusOne = () => {
    setFirstNum(firstNum - 1);
  };

  return (
    <div>
      <div className="result">{firstNum}</div>
      <button onClick={addTwo}>+2</button>
      <button onClick={minusOne}>-1</button>
    </div>
  );
}
