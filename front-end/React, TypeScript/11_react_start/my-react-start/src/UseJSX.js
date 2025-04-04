export default function UseJSX() {
  //   return <h1>hello, react!</h1>;
  /* 1. 인라인 스타일 사용
  const divStyle = {
    width: "100px",
    height: "100px",
    color: "lemonchiffon",
    fontWeight: "bold",
    backgroundColor: "midnightblue",
    marginLeft: ".5rem",
    display: "inline-block",
  };
  return (
    <div>
      <div
        style={{
          color: "skyblue",
          fontWeight: "bold",
          backgroundColor: "lemonchiffon",
        }}
      >
        first
      </div>
      <div style={divStyle}>second</div>
      <div
        style={{
          color: "pink",
          fontWeight: "bold",
          backgroundColor: "rosybrown",
        }}
      >
        third
      </div>
    </div>
  ); */
  // 2. JS 문법 사용
  //   let isShow = true;
  //   let str = "charlotte";
  //   return (
  //     <div>
  //       <div style={{ backgroundColor: "pink" }}>
  //         {isShow ? "isShow가 true일 때 보인다." : ""}
  //       </div>
  //       <div style={{ backgroundColor: "lemonchiffon" }}>
  //         {/* isShow가 true라면 뒤의 문자열이 렌더링된다. */}
  //         {isShow && "isShow가 true일 때 보인다."}
  //       </div>
  //       <div style={{ backgroundColor: "rosybrown" }}>
  //         {!isShow ? "isShow가 false일 때 보인다." : ""}
  //       </div>
  //       <div style={{ backgroundColor: "aquamarine" }}>
  //         {!isShow && "isShow가 false일 때 보인다."}
  //       </div>
  //       <div>{str}님 안녕하세요.</div>
  //     </div>
  //   );

  //3. onclick 사용
  function myFunc() {
    alert("안녕, 난 샤를로테야.");
  }

  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      <span
        style={{ backgroundColor: "pink", cursor: "pointer" }}
        onClick={myFunc}
      >
        안녕하세요
      </span>
      <span
        style={{ backgroundColor: "rosybrown", cursor: "pointer" }}
        onClick={() => myFunc()}
      >
        안녕하세요
      </span>
      <br />
      <span
        style={{ backgroundColor: "lemonchiffon", cursor: "pointer" }}
        onClick={() => addNum(8, 5)}
      >
        8 + 5 의 결과를 alert로 확인해보세요.
      </span>
    </div>
  );
}

//export default UseJSX;
//이렇게 따로 적어도 된다.
