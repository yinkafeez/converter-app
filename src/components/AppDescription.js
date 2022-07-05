import React from "react";
import Student from "../images/Student.png"
function AppDescription() {

    return(
       <div className="appDescription">
           <h3>Get Your Task Done</h3>
           <p>
               Konvate contains quick refrence information and tools for converting from 
               one base to another,conversion of a number in one base to a number in another base,
               conversion from roman numerals to Figure,& translation of words into different languages
            </p>
           <img src={Student} alt="me" />
       </div>
    )

}

export default AppDescription