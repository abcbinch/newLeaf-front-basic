import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <span>logo</span>
      <div>
        <Link to={"/"} className="menu-item">
          홈으로
        </Link>
        <Link to={"/test"} className="menu-item">
          테스트용 페이지
        </Link>
        <Link to={"/products"} className="menu-item">
          products
        </Link>
      </div>
    </header>
  );
}

export default Header;
