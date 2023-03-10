import React,{useState,useEffect} from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { AiFillHome } from "react-icons/ai"
import { RiRegisteredFill } from "react-icons/ri"
import { BiLogIn } from "react-icons/bi"
import { FcAbout } from "react-icons/fc"
import {SiConvertio} from "react-icons/si";
import {Link} from "react-router-dom"


function Navbar() {

    const[toggleMenu,setToggleMenu] = useState("")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // handle toggle function on button click
    function handleToggle() {
        setToggleMenu(!toggleMenu)
    }

    // function that will resize the nav on every size
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

      

    return (
        <nav className="fixed-top">
           <ul class="navbar-nav">
                <li class="nav-item">
                    <span className="webName" style={{fontFamily:"cursive"}}> 
                        <SiConvertio className="text-primary" style={{width: "50px",height: "35px",}} /> 
                        Konvate 
                    </span>
                </li>
            </ul>
            {(toggleMenu || screenWidth > 576) && (
                <ul className="list">
                    <li className="items"><Link to="/"> Home </Link></li>
                    <li className="items"><Link to="/about"> About </Link></li>
                </ul>
            )}
            
            <button onClick={handleToggle} className="btn">
                {toggleMenu ? (
				    <MdClose style={{ color: "#000", width: "30px", height: "30px",  }} />
				  ) : (
				    <FiMenu style={{ color: "#000", width: "30px", height: "30px",  }} />
				)}
            </button>
        </nav>
    )
}

export default Navbar