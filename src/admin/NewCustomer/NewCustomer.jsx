import React from "react";
import AdminWrapper from "../components/AdminWrapper";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import { useState, useEffect } from "react";

function NewCustomer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    account_type: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    balance: "",
  });

  const {
    name,
    email,
    address,
    account_type,
    balance,
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

    if (isSuccess) {
      navigate("/osas_admin/managecustomers");
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
        balance,
      };
      dispatch(register(userData));
    }
  };

  return (
    <div>
      <AdminWrapper>
        <div className="admin__content">
          <h1>New Customer</h1>

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
                type="number"
                required
                id="balance"
                name="balance"
                value={balance}
                onChange={handleChange}
              />
              <label htmlFor="fullName">Account Balance</label>
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
      </AdminWrapper>
    </div>
  );
}

export default NewCustomer;
