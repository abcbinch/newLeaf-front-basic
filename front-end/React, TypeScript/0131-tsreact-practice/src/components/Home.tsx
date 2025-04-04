import { Link } from "react-router-dom";

export default function Home() {
  return (
    <header>
      <Link to="/codingon">과제 확인 1</Link>
      <Link to="/codingon2">과제 확인 2</Link>
      <h1>Home</h1>
    </header>
  );
}
