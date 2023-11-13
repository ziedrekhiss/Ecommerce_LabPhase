import { Link } from "react-router-dom";
import{AiOutlineUser, AiOutlineLock, AiOutlineMail} from "react-icons/ai"
import "../../style/register.css"
export default function Register() {
  return (
    <div className="signup">
        <h1>Sign Up</h1>
        <div className="input-box">
            <input type="text" placeholder='username' required/>
            <AiOutlineUser/>
        </div>
        <div className="input-box">
            <input type="text" placeholder='Email' required/>
            <AiOutlineMail/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='password' required/>
            <AiOutlineLock/>
        </div>
        <div className="login-link">
            <p>Dont have an account?</p>
            <Link to="/login">login</Link>
        </div>
        <button type="submit">SignUp</button>
    </div>
  )
}
