import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container"

function EnglishToFrenchTranslator(){

    const[inputText,setInputText] = useState("")
    const[resultInput,setResultInput] = useState("")

    // input text onchange function
    function inputTextOnchange(e) {
        setInputText(e.target.value)
    }
    function resultInputOnchange(e) {
        setResultInput(e.terget.value)
    }

    const approximation =[
        {
            id : 1,
            text : "significant figure"
        },
        {
            id : 2,
            text : "decimal places"
        }
    ]

    // WORKINGS ON THE APPROXIMATION
    function getResult(toPrecision) {
        let input = inputText
    }
    

    // onSubmit function
    function handleSubmit(e) {
        // preventing page reload
        e.preventDefault()
    }
    return(
        <>
            <Navbar />
            <Container className="converterContainer">
                <h4> TRANSLATION FROM ENGLISH TO FRENCH </h4>
                <form  className="userInput" onSubmit={handleSubmit}>
                    <div>                                                
                        <input 
                            type="text" 
                            placeholder="enter text" 
                            onChange={inputTextOnchange}
                            value={inputText}
                        />
                       
                        <input 
                            type="text"
                            placeholder="answer" 
                            class="ms-4" 
                            value={resultInput}
                            onChange={resultInputOnchange}
                        /> <br />

                        <select className="pt-1 pb-1 px-5 ps-5">
                            <option>Choose approximation..</option>
                            <hr />
                            {approximation.map(approximation => {
                                return(
                                    <option value={approximation.id}>
                                        {approximation.text}
                                    </option>
                                ) 
                            })}
                        </select> <br /> <br />

                        <button onClick={getResult}>
                            Translate
                        </button>
                    </div>
                </form>

                <div className="description">
                    <h3><b>WE TRANSLATE FILES PROFESSIONALLY</b></h3>
                    <div>
                      Yes. We help you translate text files accurately.
                    </div>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default EnglishToFrenchTranslator