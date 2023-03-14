import { Link } from "react-router-dom";
import "./SideNav.css";

function SideNav({ toggle }) {
  return (
    <div className={`sideNav ${toggle && "display"}`}>
      <div className="sideNav__container">
        <div className="sideNav__container-content">
          <h3>Admin Account</h3>
          <Link to="/osas_admin">Dashboard</Link>
        </div>
        <div className="sideNav__container-content">
          <h3>Customers</h3>
          <Link to="/osas_admin/newcustomer">New Customers</Link>
          <Link to="/osas_admin/managecustomers">Manage Customers</Link>
        </div>
        <div className="sideNav__container-content">
          <h3>Transactions Management</h3>
          <Link to="/osas_admin/transfer_management">Bank Transfer</Link>
          <Link to="/osas_admin/generate">Generate Code</Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
