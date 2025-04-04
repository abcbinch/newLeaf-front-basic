import React, { useState } from "react";

export default function Emoji() {
  let [num, setNum] = useState(0);
  const numUp = () => {
    setNum(num + 1);
  };
  const numDown = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <div style={{ fontSize: "25pt" }} className="emoji">
        {num}
        {num > 10 ? "🍩" : "🍔"}
      </div>
      <button onClick={numUp}>1 증가</button>
      <button onClick={numDown}>1 감소</button>
    </div>
  );
}
