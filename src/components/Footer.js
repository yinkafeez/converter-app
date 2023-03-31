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
    
    return(

        <Container fluid className="footerContainer">
            <>
            {/* Social media Links div */}
            <div className="footerSocialMediaLinkdiv">
                <span className="footerfbcontainer">
                    <a href="https://www.facebook.com/olagunju.afeez.927">
                        <FaFacebookF className="text-primary" style={{width: "25px",height: "20px"}}/>
                    </a>
                </span>
                <span className="footerWacontainer">
                    <a href="https://wa.me//+2348132906416">
                        <BsWhatsapp className="text-success" style={{width: "30px",height: "25px"}}/>
                    </a>
                </span>
            </div>

            <hr className="bg-white" />
            <p style={{textAlign:"center",color:"white"}}>
                <b>2022 &copy; <b style={{fontFamily:"cursive"}}>Konvate</b> </b>
            </p>
            </>
        </Container>
                
    )

}

export default Footer