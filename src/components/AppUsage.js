import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import {IoGameController} from "react-icons/io5";
import {Link} from "react-router-dom"

function AppUsage() {

    return(
        <Container fluid className="appUsageDiv">

            <div className="educationalQuotes">
                <h3>EDUCATIONAL QUOTES</h3>
                <Carousel>
                    <Carousel.Item>
                        <h5>
                            "Education is what remains after one has forgotten 
                             what one has learned in school"
                        </h5>
                        <p>Albert Einstein</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>
                            "Mathematics is not about numbers,equations,computations,
                            or algorithm.It is about <b>understanding.</b> "
                        </h5>
                        <p>Williams Paul Thurstan</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>
                            "Life is a math equation.In other to gain the most,you have to
                            know how to convert negatives to positives"
                        </h5>
                        <p>Anonymous</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>
                            "Education is not preparation for life;education is life itself"
                        </h5>
                        <p>John Dewey</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>
                            "<b>MATH.</b><br /> The only place where people can buy 64 watermelons
                            and no one wonders why..."
                        </h5>
                        <p>Anonymous</p>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="gameDiv">
                <Link to="/educational-game">
                    <button>    
                        <h3>EDUCATIONAL GAME</h3>
                        <IoGameController className="text-primary" style={{width: "120px",height: "105px"}} />
                    </button>
                </Link>
            </div>
        </Container>
    )
}

export default AppUsage