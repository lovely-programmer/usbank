import { useEffect, useState } from "react";
import "./AuthDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../spinner/Spinner";

function AuthDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    account_type: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const {
    name,
    email,
    address,
    account_type,
    phoneNumber,
    password,
    confirmPassword,
  } = formData;

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

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        address,
        phoneNumber,
        account_type,
      };
      dispatch(register(userData));
    }
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
        <form onSubmit={handleSubmit} className="authDetails__form">
          <div className="form__group">
            <input
              required
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="form__group">
            <input
              type="email"
              required
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Email Address</label>
          </div>
          <div className="form__group">
            <input
              type="text"
              required
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Address</label>
          </div>
          <div className="form__group">
            <input
              type="text"
              required
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Phone Number</label>
          </div>
          <div className="form__group">
            <select
              onChange={handleChange}
              value={account_type}
              name="account_type"
              id=""
            >
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
          </div>
          <div className="form__group">
            <input
              type="password"
              required
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Password</label>
          </div>
          <div className="form__group">
            <input
              type="password"
              required
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Confirm Password</label>
          </div>

          <div className="form__group">
            <button>Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthDetails;
