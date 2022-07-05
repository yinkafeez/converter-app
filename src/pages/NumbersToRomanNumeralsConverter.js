import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container"

function NumbersToRomanNumeralsConverter(){

    const [numberInput,setNumberinput] = useState("")
    const [resultInput,setResultinput] = useState("")

    // onChange function of  number input
    function numberInputOnchange(e) {
        setNumberinput(e.target.value)
    }

     // onChange function of  result input
     function resultInputOnchange(e) {
        setResultinput(e.target.value)
    }

    // storing of basic roman numerals as var
    const romanConversion = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    // WORKINGS ON HOW TO CONVERT NUMBERS TO ROMAN NUMERALS
    function getAnswer() {
        let num = numberInput,
        numArray = num.split(""),
        total = 0
        let current;
        let currentValue;
        let next;
        let nextValue;

        if (num !== undefined){
            for(let i = 0 ; i < numArray.length; i++){
                current = numArray[i];
                currentValue = romanConversion[current]

                next = numArray[i+1];
                nextValue = romanConversion[next]

                if (currentValue < nextValue) {
                    total -= (currentValue)
                }
                else {
                    total += (currentValue)
                }
            }
            return setResultinput(total)
        }
    }

    // onSubmit conditions
    function handleSubmit(e) {
        // preventing page reload
        e.preventDefault()

        // conditions
        if(numberInput == ""){
            alert("please enter a value")
        }
        else if (!isNaN(numberInput)) {
            alert("value must be in words and must be in capital letters")
        }

        // clearing number input
        setNumberinput("")
    }

    return(
        <>
            <Navbar />
            <Container className="converterContainer">
                <h4> CONVERSION FROM ROMAN NUMERALS TO FIGURE </h4>
                <form  className="userInput" onSubmit={handleSubmit}>
                    <div>                                                
                        <input 
                            type="text" 
                            placeholder="enter roman numeral..." 
                            value={numberInput}
                            onChange={numberInputOnchange}
                        />
                        {/* <b> => </b> */}
                        <input 
                            type="text"
                            placeholder="answer" 
                            class="ms-4" 
                            value={resultInput}
                            onChange={resultInputOnchange}
                        /> <br />

                        <button onClick={getAnswer}>
                            Convert
                        </button>
                    </div>
                </form>

                <div className="description">
                    <h3><b>HOW TO CONVERT FIGURES TO ROMAN NUMERALS</b></h3>
                    <div>
                      <h6><b>For decimal numbers( x):</b></h6>
                      1) Find the highest decimal value that is less than or equal to decimal number (x)
                         and its corresponding roman numeral (n): <br />
                      2) Write the roman numeral (n) that you found and subtract its value from (x). <br />
                        X = x-n <br />
                      3) Repeat stage 1 & 2 until you get zero result of X
                    </div>
                    <div>
                        Basic Roman Numerals:<br />
                        1) I = 1 <br />
                        2) V = 5 <br />
                        3) X = 10 <br />
                        4) L = 50 <br />
                        5) C = 100 <br />
                        6) D = 500 <br />
                        7) M = 1000
                    </div>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default NumbersToRomanNumeralsConverter