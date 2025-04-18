import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const style = { margin: "4px" };

  const MyLink = styled(Link)`
    color: green;
    &:hover {
      color: black;
    }
  `;
  return (
    <div>
      <h2>ReactRouter 실습</h2>
      <nav>
        <ul>
          <li style={style}>
            <MyLink to="/">홈으로</MyLink>
          </li>
          <li style={style}>
            <Link to="/student/sean">학생</Link>
          </li>
          <li style={style}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={style}>
            <Link to="/student/new?name=jisu">searchParams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
