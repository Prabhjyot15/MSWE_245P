import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidenav">
                <a target="_blank" href="https://www.indeed.com/jobs?q=2024+Summer+Internships&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt">Internship Opportunities</a>
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