import React, { useState } from "react";

export default function PororoFriends(props) {
  let [idx, setIdx] = useState(0);
  let [friend, setFriend] = useState(props.objArr[0]);

  //내가 쓴 것것
  //   const chgMember = () => {
  //     if (idx < 2) {
  //       setIdx(idx + 1);
  //       setFriend(props.objArr[idx]);
  //     } else if (idx >= 2) {
  //       setIdx(0);
  //       setFriend(props.objArr[idx]);
  //     }
  //   };

  //챗봇
  //클릭해도 이름이 바로 바뀌지 않는 문제가 있어서 물어봄.
  //조건문 안에 setidx를 넣는 게 아니라
  //setidx 안에 조건문(삼항연산자)을 넣어서 해결.
  //newIdx를 리턴해야 prev가 업데이트 된다.
  const chgMember = () => {
    setIdx((prev) => {
      const newIdx = prev < 2 ? prev + 1 : (prev = 0);
      setFriend(props.objArr[newIdx]);
      return newIdx;
    });
  };

  return (
    <div>
      이름: {friend.name}
      <br />
      나이: {friend.age}
      <br />
      별명: {friend.nickName}
      <br />
      <button onClick={chgMember}>멤버 바꾸기</button>
    </div>
  );
}
