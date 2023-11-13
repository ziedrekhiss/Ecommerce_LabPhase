import { Link } from "react-router-dom";
import{AiOutlineUser, AiOutlineLock} from "react-icons/ai"
import "../../style/login.css"
export default function Login() {
  return (
    <div className="login">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='username' required/>
            <AiOutlineUser/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='password' required/>
            <AiOutlineLock/>
        </div>
        <div className="forgotpass">
            <label>
                <input type="checkbox"/>Remember me
            </label>
                <Link to ="/resetpass">Forgot password?</Link>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
            <p>Dont have an account?</p>
            <Link to="/register">Register</Link>
        </div>
    </div>
  )
}
