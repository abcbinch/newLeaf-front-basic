import React, { useState } from "react";

export function Fruits() {
  //createElement?
  let [fruit, setFruit] = useState(process.env.PUBLIC_URL + "/apple.jpg");
  let [bgrColor, setBgrColor] = useState("black");
  let [fontColor, setFontColor] = useState("black");

  function chgFruit() {
    let fruitValue = document.querySelector(".fruit").value;
    setFruit(process.env.PUBLIC_URL + "/" + fruitValue + ".jpg");
  }
  const chgBgrColor = () => {
    let bgrValue = document.querySelector(".bgrColor").value;
    setBgrColor(bgrValue);
  };
  const chgFontColor = () => {
    let fontColor = document.querySelector(".fontColor").value;
    setFontColor(fontColor);
  };
  function inText() {
    let textValue = document.querySelector('input[type="text"]').value;
    let textArea = document.querySelector(".text");
    textArea.textContent = textValue;
  }
  return (
    <div>
      과일:
      <select className="fruit" onChange={chgFruit}>
        <option value="apple">사과</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
      </select>
      배경색:
      <select className="bgrColor" onChange={chgBgrColor}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="gold">노랑</option>
        <option value="green">초록</option>
        <option value="skyblue">파랑</option>
        <option value="violet">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색:
      <select className="fontColor" onChange={chgFontColor}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="gold">노랑</option>
        <option value="green">초록</option>
        <option value="skyblue">파랑</option>
        <option value="violet">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <br />
      내용: <input type="text" onChange={inText} />
      <br />
      <br />
      <div className="fruitImg">
        <img src={fruit} style={{ width: "200px", height: "150px" }} />
      </div>
      <br />
      <div
        style={{
          border: "2px solid rosybrown",
          width: "100px",
          height: "50px",
          backgroundColor: bgrColor,
          color: fontColor,
        }}
        className="text"
      ></div>
    </div>
  );
}
