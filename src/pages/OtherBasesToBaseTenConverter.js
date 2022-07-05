import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container"

function OtherBasesToBaseTenConverter(){

    const [fromBaseInput,setFromBaseInput] = useState()
    const [toBaseInput,setToBaseInput] = useState(10)
    const [numberInput,setNumberInput] = useState()
    const [resultInput,setResultInput] = useState()

    // from base input onChange function
     function fromBaseInputOnChange(e) {
        setFromBaseInput(e.target.value)
     }

     // number input onChange function
     function numberInputOnChange(e) {
        setNumberInput(e.target.value)
     }

     // result input onChange function
     function resultInputOnChange(e) {
        setResultInput(e.target.value)
     }

     //   WORKINGS ON HOW TO CONVERT NUMBER FROM OTHER BASES TO BASE TEN
      function getAnswer() {
         const num = numberInput
         const fromBase = fromBaseInput
         const answer = parseInt(num,fromBaseInput).toString(toBaseInput)
         const integerAnswer = parseInt(answer)
         return setResultInput(integerAnswer)
      }


      //onsubmit function  
       function handleSubmit(event) {
           // preventing page from reloading
           event.preventDefault()

        //    on submit conditions
         if(fromBaseInput=="" || numberInput==""){
            alert("please write something")
         }
         else if (isNaN(numberInput)) {
            alert("value must be number")
         }
         else if (fromBaseInput < 2 && fromBaseInput > 36){
            alert("Base number must not be less than 2 and greater than 36")
         }

         setFromBaseInput("")
         setNumberInput("")         
       }


    return(
        <>
            <Navbar />
            <Container className="converterContainer">
                <h4> CONVERSION FROM OTHER BASES TO BASE TEN </h4>
                <form  className="userInput" onSubmit={handleSubmit}>
                    <b>From base:</b> <input
                                        type="number" 
                                        value={fromBaseInput}
                                        onChange={fromBaseInputOnChange}
                                    />
                    <b style={{marginLeft:"35px"}}>To base:</b>   <input 
                                                                    type="number" 
                                                                    value={toBaseInput}
                                                                /> <br />
                    <div>                                                
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
                            value={resultInput}
                            onChange={resultInputOnChange}
                        /> <br />

                        <button onClick={getAnswer}>
                            Convert
                        </button>
                    </div>
                </form>

                <div className="description">
                    <h3><b>HOW TO CONVERT NUMBERS FROM  OTHER BASES TO BASE TEN BY WORKINGS</b></h3>
                    <div>
                       Multiply each digit with the base raised to the power of the digit number
                       (starting right digit number 0);<br />
                       decimal(base ten) = sum (digit x based digit x number)
                    </div>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default OtherBasesToBaseTenConverter