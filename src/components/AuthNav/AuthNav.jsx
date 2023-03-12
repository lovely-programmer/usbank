import BankLogo from "../../assets/bank-logo.svg";
import { Link } from "react-router-dom";
import "./AuthNav.css";

function AuthNav() {
  return (
    <div className="authNav">
      <div className="authNav__container container">
        <div className="authNav__logo">
          <Link to="/">
            <img src={BankLogo} alt="" />
          </Link>
        </div>
        <div className="auth__link">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default AuthNav;
