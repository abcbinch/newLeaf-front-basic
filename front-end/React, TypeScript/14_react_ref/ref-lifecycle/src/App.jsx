import "./App.css";
import LifecycleClass from "./components/LifecycleClass";
import LifecycleFunc from "./components/LifecycleFunc";
import AddWriter from "./components/practice/AddWriter";
import ChgInputColor from "./components/practice/ChgInputColor";
import Quizshow from "./components/practice/Quizshow";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";

function App() {
  return (
    <div className="App">
      {/* <RefClass1 />
      <hr />
      <RefClass2 />
      <hr />
      <RefFunc1 />
      <hr />
      <RefFunc2 /> */}
      {/* <LifecycleClass />
      <hr />
      <LifecycleFunc /> */}
      <hr style={{ border: "3px solid powderblue" }} />
      <h2>과제 1</h2>
      <AddWriter />
      <hr />
      <h2>과제 2</h2>
      <ChgInputColor />
      <hr />
      <h2>과제 3</h2>
      <Quizshow />
    </div>
  );
}

export default App;
