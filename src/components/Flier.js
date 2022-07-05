import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import IMG from "../images/IMG.jpeg"
import DSTV from "../images/DSTV.jpeg"
import GOTV from "../images/GOTV.png"
import STARTIMES from "../images/STARTIMES.jpeg"
import MTN from "../images/MTN.jpg"
import GLO from "../images/GLO.jpeg"
import MOBILE from "../images/MOBILE.png"
import AIRTEL from "../images/AIRTEL.png"
import { FiPhone } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"
function Flier(){


    return(
        <Container className="bg-primary mt-5 container">
            <Row>
                <Col className="col-5 colTitle">
                    <div className="title">YK DATA SERVICE</div>
                    <div  className="subTitle">Cheap Data</div>
                    <div  className="subTitle2">PLANS SOLUTIONS</div>
                    <img src={DSTV} height={40} width={60} alt="me" />
                    <img src={GOTV} height={40} width={60} alt="me" />
                    <img src={STARTIMES} height={40} width={60} alt="me" />
                </Col>
                <Col  className="col-7 bg-white rightSideCol">
                    <p>AFFORDABLE DATA FOR ALL DEVICES</p>
                    <h3>NEVER RUN</h3>
                    <h3>OUT OF</h3>
                    <h3>DATA!</h3>
                    <img src={IMG}  alt="me" />
                </Col>
            </Row>
            <div className="dataPlans">
                <img src={MTN} height={250} width={170} alt="me" />
                <div className="networkLogo">
                    <div>Other Network also available</div>
                    <img src={AIRTEL} height={100} width={130} alt="me" />
                    <img src={MOBILE} height={100} width={130} alt="me" /> <br />
                    <img src={GLO} height={105} width={270} alt="me" />
                </div>
            </div>
            <div className="address">
                <FiPhone style={{ color:"yellow" ,width: "25px",height: "20px",}} />
                <BsWhatsapp style={{ color:"yellow" ,width: "25px",height: "20px",}} /> 
                <b>08132906416 |</b>
            </div>
            <div className="AccountDetails">
                <div>ACCOUNT DETAILS: <b>0230087329</b></div><br />
                <p>OLAGUNJU ADETAYO SAHEED(WEMA)</p>
               
            </div>
        </Container>
    )

}

export default Flier