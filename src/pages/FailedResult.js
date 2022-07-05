import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Container from "react-bootstrap/esm/Container"
import {useNavigate} from "react-router-dom"

function FailedResult() {

     // getting stored NicknameInput from the local storage when the website unMount(reload)
     function getNicknameInput() {
        // getting stored items
           const temp = localStorage.getItem("nickname")
           const savedNicknameInput = JSON.parse(temp)
           return savedNicknameInput || ""
       } 

       //saving nickname as a variable
       const nickname = getNicknameInput()

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
            <Container className="FailedResultContainer">
                <p>Ooops! {nickname} You've exhausted your chances</p> <br />
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

export default FailedResult