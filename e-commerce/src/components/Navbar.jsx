import { useRef, useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import {
  BiCart,
  BiSearchAlt,
  BiLogInCircle,
  BiLogOutCircle,
  BiCartAlt,
} from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import "../style/main.css";
import "../style/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, checkAuthentication } from "../redux/actions/authActions";
export default function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogin = () => {
    isAuth ? navigate("/login") : null;
  };

  const handleLogout = () => {
    !isAuth ? dispatch(logoutUser()) : null;
    navigate("/login");
  };

  const checkAuth = useSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState(false);
  const userRole = useSelector((state) => state.auth.role);

  useEffect(() => {
    checkAuth.token && checkAuth.islogged ? setIsAuth(true) : null;
    dispatch(checkAuthentication());
  }, [checkAuth.token, checkAuth.islogged, dispatch]);

  const handleShowCart = () => {
    navigate("/myCart");
  };

  const handleDashboard = () => {
    navigate("/manageProducts");
  };

  return (
    <header>
      <div className="logo">
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <BiCart size={40} />
          <h3>GO CART</h3>
        </button>
      </div>
      <nav ref={navRef}>
        <ul>
          <li className="searchbar">
            <input type="text" placeholder="Search" />
            <button>
              <BiSearchAlt size={20} />
            </button>
          </li>
          <li>
            {userRole === "admin" ? (
              <>
                <button className="navlink" onClick={handleShowCart}>
                  <BiCartAlt size={30} />
                </button>
                <button className="navlink" onClick={handleDashboard}>
                  <RxDashboard size={30} />
                </button>
              </>
            ) : (
              <button className="navlink" onClick={handleShowCart}>
                <BiCartAlt size={30} />
              </button>
            )}
          </li>
          <li>
            {isAuth ? (
              <button className="navlink" onClick={handleLogin}>
                <BiLogInCircle size={30} />
              </button>
            ) : (
              <button className="navlink" onClick={handleLogout}>
                <BiLogOutCircle size={30} />
              </button>
            )}
          </li>
          <li>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <AiOutlineCloseCircle />
            </button>
          </li>
        </ul>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <AiOutlineMenu />
      </button>
    </header>
  );
}
