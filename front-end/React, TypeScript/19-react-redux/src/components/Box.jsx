import { useDispatch, useSelector } from "react-redux";
import { countPlus } from "../store/module/CounterReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed gold", padding: "10px" }}>
      <h4>Box1입니다.</h4>
      <Box2 />
    </div>
  );
}
export function Box2() {
  //   const state = useSelector((state) => state);
  //combineReducers의 인자로 전달했던 객체의 key >> isData, count
  //   console.log(state); //{isData: false, count: 1} 각각 CounterReducer, isDataReducer에서 지정한 값들

  //useSelector: store에 저장되어 있는 state를 가져온다.
  //useDispatch: action을 전달하기 위한 dispatch 함수를 제공한다.
  //여러 개가 저장되어 있는 store에서 특정한 state만 가지고 오는 것
  //store/module/index.js를 참고하자.
  const isData = useSelector((state) => state.isData);
  //안에 담긴 state 값
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  return (
    <div style={{ border: "2px solid palegreen", padding: "10px" }}>
      <h4>Box2입니다.</h4>
      <p>count : {count}</p>
      <p>isData: {isData.toString()}</p>
      <button onClick={() => dispatch(countPlus())}>count +1</button>
      <button onClick={() => dispatch({ type: "count/DECREMENT" })}>
        count -1
      </button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
    </div>
  );
}
