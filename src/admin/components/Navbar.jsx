import BankLogo from "../../assets/bank-logo.svg";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";

function Navbar({ toggle, setToggle }) {
  return (
    <div className="authNav">
      <div className="authNav__content">
        <div className="authNav__container container">
          <div className="authNav__logo">
            <Link to="/osas_admin">
              <img src={BankLogo} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar__mobile">
        <div className="navbar__mobile-content">
          <div className="navbar__mobile-container container">
            <ul>
              <li>
                {toggle ? (
                  <HiX onClick={() => setToggle(false)} />
                ) : (
                  <MdOutlineMenu onClick={() => setToggle(true)} />
                )}
              </li>
              <li>
                <Link to="/osas_admin">
                  <img src={BankLogo} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
