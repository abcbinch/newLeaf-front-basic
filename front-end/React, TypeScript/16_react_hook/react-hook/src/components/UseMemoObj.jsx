import { useState, useEffect, useMemo } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: isKorea ? "korea" : "abroad",
  //   };

  const location = useMemo(() => {
    return { country: isKorea ? "korea" : "abroad" };
  }, []);

  useEffect(() => {
    console.log("location이 변경될 때마다 실행됩니다.");
  }, [location]);
  return (
    <div style={{ border: "2px solid skyblue" }}>
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
    </div>
  );
}
