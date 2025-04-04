import { useState, useEffect } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  // useEffect(effect[, dependency_array])
  //effect: 콜백 함수.
  //dependency_array(의존성 배열): 의존성 배열에 있는 데이터가 변하면 콜백함수를 실행한다.
  ////-[]: 빈 배열을 넣으면, 마운트 했을 때만 동작
  ////-생략: 마운트, 업데이트 됐을 때 동작
  ////-[data]: 마운트, 데이터 업데이트 시 동작

  //Mount 시점에 실행행
  useEffect(() => {
    console.log("함수형 컴포넌트 mount!");
  }, []);
  //unmount 시점에 실행+mount 시점에 실행
  //??
  useEffect(() => {
    //밖에 쓰면 mount 시점에,
    console.log("함수형 컴포넌트 unmount!");
  }, []);
  //update 시점에 실행 + mount 시점에 동작
  //??
  useEffect(() => {
    console.log("함수형 컴포넌트 update!");
  });
  //특정 state 업데이트
  useEffect(() => {
    console.log("함수형 컴포넌트 update! text 변경!");
  }, [text]);
  return (
    // return 안에 쓰면 unmount 시점에
    <>
      <p>MyComponent: {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

const LifecycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </div>
  );
};

export default LifecycleFunc;
