import { useRef, useState, useEffect } from "react"
import {AiOutlineCloseCircle, AiOutlineMenu} from "react-icons/ai"
import {BiCart, BiSearchAlt, BiLogInCircle,BiLogOutCircle, BiCartAlt} from "react-icons/bi"
import "../style/main.css"
import "../style/navbar.css"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import{logoutUser} from '../redux/actions/authActions'
export default function Navbar() {
    const navRef = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const showNavBar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

    const handleLogin = ()=>{
        isAuth? navigate('/login'):null;
    }

    const handleLogout=()=>{
        !isAuth? dispatch(logoutUser()):null;
        navigate('/login')
    }

    const checkAuth = useSelector((state)=>state.auth)
    const [isAuth, setIsAuth]= useState (false)
    
    useEffect(()=>{
        checkAuth.token && checkAuth.islogged? setIsAuth(true):null
    },[checkAuth.token, checkAuth.islogged])
    
    const handleShowCart = ()=>{
        navigate("/myCart")
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
                    <button className="navlink" onClick={handleShowCart}><BiCartAlt size={30}/></button>
                </li>
                <li>
                    { isAuth? <button className="navlink" onClick={handleLogin}><BiLogInCircle size={30}/></button>
                    :<button className="navlink" onClick={handleLogout}><BiLogOutCircle size={30}/></button>}
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