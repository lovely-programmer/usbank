import "./Navbar.css";
import BankLogo from "../../assets/bank-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__first">
          <div className="container">
            <div className="navbar__left-section">
              <ul>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Financial education</a>
                </li>
              </ul>
            </div>
            <div className="navbar__right-section">
              <ul>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Locations</a>
                </li>
                <li className="navbar__search">
                  <AiOutlineSearch />
                  <input type="text" placeholder="Search" />
                </li>
                <li className="navbar__right-section__button">
                  <button>Log in</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar__second">
          <div className="container">
            <ul>
              <li>
                <a href="">
                  <img src={BankLogo} alt="" />
                </a>
              </li>
              <li>
                <a href="">Personal</a>
              </li>
              <li>
                <a href="">Wealth Management</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">Corporate & Commercial</a>
              </li>
              <li>
                <a href="">Institutional</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar__mobile">
          <div className="navbar__mobile-container container">
            <ul>
              <li>
                <MdOutlineMenu fontSize={32} />
              </li>
              <li>
                <a href="">
                  <img src={BankLogo} alt="" />
                </a>
              </li>
              <li>
                <span>Log in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
