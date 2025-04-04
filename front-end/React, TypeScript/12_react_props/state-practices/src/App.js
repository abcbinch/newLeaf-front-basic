// import PororoFriends from "./components/ChangeObj";
import PororoObj from "./components/Change";
import Emoji from "./components/Emoji";
import ChangeColor from "./components/ex/ChangeColor";
import HandlerEx from "./components/ex/HandlerEx";
import { Fruits } from "./components/Fruits";
import ShowHide from "./components/ShowHide";
import UpDown from "./components/UpDown";

function App() {
  return (
    <div className="App">
      <HandlerEx />
      <hr />
      <ChangeColor />
      <hr />
      <ShowHide />
      <hr />
      <Emoji />
      <hr />
      {/* <PororoFriends /> */}
      <PororoObj />
      <hr />
      <Fruits />
      <hr />
      <UpDown />
    </div>
  );
}

export default App;
