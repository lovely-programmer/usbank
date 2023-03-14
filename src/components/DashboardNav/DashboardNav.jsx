import BankLogo from "../../assets/bank-logo.svg";
import "./DashboardNav.css";
import { Link } from "react-router-dom";
import PersonIcon from "../../assets/person_icon.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";

function DashboardNav({ toggle, setToggle }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { userInfo } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="dashboardNav">
      <div className="dashboardNav__container container">
        <div className="authNav__logo">
          <Link to="/">
            <span className="first">Firs</span>
            <span className="bigT">T</span>
            <span className="trust">rust</span>
          </Link>
        </div>
        <div className="dashboardNav__content">
          <ul>
            <li>
              <Link to="/profile">
                <img src={PersonIcon} alt="" />
              </Link>
            </li>
          </ul>
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
              <li className="nav__logo">
                <Link to="/">
                  <span className="first">Firs</span>
                  <span className="bigT">T</span>
                  <span className="trust">rust</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={PersonIcon} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
