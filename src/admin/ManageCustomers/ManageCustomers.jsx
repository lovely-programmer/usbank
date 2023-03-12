import React from "react";
import { Link } from "react-router-dom";
import AdminWrapper from "../components/AdminWrapper";

function ManageCustomers() {
  return (
    <AdminWrapper>
      <div className="admin__content">
        <h1>Manage Customers</h1>

        <div>
          <table>
            <thead>
              <tr>
                <td className="right">id</td>
                <td className="right">Name</td>
                <td className="right">Account Balance</td>
                {/* <td className="right">Action</td> */}
                <td className="right">Delete</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="right">012838484884</td>
                <td className="right">James Morgan</td>
                <td className="right">1000.00</td>
                {/* <td className="right">
                  <Link to="/osas_admin/credituser">Credit account</Link>
                </td> */}
                <td className="right">
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminWrapper>
  );
}

export default ManageCustomers;
