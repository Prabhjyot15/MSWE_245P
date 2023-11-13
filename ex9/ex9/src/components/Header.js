import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo" style={{ marginLeft: 150 }}>
          Crack Summer Internship 2024
        </a>
        <div className="headerRight">

          <Link to="/">
            <a className="">Home</a>
          </Link>
          <Link to="exampledataview">
            <a className="">Contact</a>
          </Link>
          {/* <a className="active" href="#home">
            View
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a> */}
        </div>
      </div>
    </>
  );
}

export default Header;