import "./Sidebar.css"
import Main from "./Main"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>

        {/* <Link to="/">
          <button className="btn btn-primary">Landing View</button>  
            </Link>
        <Link to="exampledataview"><button className="btn btn-primary" style={{ marginLeft: 20}}>Second View</button> </Link> */}
        </>
    );
}

export default Sidebar;