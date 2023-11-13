import { useRef } from "react"
import {AiOutlineCloseCircle, AiOutlineMenu} from "react-icons/ai"
import {BiCart, BiSearchAlt, BiLogInCircle, BiCartAlt} from "react-icons/bi"
import "../style/main.css"
import "../style/navbar.css"
// import { Link } from "react-router-dom";

export default function Navbar() {
    const navRef = useRef();

    const showNavBar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <div className="logo">
            <BiCart size={40}/>
            <h3>GO CART</h3>
        </div>
        <nav ref={navRef}>
            <ul>
                <li className="searchbar">
                        <input type="text" placeholder="Search" />
                        <button><BiSearchAlt size={25}/></button>
                </li>
                <li>
                    <button className="navlink"><BiCartAlt size={30}/></button>
                </li>
                <li>
                    <button className="navlink"><BiLogInCircle size={30}/></button>
                </li>
                <li>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <AiOutlineCloseCircle/>
                    </button>
                </li>
            </ul>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
            <AiOutlineMenu/>
        </button>
    </header>
  )
}