import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Container from "react-bootstrap/esm/Container"
import {useNavigate} from "react-router-dom"
function SuccessResult({randomNum}) {

     // getting stored NicknameInput from the local storage when the website unMount(reload)
     function getNicknameInput() {
        // getting stored items
           const temp = localStorage.getItem("nickname")
           const savedNicknameInput = JSON.parse(temp)
           return savedNicknameInput || ""
       } 

        // getting stored MaximumRange from the local storage when the website unMount(reload)
    function getMaximumRange() {
        // getting stored items
           const temp = localStorage.getItem("maximum")
           const savedMaximumRange = JSON.parse(temp)
           return savedMaximumRange || ""
    } 

    // getting stored MinimumRange from the local storage when the website unMount(reload)
    function getMinimumRange() {
        // getting stored items
           const temp = localStorage.getItem("minimum")
           const savedMinimumRange = JSON.parse(temp)
           return savedMinimumRange || ""
    } 

     // getting stored userGuess from the local storage when the website unMount(reload)
     function getUserGuess() {
        // getting stored items
           const temp = localStorage.getItem("userGuess")
           const savedUserGuess = JSON.parse(temp)
           return savedUserGuess || ""
       } 

    //saving nickname as a variable
    const nickname = getNicknameInput()

     //saving userGuess as a variable
     const userGuess = parseInt(getUserGuess())

     // saving maxmimum range as a variable
     const max = parseInt(getMaximumRange());

     // saving minimum range as a variable
    const min = parseInt(getMinimumRange());
    
    // storing useNavigate() as a variable
    const navigate = useNavigate()

     //    restart onClick button function
     function handleRestartBtnClick() {
        navigate("/educational-game/task-page")
    }

    //    Menu onClick button function
    function handleMenuBtnClick() {
        navigate("/educational-game")
    }

    return(
        <>
            <Navbar />
            <Container className="SuccessResultContainer">
                <h2> GAME <br /> PASS </h2>
                <p>
                    Great! {nickname}, 
                    Your guess : {userGuess},  
                    computer guess : {randomNum},<br />
                    You won.
                </p>

                <form>
                    <button onClick={handleRestartBtnClick}>
                        Restart
                    </button>
                    <button onClick={handleMenuBtnClick}>
                        Menu
                    </button>

                </form>
            </Container>
            <Footer />
        </>
    )
}

export default SuccessResult