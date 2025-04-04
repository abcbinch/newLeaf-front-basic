import React from "react";
import { useNavigate } from "react-router-dom";

export default function Codingon(props) {
  const { name } = props;
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <h2>학생의 이름은 {name} 입니다.</h2>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
      </nav>
    </div>
  );
}
