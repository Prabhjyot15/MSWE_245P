import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidenav">
                <a href="#about">About Us</a>
                <a href="#services">Internship Opportunities</a>
                <a href="#services">Research Opportunities</a>
                <a href="#contact">Contact Us</a>
            </div>

        {/* <Link to="/">
          <button className="btn btn-primary">Landing View</button>  
            </Link>
        <Link to="exampledataview"><button className="btn btn-primary" style={{ marginLeft: 20}}>Second View</button> </Link> */}
        </>
    );
}

export default Sidebar;