import React, { useState } from "react";

export default function Board() {
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
  //작성자 추가
  let [inputT, setInputT] = useState("");
  let [inputW, setInputW] = useState("");
  //검색/전체보기
  let [inputS, setInputS] = useState("");
  let [select, setSelect] = useState("name");
  //검색결과(배열)를 넣을 변수가 따로 필요함.
  //setWriterInfo를 사용하면 원본 배열 자체가 날아가 버린다.
  let [result, setResult] = useState([]);

  //작성자 이름 추가. 완성.
  const addWriter = () => {
    let newWriter = writerInfo.concat({
      id: writerInfo.length + 1,
      title: inputT,
      name: inputW,
    });

    setWriterInfo(newWriter);
    //왜 백지화가 안 되는가
    setInputT("");
    setInputW("");
  };

  //검색
  const searchResult = () => {
    let search = writerInfo.filter((comp) => {
      //setResult([...comp])
      //comp가 객체라서 그런지 iterable하지 않다고 뜬다.
      //전개 연산자로 못 넣는다는 뜻인가?
      if (select === "name") {
        return inputS === comp.name;
      } else if (select === "title") {
        return inputS === comp.title;
      } else {
        return [];
      }
    });
    //내용이 전부 담기면 안되는데?
    setResult(search);
    setInputS("");
  };

  const showResult = () => {
    return result.map((comp) => {
      return (
        <div>
          {comp.id}번. 작성자는 {comp.name}. 제목은 {comp.title}.
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        작성자:{" "}
        <input
          type="text"
          value={inputW}
          onChange={(e) => {
            setInputW(e.target.value);
          }}
        />
        제목:{" "}
        <input
          type="text"
          value={inputT}
          onChange={(e) => {
            setInputT(e.target.value);
          }}
        />
        <button onClick={addWriter}>작성</button>
      </div>
      <div>
        <select
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="name">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          value={inputS}
          onChange={(e) => {
            setInputS(e.target.value);
          }}
        />
        <button onClick={searchResult}>검색</button>
        <button
          onClick={() => {
            setResult(writerInfo);
          }}
        >
          전체
        </button>
        <button
          onClick={() => {
            setResult([]);
          }}
        >
          리셋
        </button>
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
      <div>{result.length > 0 ? showResult() : "검색결과가 없습니다."}</div>
      <div
        className="space"
        style={{ border: "2px dashed pink", height: "300px" }}
      ></div>
    </div>
  );
}
