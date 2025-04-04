//2. src/store/index.js
//store/module에서 만들어준 여러 개의 reducer를 통합한다.

import { combineReducers } from "redux";
import { isDataReducer } from "./isDataReducer";
import { counterReducer } from "./CounterReducer";
import { BankReducer } from "./BankReducer";

// store/index.js 이건 여러 개의 reducer를 통합하는 역할을 한다.
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  //만약 전역 관리 state가 추가되면 이 곳에도 추가한다.
  bank: BankReducer,
});
//3. 내보낸다.
//이건 이제 src/index.js에서 쓰일 예정이다.
export default rootReducer;
