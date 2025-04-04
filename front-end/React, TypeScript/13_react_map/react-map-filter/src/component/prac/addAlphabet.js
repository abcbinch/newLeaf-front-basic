import React, { useState } from "react";

export default function AddAlphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "b" },
    { id: 2, alpha: "c" },
    { id: 3, alpha: "j" },
    { id: 4, alpha: "o" },
    { id: 5, alpha: "u" },
  ]);
  let [input, setInput] = useState(""); //??
  const addAlpha = () => {
    // let inputAl = document.querySelector("input").value;
    const newList = list.concat({
      //   id: list.length + 1,//이렇게 하면 요소를 삭제했을 때 숫자가 이상하게 들어간다.
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1, //마지막 요소를 기준으로 id가 업데이트된다.
      alpha: input,
    }); //배열 뒤에 요소를 붙인다.
    setList(newList); //새롭게 업데이트. 덮어씌우기.
    setInput(""); //??
  };
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addAlpha();
    }
  };
  const deleteAlpha = (id) => {
    const newAlpha = list.filter((a) => {
      return a.id !== id;
    });
    setList(newAlpha);
  }; //왜 안되나
  const newArr = [1, 2, 3, 4, 5].filter((comp) => {
    return comp > 3;
  });
  console.log(newArr);
  return (
    <div>
      <h2>Alphabet</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <button onDoubleClick={deleteAlpha}>삭제</button>

      <ol>
        {list.map((comp, idx) => {
          return <li key={comp.id}>{comp.alpha}</li>;
        })}
      </ol>
    </div>
  );
}
