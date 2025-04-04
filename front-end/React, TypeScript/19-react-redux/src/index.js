import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/module";

//여러 개의 state 관리

const root = ReactDOM.createRoot(document.getElementById("root"));
//4. store를 설정한다.
//여기서는 module.index.js에서 통합한 rootReducer를 value로 전달했다.
const store = configureStore({ reducer: rootReducer });
//store에는 reducer 함수에서 return된 state 값들이 들어온다.

//5. App 컴포넌트의 자식 컴포넌트에서 모두 사용 가능하도록
//store props로 store에 전달하면 된다.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
