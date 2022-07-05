import React from "react"
import Dropdown from "react-bootstrap/Dropdown";
import {SiConvertio} from "react-icons/si";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container"

function Navbar() {



    return(
        <Container fluid>
            <nav  className="topNavbar" class="navbar navbar-expand-sm  bg-white fixed-top">
                <Container fluid>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <span className="webName"> 
                                <SiConvertio className="text-primary" style={{width: "50px",height: "35px",}} /> 
                                Konvate 
                            </span>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item" className="homeNavLink">
                            <span class="nav-link"> 
                                <Link to="/Konvate"> Home </Link>
                            </span>
                        </li> 
                        <li class="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdownButton">
                                    About
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item  className="aboutBtnDropdownItem"> 
                                        <Link to="/about-app"> About App </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item  className="aboutBtnDropdownItem">  
                                        <Link to="/about-author"> About Author </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Container>
            </nav>
        </Container>
    )

}


export default Navbar