import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function OtherBaseToNonDecimalBaseConverter() {

    const[fromBaseInput,setFromBaseInput] = useState("")
    const[toBaseInput,setToBaseInput] = useState("") 
    const[numberInput,setNumberInput] = useState("")
    const[resultInput,setResultInput] = useState("")

    // fromBase input onChange function
    function fromBaseInputOnchange(e) {
        setFromBaseInput(e.target.value)
    }

    //toBase input onChange function
    function toBaseInputOnchange(e) {
        setToBaseInput(e.target.value)
    }

    // numberInput input onChange function
    function numberInputOnchange(e) {
        setNumberInput(e.target.value)
    }

    // resultInput input onChange function
    function resultInputOnchange(e) {
        setResultInput(e.target.value)
    }


    // WORKINGS ON HOW TO CONVERT NUMBERS FROM OTHER  BASES TO A NON DECIMAL BASE

    function getAnswer() {
        const num = numberInput
        const fromBase = parseInt(fromBaseInput)
        const destinationBase = parseInt(toBaseInput)

            if (destinationBase >= 2 && destinationBase <=36){
                const answer = parseInt(num,fromBase).toString(destinationBase)
                const integerAnswer = parseInt(answer)
                return setResultInput(integerAnswer)
            }       
    }

    // onSubmit function 
    function handleSubmit(e) {
        // preventing page reload
        e.preventDefault()
        // onSubmit conditions
        if (numberInput == "" || fromBaseInput == "" || toBaseInput == ""){
            alert("please enter a number")
        }
        else if (isNaN(numberInput)){
            alert("value must be a number")
        }
        
        setFromBaseInput("")
        setToBaseInput("")
        setNumberInput("")
    }


    return(
        <>
            <Navbar />
            <Container className="converterContainer">
                <h4> CONVERSION OF A NUMBER IN OTHER BASE TO A NON DECIMAL BASE NUMBER </h4>
                <form  className="userInput" onSubmit={handleSubmit}>

                    <Row className="userInputRow">
                        <Col xs={12} sm={6} className="userInputCol">
                            <b>From base:</b> <input
                                        type="number" 
                                        value={fromBaseInput}
                                        onChange={fromBaseInputOnchange}
                            />
                        </Col>
                        
                        <Col xs={12} sm={6} className="userInputCol">
                            <b>To base:</b>   <input 
                                                    type="number" 
                                                    value={toBaseInput}
                                                    onChange={toBaseInputOnchange}
                                                /> <br />
                        </Col>

                    </Row>
                    
                    <div className="userInputDiv">                                                
                        <input 
                            type="text" 
                            placeholder="enter value" 
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
                    <h3><b>HOW TO CONVERT NUMBERS FROM OTHER BASE TO NON DECIMAL BASE BY WORKINGS</b></h3>
                    <div>
                       step  1 - Convert the original number to a decimal number (base 10).<br />
                       step  2 - Convert the decimal number so obtained to the new base number.
                    </div>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default OtherBaseToNonDecimalBaseConverter