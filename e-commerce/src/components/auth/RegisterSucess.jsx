import { useNavigate } from "react-router-dom";
import "../../style/login.css";

export default function RegisterSucess() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <h1 style={{ paddingTop: "10px" }}>welcome to GoCart</h1>
      <h3 style={{ paddingTop: "10px" }}>congratulations!</h3>
      <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        Your account has been successfully created
      </p>
      <button onClick={handleNavigate}>Continue</button>
    </div>
  );
}
