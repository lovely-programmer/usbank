import "./TransactionHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction, reset } from "../../features/auth/transactionSlice";
import { useEffect } from "react";
import Spinner from "../spinner/Spinner";

function TransactionHistory() {
  const dispatch = useDispatch();

  const { transaction, isError, isLoading, message } = useSelector(
    (state) => state.transactionsInfo
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getTransaction());

    return () => {
      dispatch(reset());
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="transactionHistory admin__content">
      <div className="transactionHistory__container">
        <h1>Transactions History</h1>
        <div className="transactionHistory__table">
          <table>
            <thead>
              <tr>
                <td>Date</td>
                <td>Type</td>
                <td>Amount</td>
                <td>To/From</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {transaction.map((trans) => (
                <tr key={trans?._id}>
                  <td> {trans?.date} </td>
                  <td>{trans?.transaction_type}</td>
                  <td>{trans?.amount}</td>
                  <td>{trans?.name}</td>
                  <td>{trans?.remark}</td>
                </tr>
              ))}
              <tr>
                <td>12/15/2024</td>
                <td>Credit</td>
                <td>550000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
              <tr>
                <td>11/11/2024</td>
                <td>Credit</td>
                <td>100000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
              <tr>
                <td>10/11/2024</td>
                <td>Credit</td>
                <td>150000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
              <tr>
                <td>09/1/2024</td>
                <td>Credit</td>
                <td>700000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
              <tr>
                <td>08/13/2024</td>
                <td>Debit</td>
                <td>200000</td>
                <td>LAMBERTH</td>
                <td>Supplies</td>
              </tr>
              <tr>
                <td>07/15/2024</td>
                <td>Credit</td>
                <td>800000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
              <tr>
                <td>06/10/2024</td>
                <td>Debit</td>
                <td>200000</td>
                <td>LAMBERTH</td>
                <td>Supplies</td>
              </tr>
              <tr>
                <td>05/12/2024</td>
                <td>Debit</td>
                <td>150000</td>
                <td>RAMSAY HEALTH CARE UK</td>
                <td>Supplies</td>
              </tr>
              <tr>
                <td>04/17/2024</td>
                <td>Debit</td>
                <td>100000</td>
                <td>QUEENS VICTORIA HOSPITAL</td>
                <td>Medications</td>
              </tr>
              <tr>
                <td>03/20/2024</td>
                <td>Credit</td>
                <td>56000</td>
                <td>Antonio Gonzalo</td>
                <td>Credit</td>
              </tr>
              <tr>
                <td>01/25/2024</td>
                <td>Debit</td>
                <td>200000</td>
                <td>RAMSAY HEALTH CARE UK</td>
                <td>Transplant Surgery</td>
              </tr>
              <tr>
                <td>12/15/2023</td>
                <td>Credit</td>
                <td>170000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
