import React,{useState,useEffect} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Container from "react-bootstrap/esm/Container"
import {useNavigate} from "react-router-dom"
import GameTaskPage from "../pages/GameTaskPage"

function EducationalGameHomePage() {
 
        const[nicknameInput,setNicknameInput] = useState("")
        const[attemptsInput,setAttemptsInput] = useState("")
        const[maximumRange,setmaximumRange] = useState("")
        const[minimumRange,setminimumRange] = useState("")

        // nicknameInput onChange function
        function nicknameInputOnchange(e) {
            setNicknameInput(e.target.value)
        }

        // maximum range onChange function
        function maximumRangeOnchange(e) {
            setmaximumRange(e.target.value)
        }

        // minimum range onChange function
        function minimumRangeOnchange(e) {
            setminimumRange(e.target.value)
        }

        // attemptsInput onChange function
        function attemptsInputOnchange(e) {
            setAttemptsInput(e.target.value)
        }
        //STORING INPUT DATA

        //storing of NicknameInput in the local storage 
         useEffect(() =>{
            const temp = JSON.stringify(nicknameInput)
            localStorage.setItem("nickname", temp)
        },[nicknameInput])

        //storing of maximumRangee in the local storage 
        useEffect(() =>{
            const temp = JSON.stringify(maximumRange)
            localStorage.setItem("maximum", temp)
        },[maximumRange])

        //storing of minimumRangee in the local storage 
        useEffect(() =>{
            const temp = JSON.stringify(minimumRange)
            localStorage.setItem("minimum", temp)
        },[minimumRange])

        //storing of AttemptsInput in the local storage 
        useEffect(() =>{
            const temp = JSON.stringify(attemptsInput)
            localStorage.setItem("attempts", temp)
        },[attemptsInput])

        // CLEAR INPUT FUNCTION 
        function clearInput() {
            // clear input
            setNicknameInput("")
            setmaximumRange("")
            setminimumRange("")
            setAttemptsInput("")
        }
         // storing useNavigate() as a variable
         const navigate = useNavigate()

        // ON SUBMIT FUNCTIONS 
        function handleSubmit(e) {
            // preventing page reload
            e.preventDefault()

            // CONDITIONS
            // check if all fields are filled 
            if(nicknameInput=="" || maximumRange=="" || minimumRange=="" || attemptsInput==""){
                alert("Please fill all fields")
                // calling clear input function
                clearInput()
            }
            // check if nicknameInput is not a number
            else if(!isNaN(nicknameInput)) {
                alert("Please enter a valid nickname")
                // calling clear input function
                clearInput()
            }
            // check if nicknameInput lenght is greater than 10 characters and less than 4 characters
            else if (nicknameInput.length < 4 || nicknameInput > 10) {
                alert("Nickname cannot be less than 4 characters and more than 10 characters")
                // calling clear input function
                clearInput()
            }
            //check if maximumRangee,minimumRangee,attemptsInput are not numbers
            else if(isNaN(maximumRange) || isNaN(minimumRange) || isNaN(attemptsInput)) {
                alert("attempts inputs,maximum & minimum range inputs must be numbers")
                // calling clear input function
                clearInput()
            }
            // check if minimum range input is greater than maximum range input
            else if(minimumRange >= maximumRange) {
                alert("Invalid min or max value")
                // calling clear input function
                clearInput()
            }
            else{
                navigate("/educational-game/task-page");
            }
        }
        

        return(
            <>
                <Navbar />
                    <Container className="gameContainer">
                        <form className="gameForm" onSubmit={handleSubmit} id="form">
                            <h5>Please fill the following fields</h5>
                            <input 
                                type="text" 
                                placeholder="Enter your nickname" 
                                value={nicknameInput}
                                onChange={nicknameInputOnchange}
                            /> <br />

                            <input 
                                type="text" 
                                placeholder="Maximum range"
                                value={maximumRange}
                                onChange={maximumRangeOnchange} 
                            /> <br />

                            <input 
                                type="text" 
                                placeholder="Minimum range" 
                                value={minimumRange}
                                onChange={minimumRangeOnchange}
                            /> <br />

                            <input 
                                type="text" 
                                placeholder="Number of attempts" 
                                value={attemptsInput}
                                onChange={attemptsInputOnchange}
                            /> <br /> 
                                <button>
                                    Continue
                                </button>
                        </form>
                    </Container>
                <Footer />
            </>
        )
}

export default EducationalGameHomePage