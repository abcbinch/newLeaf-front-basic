import BankPrac from "./components/BankPrac";
import { Box1 } from "./components/Box";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      {/* test 컴포넌트는 index-before.js로 렌더링했었다. */}
      {/* 원래 index-before가 index.js였다가 바꾼 거라서 test는 작동하지 않는다. */}
      {/* 그러므로 주석 풀면 오류 나니까, 주석 풀지 말 것. */}
      {/* <h2>여러 개의 전역 상태(state) 사용하기</h2>
      <Box1 /> */}
      <hr />
      <h3>실습문제</h3>
      <BankPrac />
    </div>
  );
}

export default App;
