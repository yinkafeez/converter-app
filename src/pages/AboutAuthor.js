import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {SiConvertio} from "react-icons/si";

function AboutAuthor() {

    return(
        <>
            < Navbar />
            <div className="aboutData">
                <h3>About the Author</h3>
                <h4>About Author</h4>
                <span className="webName"> 
                    <SiConvertio class="text-primary" style={{width: "50px",height: "35px",}} /> 
                     Konvate 
                </span>
                <h5> This app was developed by OAA, a self-taught web developer.
                     He is opened to freelance Gig. So go ahead and connect with OAA on facebook
                      @ Olagunju Adeyinka Afeez.
                </h5>
            </div>
            <Footer />
        </>
    )
}

export default AboutAuthor