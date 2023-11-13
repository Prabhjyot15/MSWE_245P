import "./Sidebar.css"
import Main from "./Main"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidenav">
            <Link to="about">
          <a className="">About</a>  
            </Link>
            <Link to="services">
          <a className="">Services</a>  
            </Link>
                {/* <a href="#clients">Clients</a>
                <a href="#contact">Contact</a> */}
            </div>
        </>
    );
}

export default Sidebar;