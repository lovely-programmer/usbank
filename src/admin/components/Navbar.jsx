import React from "react";
import BankLogo from "../../assets/bank-logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="authNav">
      <div className="authNav__container container">
        <div className="authNav__logo">
          <Link to="/osas_admin">
            <img src={BankLogo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
