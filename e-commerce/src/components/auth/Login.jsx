import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import "../../style/login.css";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [identifiers, setIdentifiers] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    dispatch(signIn(identifiers));
  };

  useEffect(() => {
    // Redirect when auth.isLogged changes
    console.log("redirected");
    if (auth.isLogged) {
      navigate("/home"); // Redirect to the homepage
    } else if (auth.error !== "") {
      setError(auth.error);
    }
  }, [auth.isLogged, auth.role, auth.error, navigate]);

  return (
    <div className="login">
      <h1>welcome to GoCart</h1>
      <p>Enter your email address to log in or create a GoCArt account.</p>
      <div className="input-box">
        <input
          type="text"
          placeholder="Email"
          required
          value={identifiers.email}
          onChange={(e) =>
            setIdentifiers({ ...identifiers, email: e.target.value })
          }
        />
        <AiOutlineUser />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="password"
          required
          value={identifiers.password}
          onChange={(e) =>
            setIdentifiers({ ...identifiers, password: e.target.value })
          }
        />
        <AiOutlineLock />
      </div>
      <div className="forgotpass">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <Link to="/resetpass">Forgot password?</Link>
      </div>
      <button type="submit" onClick={handleLogin} disabled={auth.loading}>
        {auth.loading ? "Logging in..." : "Login"}
      </button>
      <div className="register-link">
        <span>Dont have an account?</span>
        <Link to="/register">Register</Link>
      </div>
      <div className="error">{error}</div>
    </div>
  );
}
