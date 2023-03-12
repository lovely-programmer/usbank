import { Link } from "react-router-dom";
import "./SideNav.css";

function SideNav() {
  return (
    <div className="sideNav">
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
          <Link to="">Bank Transfer</Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
