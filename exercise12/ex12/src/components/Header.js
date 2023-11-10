import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <h3 className="logo" style={{ marginLeft: '200px' }}>
                    Internships | Research
                </h3>
                <div className="headerRight">

                    <Link to="/">
                        <a className="">Full Time Internships</a>
                    </Link>
                    <Link to="researchview">
                        <a className="">Research Opportunities</a>
                    </Link>
                    <Link to="onlineBooks">
                        <a className="">Online Books</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;