import "./App.css";

function App() {
  //prac 1
  const name = "로이";
  const animal = "강아지";
  const txtBox = {
    border: "2px dashed yellowgreen",
    width: "500px",
    height: "100px",
  };
  //prac 2
  function isCorrect() {
    return 3 + 5 == 8 ? alert("정답입니다!") : alert("오답입니다!");
  }
  //prac 3
  const a = 9;
  const b = 2;
  //prac 4
  const title = "Hello World";
  return (
    <div style={txtBox} className="App">
      <h2>
        제 반려동물의 이름은 <u>{name}</u>입니다.
        <br />
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
      <br />
      <div
        style={{
          backgroundColor: "aliceblue",
          cursor: "pointer",
          width: "300px",
        }}
        onClick={isCorrect}
      >
        3 + 5 == 8
      </div>
      <br />
      <div style={{ backgroundColor: "lemonchiffon" }}>
        {a > b && "a가 b보다 큽니다."}
      </div>
      <br />
      <h2 className="prac4">{title}</h2>
      <label for="userid">
        아이디: <input type="text" id="userid" />
      </label>
      <br />
      <br />
      <label for="userpw">
        비밀번호: <input type="password" id="userpw" />
      </label>
    </div>
  );
}

export default App;
