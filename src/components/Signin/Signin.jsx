import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../spinner/Spinner";
import { AiOutlineRight } from "react-icons/ai";

function SignIn() {
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
    <div className="authDetails">
      <div className="authDetails__container">
        <div className="authDetails__content">
          <h2>Let's get started.</h2>
          <h3>Online and mobile banking enrollment</h3>
          <p>
            We strongly suggest that you enroll with us using your correct
            information to prevent future problems in your account.
          </p>
        </div>
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
  );
}

export default SignIn;
