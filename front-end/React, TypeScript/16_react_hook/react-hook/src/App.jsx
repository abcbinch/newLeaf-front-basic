import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import UserInfo from "./components/practice/UserInfo";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemo1 from "./components/UseMemo1";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle(`hello charlotte: childhood's end`);

  return (
    <div className="App">
      <UseMemo1 />

      <UseMemoObj />

      <hr />

      {/* <UseCallbackEx1 /> */}
      <hr />
      {/* <UseCallbackEx2 /> */}
      <hr />
      {/* <UseReducer /> */}
      <hr />
      {/* <CustomHook /> */}
      <hr />
      {/* <Form /> */}
      <hr />
      <UserInfo />
    </div>
  );
}

export default App;
