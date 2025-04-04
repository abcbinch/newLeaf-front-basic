//boolean state
//1.src/store/module에 개별적인 전역 state를 선언한다.
//즉, reducer를 생성해야 한다.
const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "isData/CHANGE") return !state;
  return state;
};
