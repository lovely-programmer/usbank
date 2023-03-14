import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTransaction } from "../../features/auth/transactionSlice";
import { getMe, reset } from "../../features/auth/user";

function Transfer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [remark, setRemark] = useState();

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

  const trans = {
    amount,
    remark,
    transaction_type: "Debit",
  };

  const handleSubmit = (e) => {
    localStorage.setItem("transfer", JSON.stringify(trans));
    e.preventDefault();
    if (userInfo?.tcc_code_need === true) {
      navigate("/request/tcc");
    } else if (userInfo?.imf_code_need === true) {
      navigate("/request/imf");
    } else if (userInfo?.tax_code_need === true) {
      navigate("/request/tax");
    } else {
      // toast.success("You have Successfully Deposited");
      navigate("/transactions");
      dispatch(createTransaction(trans));
    }
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div className="transfer">
      <div className="transfer__container">
        <h1>Funds Transfer</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <input required type="number" />
            <label>Account Number</label>
          </div>
          <div className="form__group">
            <input required type="text" />
            <label>Account Name</label>
          </div>
          <div className="form__group">
            <input required type="text" />
            <label>Bank Name</label>
          </div>
          <div className="form__group">
            <input required type="text" />
            <label>Routing Transit Number(RTN)/IBAN</label>
          </div>
          <div className="form__group">
            <input required type="text" />
            <label>IFSC/SWIFT CODE</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setAmount(e.target.value)}
              required
              type="number"
            />
            <label>Amount</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setRemark(e.target.value)}
              required
              type="text"
            />
            <label>Remarks</label>
          </div>
          <div className="form__group">
            {/* <input required type="text" />
            <label>Account Type</label> */}
            <select name="" id="">
              <option value="">Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
            </select>
          </div>
          <div className="form__group">
            <button>Verify & Transfer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
