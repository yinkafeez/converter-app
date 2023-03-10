import React from "react";
import Navbar from "../components/Navbar"
import {SiConvertio} from "react-icons/si";
import Footer from "../components/Footer"

function AboutApp() {

    return(
        <>
            <Navbar />
            <div className="about">
                <h3>About the App</h3>
                <h4>About App</h4>
                <span className="webName" style={{fontFamily:"cursive"}}> 
                        <SiConvertio class="text-primary" style={{width: "50px",height: "35px",}} /> 
                         Konvate 
                </span>
                <h5> Konvate contains quick refrence information and tools for converting from one 
                    base to another,conversion from roman numerals to Figure,& translation of words
                     into different languages
                </h5>
            </div>
            <Footer />
        </>
    )
}

export default AboutApp