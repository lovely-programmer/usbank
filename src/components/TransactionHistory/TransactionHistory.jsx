import "./TransactionHistory.css";

function TransactionHistory() {
  return (
    <div className="transactionHistory admin__content">
      <div className="transactionHistory__container">
        <h1>Transactions History</h1>
        <div className="transactionHistory__table">
          <table>
            <thead>
              <tr>
                <td>Date(mm-dd-yyyy)</td>
                <td>Type</td>
                <td>Amount</td>
                <td>To/From</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 12-03-2022</td>
                <td>Credit</td>
                <td>800000</td>
                <td>Management</td>
                <td>Chemical Purchase</td>
              </tr>
              <tr>
                <td> 7-02-2022</td>
                <td>Debit</td>
                <td>200000</td>
                <td>LAMBERTH</td>
                <td>Supplies</td>
              </tr>
              <tr>
                <td>06-05-2022</td>
                <td>Debit</td>
                <td>150000</td>
                <td>RAMSAY HEALTH CARE UK</td>
                <td>Supplies</td>
              </tr>
              <tr>
                <td>07-10-2021</td>
                <td>Debit</td>
                <td>100000</td>
                <td>QUEENS VICTORIA HOSPITAL</td>
                <td>Medications</td>
              </tr>
              <tr>
                <td>06-20-2021</td>
                <td>Credit</td>
                <td>56000</td>
                <td>Antonio Gonzalo</td>
                <td>Credit</td>
              </tr>
              <tr>
                <td>06-05-2021</td>
                <td>Debit</td>
                <td>200000</td>
                <td>RAMSAY HEALTH CARE UK</td>
                <td>Transplant Surgery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
