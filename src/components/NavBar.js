import React from "react";
import logo from "../logo0.png";
import { Link } from "react-scroll";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" position="static" style={{ background: "#222" }}>
        <div className = "container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar