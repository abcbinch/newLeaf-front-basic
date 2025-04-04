import { useState, useRef } from "react";

export default function ChgInputColor() {
  let divRef = useRef();
  let inputRef = useRef();
  let [input, setInput] = useState("");

  const chgColor = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
    setInput("");
    inputRef.current.focus();
  };

  return (
    <div ref={divRef}>
      <input
        value={input}
        ref={inputRef}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <br />
      <button onClick={chgColor}>색 적용</button>
    </div>
  );
}
