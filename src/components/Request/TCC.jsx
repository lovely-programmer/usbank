import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createTransaction,
  updateBalance,
} from "../../features/auth/transactionSlice";
import { getMe, reset, updateTcc } from "../../features/auth/user";
import Spinner from "../spinner/Spinner";

function TCC() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tccCode, setTccCode] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { userInfo, isError, message } = useSelector((state) => state.userInfo);

  const { transferData } = useSelector((state) => state.transactionsInfo);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getMe());

    return () => {
      dispatch(reset());
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const trans = {
    amount: transferData?.amount,
    remark: transferData?.remark,
    transaction_type: "Debit",
    name: userInfo?.name,
  };

  const userId = {
    id: userInfo?._id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo?.tcc_code !== tccCode) {
      toast.error("Invalid TCC Code");
    } else if (
      userInfo?.tcc_code === tccCode &&
      userInfo?.imf_code_need === true
    ) {
      dispatch(updateTcc(userId));
      navigate("/request/imf");
    } else if (userInfo?.tcc_code === tccCode) {
      dispatch(updateTcc(userId));
      dispatch(updateBalance(transferData?.amount));
      // localStorage.removeItem("transferData");
      toast.success("You have Successfully Deposited");
      const timer = setTimeout(() => {
        navigate("/transactions");
      }, 1000);
      timer();
      clearTimeout(timer);
      dispatch(createTransaction(trans));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="code">
      <div className="code__container">
        <div className="code__header">
          <h2>TCC CODE REQUEST:</h2>
          <p>Input TCC code to Continue Transaction Process</p>
          <p>
            I don't have my TCC Code. Contact First Trust Customer Care via
            email: <Link to="/contact">customer_care@firstrustfinance.com</Link>
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
