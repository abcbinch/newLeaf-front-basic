import { FuncProps2 } from "./component/FunctionProps";
import AddAlphabet from "./component/prac/addAlphabet";
import Board from "./component/prac/Board";
import InfoUser from "./component/prac/UserInfo";
import PropsMap from "./component/PropsMap";
import PropsMap2 from "./component/PropsMap2";

function App() {
  const basket = [
    { name: "peach", price: 3000, number: 5 },
    { name: "strawberry", price: 8000, number: 2 },
    { name: "lemon", price: 6000, number: 8 },
    { name: "grape", price: 7000, number: 3 },
  ];
  return (
    <div className="App">
      <PropsMap basket={basket} />
      <FuncProps2 />
      <PropsMap2 arr={basket} />
      <hr />
      <AddAlphabet />
      <hr />
      <h2>과제</h2>
      <InfoUser />
      <hr />
      <h2>과제2</h2>
      <Board />
    </div>
  );
}

export default App;
