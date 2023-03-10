import React, { useState,useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Container from "react-bootstrap/esm/Container"
import {useNavigate} from "react-router-dom"

function GameTaskPage() {

    //userGuess state
    const[userGuess,setuserGuess] = useState("")

    // userGuess onChange function
    function userGuessOnchage(e) {
        setuserGuess(e.target.value)
    }

    // CLEAR INPUT FUNCTION 
    function clearInput() {
        // clear input
        setuserGuess("")
    }

    //storing of userGuess in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(userGuess)
        localStorage.setItem("userGuess", temp)
    },[userGuess])


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

    // getting stored AttemptsInput from the local storage when the website unMount(reload)
    function getAttemptsInput() {
        // getting stored items
           const temp = localStorage.getItem("attempts")
           const savedAttemptsInput = JSON.parse(temp)
           return savedAttemptsInput || ""
    } 

    // Storing get items as a variable
    const nickname = parseInt(getNicknameInput());
    const max = parseInt(getMaximumRange());
    const min = parseInt(getMinimumRange());
    const attempts = parseInt(getAttemptsInput())

    const[counter,setCounter] = useState(0)   //counter
    let correct = false   //correct value

    // storing useNavigate() as a variable
    const navigate = useNavigate()

    //Computer random number
	const randNum = Math.ceil(Math.random() * (max-min) + min)

    // show and hide function of user guess and comp guessess function
    const[guess,setGuess] = useState(false)

    // ONSUBMIT FUNCTION 
    function handleSubmit(e) {
        // prevent page reload
        e.preventDefault()
        // conditions
        //check if user guess input is blank
        if (userGuess == "") {
            alert("Please enter a value")
            setCounter(counter + 1)  //increase counter
            //reset  attempts
            const attemptsLeft = document.getElementById("attempts")
            attemptsLeft.innerHTML= attempts-counter
        }
        //check if user guess is not a number
        else if (isNaN(userGuess)) {
            alert("Your guessess must be numbers")
            setCounter(counter + 1)  //increase counter
             // reset attempts 
            const attemptsLeft = document.getElementById("attempts")
            attemptsLeft.innerHTML= attempts-counter
             // calling clear input function
             clearInput()
        }
        // check  if userGuess equals computer guess
        else if(userGuess != randNum) {
            setCounter(counter + 1)  //increase counter
            // reset attempts 
            document.getElementById("attempts").innerHTML= attempts-counter
            //show computer guess and user guess
            // document.getElementById("showResult").innerHTML= "<p className='comGuessResult'> Computer Guess : <b> "+randNum+" </b></p>  <p  className='userGuessResult'>Wrong! You guessed : "+userGuess+" </p>"
            setGuess(true)
        }
        else{
            setCounter(counter + 1)  //increase counter
            correct = true      // set correct to be true
        }

        //CHECK FOR RESULT
        if(counter==attempts && correct == false){
            navigate("/educational-game/failed-result")

        }
        if( correct == true){
            navigate("/educational-game/success-result")
        }
    }
 return(
     <>
        <Navbar />
            <Container className="gameTaskContainer">
                <h5>Guess a number between {min} and {max}</h5>
                <p>Attempts left : <b className="text-warning" id="attempts">{attempts}</b> </p>
                <form className="gameTaskForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter number" 
                        value={userGuess}
                        onChange={userGuessOnchage}
                    /><br />
                    <button>
                        Enter
                    </button>

                    {/* show guesss */}
                    {guess? (
                        <div>
                            <p className="comGuessResult text-success"> Computer Guess  :  {randNum} </p>
                            <p className="userGuessResult text-danger"> Wrong! You guessed : {userGuess} </p>
                        </div>
                    ): null}
                </form>
               
            </Container>
        <Footer />
    </>
)
}

export default GameTaskPage