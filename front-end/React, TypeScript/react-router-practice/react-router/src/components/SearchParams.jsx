import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function SearchParams() {
  const navigate = useNavigate();
  const params = useParams(); //{name: '이름'}
  console.log(params);
  const [nameParams] = useSearchParams(); //set은 필요없다. 가져오기만 할 거라서.
  const nameQuery = nameParams.get("");
  console.log(nameQuery);
  return (
    <div>
      <nav>
        <h2>학생의 이름은 {params.name}입니다.</h2>
        {nameQuery && <h2>실제 이름은 {nameQuery}입니다.</h2>}
        <button onClick={() => navigate(-1)}>이전 페이지로</button>
      </nav>
    </div>
  );
}
