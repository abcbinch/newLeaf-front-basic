import { useEffect, useState, useCallback } from "react";

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const console1 = () => {
    console.log(`number: ${number}`);
  };

  const call = useCallback(() => {
    console.log(`number: ${number} smile!`);
  }, []);

  useEffect(() => {
    console.log("console 함수 변경");
  }, [console1]);

  useEffect(() => {
    console.log(`call 함수 변경`);
  }, [call]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          console1();
          call();
        }}
      >
        call function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </div>
  );
}
