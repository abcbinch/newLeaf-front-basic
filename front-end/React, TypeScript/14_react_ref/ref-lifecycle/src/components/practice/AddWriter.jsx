import React, { useRef, useState } from "react";

export default function AddWriter() {
  let inputWRef = useRef();
  let inputTRef = useRef();
  let [writerInfo, setWriterInfo] = useState([
    {
      id: 1,
      name: "game",
      title: "baba is you",
    },
    {
      id: 2,
      name: "book",
      title: "hildafolk",
    },
    {
      id: 3,
      name: "anime",
      title: "mashle",
    },
  ]);
  let [inputT, setInputT] = useState("");
  let [inputW, setInputW] = useState("");

  const addWriter = () => {
    if (inputW === "") {
      inputWRef.current.focus();
      return false;
    }
    if (inputT === "") {
      inputTRef.current.focus();
      return false;
    }

    let newWriter = writerInfo.concat({
      id: writerInfo.length + 1,
      title: inputT,
      name: inputW,
    });

    setWriterInfo(newWriter);
    setInputT("");
    setInputW("");
  };

  return (
    <div>
      <div>
        작성자:{" "}
        <input
          type="text"
          value={inputW}
          ref={inputWRef}
          onChange={(e) => {
            setInputW(e.target.value);
          }}
        />
        제목:{" "}
        <input
          type="text"
          value={inputT}
          ref={inputTRef}
          onChange={(e) => {
            setInputT(e.target.value);
          }}
        />
        <button onClick={addWriter}>작성</button>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {writerInfo.map((comp) => {
            return (
              <tr>
                <td>{comp.id}</td>
                <td>{comp.title}</td>
                <td>{comp.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="space"
        style={{ border: "2px dashed pink", height: "300px" }}
      ></div>
    </div>
  );
}
