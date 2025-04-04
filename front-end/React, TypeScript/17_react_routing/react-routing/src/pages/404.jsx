import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404. Pages not found.</h1>
      <Link to="/">홈으로 이동하기</Link>
    </div>
  );
}
