import React from "react";

export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    // 제너릭은 줘도 안줘도 상관없다.
    //htmlelement, htmldivelement 어느쪽이든 괜찮다.
    console.log(e);
    console.log(e.target);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    console.log(event.target.value);
  }
  function handleKeyDown(a: React.KeyboardEvent<HTMLInputElement>) {
    console.log(a.key);
    console.log(a.code);
    console.log(a.keyCode);
  }
  return (
    <div style={{ backgroundColor: "rosybrown", color: "white" }}>
      {/* onClick 이벤트 내에서 이벤트를 전달받을 때는
         이벤트 타입을 작성하지 않아도 된다. */}
      <div onClick={(e) => console.log(e)}>onClick</div>
      <div onClick={handleClick}>onClick</div>

      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
      <div onDrag={handleClick}>onDrag</div>
    </div>
  );
}
