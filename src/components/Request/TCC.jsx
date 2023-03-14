import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getMe, reset, updateTcc } from "../../features/auth/user";

function TCC() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tccCode, setTccCode] = useState();

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
    if (userInfo?.tcc_code !== tccCode) {
      toast.error("Invalid TCC Code");
    } else if (
      userInfo?.tcc_code === tccCode &&
      userInfo?.imf_code_need === true
    ) {
      navigate("/request/imf");
    } else if (userInfo?.tcc_code === tccCode) {
      dispatch(updateTcc());
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
          <h2>TCC CODE REQUEST:</h2>
          <p>Input TCC code to Continue Transaction Process</p>
          <p>
            I don't have my TCC Code. Contact First Trust Customer Care via
            email: <Link>customer_care@firstrustfinance.com</Link>
          </p>
        </div>
        <div className="code__body">
          <h3>TCC Code</h3>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                onChange={(e) => setTccCode(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">Input TCC code</label>
            </div>
            <div className="form__group">
              <button style={{ backgroundColor: "#0a2d7e" }}>CONTINUE</button>
            </div>
          </form>

          <div className="form__group goBack">
            <Link to="/transfer">
              <button className="red_btn">GO BACK TO FUNDS TRASFER PAGE</button>
            </Link>
          </div>

          <p className="code__footer">
            TCC Request is in accordance to the Constitutional Laws of the
            United States governing the transfer of funds to or from a foreign
            account
          </p>
        </div>
      </div>
    </div>
  );
}

export default TCC;
