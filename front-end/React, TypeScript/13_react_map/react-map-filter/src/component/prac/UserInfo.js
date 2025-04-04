import React, { useState } from "react";

export default function InfoUser() {
  let [info, setInfo] = useState([
    {
      name: "Seth",
      email: "sethPuppeteer@gmail.com",
    },
  ]);

  let [inName, setInName] = useState("");
  let [inEmail, setInEmail] = useState("");

  const addInfo = () => {
    if (!inName) {
      alert("이름을 입력해주세요.");
      return false;
    }
    if (!inEmail) {
      alert("이메일을 입력해주세요.");
      return false;
    }

    let newUser = info.concat({
      name: inName,
      email: inEmail,
    });

    setInfo(newUser);
    setInName("");
    setInEmail("");
  };

  //삭제
  const deleteInfo = () => {
    console.log("정상작동");
    let dUser = info.filter((_, idx) => {
      return idx !== info.length - 1;
    });
    setInfo(dUser);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inName}
        onChange={(e) => setInName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inEmail}
        onChange={(e) => setInEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" ? addInfo() : false);
        }}
      />
      <button onClick={addInfo}>등록</button>
      <button onClick={deleteInfo}>삭제</button>
      <hr />
      {info.map((comp) => {
        return (
          <p>
            {comp.name}: {comp.email}
          </p>
        );
      })}
    </div>
  );
}
