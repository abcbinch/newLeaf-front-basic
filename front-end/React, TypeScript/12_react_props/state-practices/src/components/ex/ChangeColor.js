import React, { useState } from "react";

export default function ChangeColor() {
  let [text, setText] = useState("검정색 글씨");
  let [color, setColor] = useState("black");

  const toRed = () => {
    setText("빨간색 글씨");
    setColor("red");
  };
  const toBlue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };
  return (
    <div>
      <h2 style={{ color }}>{text}</h2>
      <button onClick={toRed}>빨강</button>
      <button onClick={toBlue}>파랑</button>
    </div>
  );
}
