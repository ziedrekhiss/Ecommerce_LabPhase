import{AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import "../../style/register.css"
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../../redux/actions/authActions'

export default function Register() {
    const dispatch= useDispatch();
    const auth = useSelector((state)=>state.auth)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({name:'', email:'', phone:'', password:''})

    const handleRegister= ()=>{
        dispatch(register(userData))
    }

    useEffect(() => {
        // Redirect when auth.isLogged changes
        if (auth.isLogged) {
          navigate('/regSuccess'); // Redirect to the homepage
        }
      }, [auth.isLogged, navigate]);

  return (
    <div className="signup">
        <h1>Sign Up</h1>
        <div className="input-box">
            <input 
                type="text" 
                placeholder='Name' 
                required
                value= {userData.name}
                onChange={(e)=>setUserData({...userData, name:e.target.value})}
            />
            <AiOutlineUser/>
        </div>
        <div className="input-box">
            <input 
            type="text" 
            placeholder='Email' 
            required
            value={userData.email}
            onChange ={(e)=>setUserData({...userData, email:e.target.value})}
            />
            <AiOutlineMail/>
        </div>
        <div className="input-box">
            <input 
                type="number" 
                placeholder='Phone' 
                required
                value={userData.phone}
                onChange ={(e)=>setUserData({...userData, phone:e.target.value})}
            />
            <AiOutlinePhone/>
        </div>
        <div className="input-box">
            <input 
            type="password" 
            placeholder='password' 
            required
            value={userData.password}
            onChange ={(e)=>setUserData({...userData, password:e.target.value})}
            />
            <AiOutlineLock/>
        </div>
        <div className="login-link">
            <p>Already have an account?</p>
            <Link to="/login">login</Link>
        </div>
        <button type="submit" onClick={handleRegister} disabled={auth.loading}>
            {auth.loading ? 'Registering...' : 'SignUp'}
        </button>
    </div>
  )
}
