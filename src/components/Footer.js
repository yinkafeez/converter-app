import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {SiConvertio} from "react-icons/si";
import {AiOutlineArrowRight} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs"
import {Link} from "react-router-dom"

function Footer() {
    // Quick Links variable
    const footerQuickLinks=[
        {
            id:1,
            title:"Home",
            path:"/Konvate"
        },
        {
            id:2,
            title:"About App",
            path:"/about-app"
        },
        {
            id:3,
            title:"About Author",
            path:"/about-author"
        },
    ]
    
    return(
        <Container fluid className="footerContainer bg-dark">
            <Row>
                {/* About column */}
                <Col className="footerAboutCol sm-12 lg-4">
                    <h5>About Us</h5>
                    <p className="footerWebName">
                    <SiConvertio class="text-primary" style={{width: "50px",height: "35px",}} /> 
                             Konvate 
                    </p>

                    <div>
                        <p>
                            Konvate makes it easy for visitors to solve their problems without any stress.
                            Visitors can solve their task on Number System, & translation of words into different languages
                        </p>
                    </div>
                </Col>
                {/* Quick links column */}
                <Col className="footerLinksCol sm-12 lg-4">
                    <h5 className="text-white">Quick Links</h5>
                    <ul className="footerLinksList">
                        {footerQuickLinks.map(footerLink =>{
                            return(
                                <li key={footerLink.id}>
                                    <Link to={footerLink.path}>
                                        <AiOutlineArrowRight class="text-white" /> <span className="featuresText">{footerLink.title} </span>                                                    
                                    </Link>
                                </li>
                            )
                        })} 
                    </ul>
                </Col>
                {/* Social media Links column */}
                <Col className="footerContactLinksCol sm-12 lg-4">
                    <h5 className="text-white">Connect with us</h5>
                    <p>connect with us through our email address and on our social media handles</p>

                    <form className="socialMediaLinkForm">
                        <div className="emaildivLink">
                            <a href="mailto:Adeyinkaolagunju16@gmail.com">
                                <AiOutlineMail class="text-white" style={{width: "30px",height: "25px"}} /> 
                                AdeyinkaOlagunju16@gmail.com
                            </a>
                        </div>
                        <a href="https://www.facebook.com/olagunju.afeez.927">
                            <div className="fbLinkDiv">
                                <button className="fbLinkButton">
                                    <FaFacebookF class="text-primary" style={{width: "15px",height: "15px"}}/>
                                </button>
                            </div>
                        </a>
                        <a href="https://wa.me//+2348132906416">
                            <div className="whatsappLinkDiv">
                                <button className="whatsappLinkButton">
                                    <BsWhatsapp class="text-white" style={{width: "30px",height: "25px"}}/>
                                </button>
                            </div>
                        </a>
                    </form>
                </Col>
                
                <hr class="bg-white" />
                <p style={{textAlign:"center",color:"white"}}>
                    <b>2022 &copy; <b style={{fontFamily:"cursive"}}>Konvate</b> </b>
                </p>
                   

            </Row>
        </Container>
    )

}

export default Footer