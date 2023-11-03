import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo" style={{ marginLeft : 150  }}>
          CompanyLogo
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;