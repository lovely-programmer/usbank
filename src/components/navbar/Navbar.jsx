import "./Navbar.css";
import BankLogo from "../../assets/bank-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMenu, MdOutlineGroups } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";

function Navbar({ toggle, setToggle }) {
  const [showlogin, setShowLogin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

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
                  {showlogin ? (
                    <button
                      className="second__btn"
                      onClick={() => setShowLogin(false)}
                    >
                      <AiOutlineRight />
                    </button>
                  ) : (
                    <button onClick={() => setShowLogin(true)}>Log in</button>
                  )}
                </li>
              </ul>

              {showlogin && (
                <div className="login">
                  <div className="login__container">
                    <h2>Account login</h2>
                    <form onSubmit={handleSubmit} className="login__acount">
                      <p>Account type</p>
                      <select name="" id="">
                        <option value="">Online Banking</option>
                        <option value="">Online Investing</option>
                        <option value="">Business Banking</option>
                        <option value="">Corporate & Commercial</option>
                        <option value="">Institutional</option>
                      </select>
                      <div className="login__input">
                        <input
                          type="email"
                          required
                          id="email"
                          name="email"
                          value={email}
                          placeholder="Email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="check__username">
                        <input type="checkbox" />
                        <span>Remember my username.</span>
                      </div>
                      <div className="login__input">
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                          value={password}
                          name="password"
                          required
                        />
                      </div>
                      <div className="login__button">
                        <button>Log in</button>
                      </div>
                      <div className="login__help">
                        <a href="">
                          Get login help <AiOutlineRight />
                        </a>
                      </div>
                      <div className="login__create-account">
                        <Link to="/signup">Create a username and password</Link>
                      </div>
                    </form>
                  </div>
                </div>
              )}
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

        {toggle && (
          <div className="navbar__menu">
            <div className="navbar__menu-list">
              <ul className="navbar__menu-ul">
                <li className="navbar__search">
                  <AiOutlineSearch />
                  <input type="text" placeholder="Search" />
                </li>
                <li>
                  <a href="">
                    <IoLocationOutline />
                    Locations
                  </a>
                </li>
                <li>
                  <a href="">
                    <BiSupport />
                    Support
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="-9.5 0 67 67"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>Money-bag-dollar</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          {" "}
                          <g
                            id="Money-bag-dollar"
                            sketch:type="MSLayerGroup"
                            transform="translate(1.000000, 3.000000)"
                            stroke="#000000"
                            stroke-width="2"
                          >
                            {" "}
                            <path
                              d="M14.2,2.5 C14.2,2.5 24.4,-4.4 26.1,5.9"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M25.2,3.1 C25.2,3.1 27.2,-0.3 36,0.1 C36,2.9 33.4,10 29.5,11.3 C39,16.9 46,33.5 46,43.5 C46,55.6 35.7,62.1 23,62.1 C10.3,62.1 0,55.6 0,43.5 C0,33.6 6.9,16.9 16.5,11.3 C12.6,10 10,2.9 10,0.1 C10,0.1 14.4,4 20,4"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M15.8,11 L31.1,11"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M31.1,12.3 C31.1,12.3 42.3,12 42.3,18.3"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M31.3,10.4 C31.3,10.4 40.1,10.9 45.2,7.6"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M19,44.2 C19,46.8 21.2,48.8 24,48.8 C26.7,48.8 29,46.7 29,44.2 C29,40.4 24,38.7 24,38.7 C24,38.7 19,36.8 19,33.2 C19,30.6 21.2,28.6 24,28.6 C26.7,28.6 29,30.7 29,33.2"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M24.1,23.5 L24.1,53.9"
                              id="Shape"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    Financial Education
                  </a>
                </li>
                <li>
                  <a href="">
                    <MdOutlineGroups />
                    About us
                  </a>
                </li>
              </ul>

              <ul className="navbar__menu-main__ul">
                <li>
                  <div>
                    <span>Personal</span>
                    <AiOutlineRight />
                  </div>
                </li>
                <li>
                  <div>
                    <span>Wealth Management</span>
                    <AiOutlineRight />
                  </div>
                </li>
                <li>
                  <div>
                    <span>Business</span>
                    <AiOutlineRight />
                  </div>
                </li>
                <li>
                  <div>
                    <span>Corporate & Commercial</span>
                    <AiOutlineRight />
                  </div>
                </li>
                <li>
                  <div>
                    <span>Institutional </span>
                    <AiOutlineRight />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
