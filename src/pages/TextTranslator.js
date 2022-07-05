import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container"
import axios from "axios"

function TextTranslator(){

    const[inputText,setInputText] = useState("")
    const[resultInput,setResultInput] = useState("")
    // language key state
    const[detectLanguageKey,setDetectLanguageKey] = useState("")
    //API languages state
    const[languageList,setLanguageList] = useState([])
    //language code state
    const[selectedLanguageKey,setSelectedLanguageKey]= useState("")


    // input text onChange function 
    function inputTextOnchange(e) {
        setInputText(e.target.value)
    }
     // result input onChange function 
     function resultInputOnchange(e) {
        setResultInput(e.target.value)
    }

    // CALLING LANGUAGE DETECT API TO DETECT INPUT LANGUAGE
    function  getLanguageSource() {
        axios.post("https://libretranslate.de/detect", {
            q  : inputText
        })
        .then ((response) => {
            setDetectLanguageKey(response.data[0].language)
        })
    }

    // GETTING SUPPORTED LANGUAGES IN THE API
    useEffect(() => {
        axios.get("https://libretranslate.de/languages")
            .then((response) => {
                setLanguageList(response.data)
            })
            getLanguageSource()
    }, [])

    //GETTING LANGUAGE CODE FROM THE API
    function languageKey(selectedLanguage) {
        setSelectedLanguageKey(selectedLanguage.target.value)
    }
    //CALLING TRANSLATE API
    function translateText() {
        getLanguageSource()

        let data = {
            q : inputText,
            source : detectLanguageKey,
            target : selectedLanguageKey
        }
        axios.post("https://libretranslate.de/translate", data)
        .then((response) => {
             setResultInput(response.data.translatedText)
        })
    }

    // onSubmit function
    function handleSubmit(e) {
        // preventing  page reload
        e.preventDefault()
    }

    return(
        <>
            <Navbar />
            <Container className="converterContainer">
                <h4> TEXT TRANSLATOR </h4>
                <form  className="userInput" onSubmit={handleSubmit}>
                    <div>                                                
                        <input 
                            type="text" 
                            placeholder="type text to translate..."
                            onChange={inputTextOnchange} 
                            value={inputText}
                        />
                        
                        <input 
                            type="text"
                            placeholder="answer" 
                            class="ms-4" 
                            onChange={resultInputOnchange}
                            value={resultInput}
                        /> <br />

                        <select className="pt-1 pb-1 px-5 ps-5" onChange={languageKey}>
                            <option>Please Select Language..</option>
                            {languageList.map(language => {
                                return(
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                        
                                )
                            })}

                        </select><br /><br />

                        <button onClick={translateText}>
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

export default TextTranslator