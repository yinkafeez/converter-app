import React, {useState,useEffect} from "react"
import {Route,Routes} from "react-router-dom"
import Navbar from "./Navbar"
import Features from "./Features"
import Footer from "./Footer"
import AppDescription from "./AppDescription";
import AppUsage from "./AppUsage"
import AboutApp from "../pages/AboutApp"
import AboutAuthor from "../pages/AboutAuthor"
import NotMatch from "../pages/NotMatch"
import OtherBasesToBaseTenConverter from "../pages/OtherBasesToBaseTenConverter"
import BaseTenToOtherBaseConverter from "../pages/BaseTenToOtherBaseConverter"
import NumbersToRomanNumeralsConverter from "../pages/NumbersToRomanNumeralsConverter"
import TextTranslator from "../pages/TextTranslator"
import OtherBaseToNonDecimalBaseConverter from "../pages/OtherBaseToNonDecimalBaseConverter"
import EnglishToFrenchTranslator from "../pages/EnglishToFrenchTranslator"
import EducationalGameHomePage from "../pages/EducationalGameHomePage"
import GameTaskPage from "../pages/GameTaskPage"
import FailedResult from "../pages/FailedResult"
import SuccessResult from "../pages/SuccessResult"
function ConverterContainer() {
    // state to store random number get from taskpage through props
    const [randomNum,setRandomNum] = useState("")
    // function to store the get data from taskpage to state
    function getRandomNumber(randomNumber) {
        setRandomNum(randomNumber)
    }

    return(
        
        <>
            <Routes>
                <Route path="/"
                    element={
                        <>
                            <Navbar />
                            <AppDescription />
                            <Features />
                            <AppUsage />
                            <Footer  />
                            
                        </>
                    }
                />
                <Route path="/about" element={<AboutApp />} />
                <Route path="/base-ten-to-other-base-converter" element={<BaseTenToOtherBaseConverter />} />
                <Route path="/other-bases-to-base-to-converter" element={<OtherBasesToBaseTenConverter />} />
                <Route path="/numbers-to-roman-numeral-converter" element={<NumbersToRomanNumeralsConverter />} />
                <Route path="/a-number-in-other-base-to-a-non-decimal-base-number-converter" element={<OtherBaseToNonDecimalBaseConverter />} />
                <Route path="/text-translator" element={<TextTranslator />} />
                <Route path="/English-to-French-Translator" element={<EnglishToFrenchTranslator />} />
                <Route path="/educational-game" element={ <EducationalGameHomePage />   } />
                <Route path="/educational-game/task-page" element={<GameTaskPage getRandomNumber={getRandomNumber} />} />
                <Route path="/educational-game/failed-result" element={<FailedResult />} />
                <Route path="/educational-game/success-result" element={<SuccessResult randomNum={randomNum} />} />
                <Route path="*" element={<NotMatch />} />
            </Routes>
        </>
    )
}

export default ConverterContainer