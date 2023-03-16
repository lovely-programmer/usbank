import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createTransaction,
  updateBalance,
} from "../../features/auth/transactionSlice";
import { getMe, reset } from "../../features/auth/user";

function Transfer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { transferData } = useSelector((state) => state.transactionsInfo);

  const [amount, setAmount] = useState(transferData?.amount);
  const [remark, setRemark] = useState(transferData?.remark);
  const [accountNumber, setAccountNumber] = useState(
    transferData?.accountNumber
  );
  const [accountName, setAccountName] = useState(transferData?.accountName);
  const [bankName, setBankName] = useState(transferData?.bankName);
  const [routingTransit, setRouterTransit] = useState(
    transferData?.routingTransit
  );
  const [ifsc, setIfsc] = useState(transferData?.ifsc);
  const [accountType, setAccountType] = useState(transferData?.accountType);

  const { userInfo, isLoading, isError, message } = useSelector(
    (state) => state.userInfo
  );

  const transferDetails = {
    amount,
    remark,
    accountName,
    accountNumber,
    bankName,
    routingTransit,
    ifsc,
    accountType,
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getMe());

    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch]);

  const trans = {
    amount,
    remark,
    transaction_type: "Debit",
    name: userInfo?.name,
    date: new Date().toLocaleDateString("en-US"),
  };

  const userData = {
    amount,
    id: userInfo?._id,
  };

  const handleSubmit = (e) => {
    localStorage.setItem("transferData", JSON.stringify(transferDetails));
    e.preventDefault();
    if (userInfo?.tcc_code_need === true) {
      navigate("/request/tcc");
    } else if (userInfo?.imf_code_need === true) {
      navigate("/request/imf");
    } else if (userInfo?.tax_code_need === true) {
      navigate("/request/tax");
    } else {
      if (userInfo?.balance - userData?.amount < 0) {
        toast.error("Transaction Failed not enough funds");
      } else {
        dispatch(updateBalance(userData));
        dispatch(createTransaction(trans));
        toast.success("You have Successfully Deposited");
        setTimeout(() => {
          navigate("/transactions");
        }, 1000);
        localStorage.removeItem("transferData");
      }
    }
  };

  return (
    <div className="transfer">
      <div className="transfer__container">
        <h1>Funds Transfer</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              onChange={(e) => setAccountNumber(e.target.value)}
              required
              type="number"
              value={accountNumber}
            />
            <label>Account Number</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setAccountName(e.target.value)}
              required
              type="text"
              value={accountName}
            />
            <label>Account Name</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setBankName(e.target.value)}
              required
              type="text"
              value={bankName}
            />
            <label>Bank Name</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setRouterTransit(e.target.value)}
              required
              type="text"
              value={routingTransit}
            />
            <label>Routing Transit Number(RTN)/IBAN</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setIfsc(e.target.value)}
              required
              type="text"
              value={ifsc}
            />
            <label>IFSC/SWIFT CODE</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setAmount(e.target.value)}
              required
              type="number"
              value={amount}
            />
            <label>Amount</label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => setRemark(e.target.value)}
              required
              type="text"
              value={remark}
            />
            <label>Remarks</label>
          </div>
          <div className="form__group">
            <select
              onChange={(e) => setAccountType(e.target.value)}
              name=""
              id=""
            >
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
