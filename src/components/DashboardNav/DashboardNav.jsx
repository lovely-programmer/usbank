import BankLogo from "../../assets/bank-logo.svg";
import "./DashboardNav.css";
import { Link } from "react-router-dom";
import PersonIcon from "../../assets/person_icon.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { upload } from "../../features/auth/upload";
import { updateProfilePicture } from "../../features/auth/user";

function DashboardNav({ toggle, setToggle }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleChange = async (e) => {
    setFile(e.target.files[0]);

    if (file) {
      const profilePicture = await upload(file);

      dispatch(updateProfilePicture(profilePicture));

      setFile(null);
    }
  };

  const { file, setFile } = useState(null);

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
              <div className="dashboard__profile">
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />

                <label htmlFor="file">
                  <img src={PersonIcon} style={{ cursor: "pointer" }} alt="" />
                </label>
              </div>
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
                <div className="dashboard__profile">
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />

                  <label htmlFor="file">
                    <img
                      src={PersonIcon}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
