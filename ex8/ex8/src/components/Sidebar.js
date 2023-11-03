import "./Sidebar.css"
import Main from "./Main"

function Sidebar() {
    return (
        <>
            <div className="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>

            <Main/>
        </>
    );
}

export default Sidebar;