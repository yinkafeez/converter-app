import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function BaseTenToOtherBaseConverter(){

    const [destinationBaseInput,setDestinationBaseInput] = useState("")
    const [initialBaseInput,setInitialBaseInput] = useState(10)
    const [numberInput,setNumberInput] = useState("");
    const [answerInput,setAnswerInput] = useState("");

    // destinationBaseInput onChange function
	function destinationBaseInputOnChange(event){
	    setDestinationBaseInput(event.target.value)
	}
    // numberInput onChange function
	function numberInputOnChange(event){
	    setNumberInput(event.target.value)
	}

    // answerInput onChange function
	function answerInputOnChange(event){
	    setAnswerInput(event.target.value)
	}


    //storing of destinationBaseInput in the local storage 
    //  useEffect(() =>{
    //     const temp = JSON.stringify(destinationBaseInput)
    //     localStorage.setItem("destinationBase", temp)
    // },[destinationBaseInput])

    //storing of numberInput in the local storage 
    // useEffect(() =>{
    //     const temp = JSON.stringify(numberInput)
    //     localStorage.setItem("number", temp)
    // },[numberInput])

    // getting stored destinationBase from the local storage when the website unMount(reload)
    // function getDestinationBaseInput() {
	// 	// getting stored items
	// 	const temp = localStorage.getItem("destinationBase")
	// 	const savedDestinationBase = JSON.parse(temp)
	// 	return savedDestinationBase || ""
	//   } 

      // getting stored numberInput from the local storage when the website unMount(reload)
    // function getNumberInput() {
	// 	// getting stored items
	// 	const temp = localStorage.getItem("number")
	// 	const savedNumberInput = JSON.parse(temp)
	// 	return savedNumberInput || ""
	//   } 

    //   WORKINGS ON HOW TO CONVERT NUMBER FROM BASE TEN TO OTHER BASES
    function getAnswer() {
            const num = numberInput;
            const destinationBase = destinationBaseInput;
            if (num !== undefined) {
                if(destinationBase >= 2 && destinationBase <= 36) {
                   const answer = parseInt(num,10).toString(destinationBase)
                   const integerAnswer = parseInt(answer)
                   return setAnswerInput(integerAnswer)
                }
               
            }
            
            
    }



    // Onsubmit function
    function handleSubmit(event) {
        // prevent page refresh
	    event.preventDefault()
        // clear all input values in the form
		// document.getElementById("form").reset();

        // checking if inputs are empty onSubmit
        if (destinationBaseInput=="" || numberInput==""){
            alert("please write something")
        }
        else if(isNaN(numberInput)) {
            alert("value must be number")
        }
        else if (destinationBaseInput < 2 && destinationBaseInput > 36){
            alert("Base number must not be less than 2 and greater than 36")
        }

         // clear all input values in the form
        setDestinationBaseInput ("")
        setNumberInput ("")
    }

    return(
        <>
            <Navbar />
            <Container className="converterContainer">
                <h4> CONVERSION FROM BASE TEN TO OTHER BASES </h4>
                <form className="userInput" id="form" onSubmit={handleSubmit}>
                    
                    <Row className="userInputRow">
                        <Col xs={12} sm={6} className="userInputCol">
                            <b>From base:</b> <input
                                        type="number" 
                                        value={initialBaseInput}
                            />
                        </Col>
                        
                        <Col xs={12} sm={6} className="userInputCol">
                            <b>To base:</b>   <input 
                                                                    type="number" 
                                                                    value={destinationBaseInput}
                                                                    onChange={destinationBaseInputOnChange}
                                                                /> <br />
                        </Col>

                    </Row>
                    
                    <div className="userInputDiv">                                                
                        <input 
                            type="text" 
                            placeholder="enter value" 
                            value={numberInput}
                            onChange={numberInputOnChange}
                        />
                        {/* <b> => </b> */}
                        <input 
                            type="text"
                            placeholder="answer" 
                            class="ms-4" 
                            value={answerInput}
                            onChange={answerInputOnChange}
                        /> <br />

                        <button onClick={getAnswer}>
                            Convert
                        </button>
                    </div>
                </form>

                <div className="description">
                    <h3><b>HOW TO CONVERT NUMBERS FROM BASE TEN TO OTHER BASES BY WORKINGS</b></h3>
                    <div>
                        Divide the number in base ten with the destination base  
                        until the quotient is 0 and calculate the remainder each time.The destination
                         base digits are the calculated remainders and the reading must be from bottom to top
                    </div>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default BaseTenToOtherBaseConverter