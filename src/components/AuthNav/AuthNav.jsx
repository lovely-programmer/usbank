import BankLogo from "../../assets/bank-logo.svg";
import { Link, useLocation } from "react-router-dom";
import "./AuthNav.css";

function AuthNav() {
  const { pathname } = useLocation();

  return (
    <div className="authNav">
      <div className="authNav__container container">
        <div className="authNav__logo">
          <Link to="/">
            <span className="first">Firs</span>
            <span className="bigT">T</span>
            <span className="trust">rust</span>
          </Link>
        </div>
        <div className="auth__link">
          {pathname === "/signup" ? (
            <Link to="/signin">Login</Link>
          ) : (
            <Link to="/signup">Signup</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthNav;
