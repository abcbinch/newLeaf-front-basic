import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <div>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/lecture"}>수업내용</Link>
      <Link to={"/practice"}>실습과제</Link>
      <Link to={"/Matzip"}>맛집</Link>
    </div>
  );
}
