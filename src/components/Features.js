import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {Link} from "react-router-dom"
function Features() {

    const features = [
        {
            id:1,
            text:" Conversion from base ten to any other bases",
            path:"/base-ten-to-other-base-converter"
        },
        {
            id:2,
            text: "Conversion from other bases to base ten",
            path:"/other-bases-to-base-to-converter"
        },
       
        {
            id:3,
            text: "Conversion of a number in other base to a non decimal base number", 
            path:"/a-number-in-other-base-to-a-non-decimal-base-number-converter"
        },
        {
            id:4,
            text:" Conversion from Roman Numerals to Figure",
            path:"/numbers-to-roman-numeral-converter"
        },
        {
            id:6,
            text: "Text Translator",
            path:"/text-translator"
        },
    ]


    return(
            <Container className=" featuresContainer">
                
                <h4>CATEGORIES</h4>
                <p>Get your task done in any of the listed categories </p>
                    <Row className="featuresRow">
                        {features.map(feature =>{
                            return(
                                
                                <Col xs={6} lg={4} key={feature.id}>                  
                                    <form className="featuresForm">
                                        <Link to={feature.path}>
                                            <button className="featureButton">
                                                
                                                <div className="featuresText">{feature.text} </div>                                                    
                                            
                                            </button>
                                        </Link>
                                    </form>
                                </Col>
                                
                            )	
                            
                        })}
                    </Row>
            </Container>

    )

}

export default Features