import { ClassProps, ClassProps2 } from "./components/ClassProps";
import {
  FuncProps1,
  FuncProps2,
  FuncProps3,
  FuncProps4,
} from "./components/FunctionProps";
import FuncState from "./components/FuncState";
import ClassState from "./components/ClassState";
import CalcNum from "./components/prac/pracState";
import SyntheticEvent from "./components/SyntheticEvent";

function App() {
  return (
    <div>
      <h2>props 사용하기</h2>
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps color="gold" nickname="scarlet" />
      <ClassProps2
        name="charlotte"
        color="gold"
        nickname="scarlet"
        fontColor="white"
      />
      <h3>함수형 컴포넌트 props 사용해보기</h3>

      <FuncProps1 name="레몬" number={5} krPrice="5,000" />
      <FuncProps2 name="복숭아" number={3} krPrice="4,000" />
      <FuncProps3 name="딸기" number={2} krPrice="8,000" />
      <FuncProps4 name="포도">
        <span>children 요소</span>
      </FuncProps4> */}
      imoprt
      <h2>state 사용하기</h2>
      <ClassState />
      <FuncState />
      <h2>State 과제</h2>
      <CalcNum />
      <h2>이벤트 핸들링</h2>
      <SyntheticEvent />
      <h2>이벤트 핸들링 과제제</h2>
    </div>
  );
}

export default App;
