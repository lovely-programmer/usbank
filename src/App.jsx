import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import AdminDashboard from "./admin/Dashboard/Dashboard";
import AdminLogin from "./admin/Login/AdminLogin";
import NewCustomer from "./admin/NewCustomer/NewCustomer";
import ManageCustomers from "./admin/ManageCustomers/ManageCustomers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/osas_admin" element={<AdminDashboard />} />
        <Route path="/osas_admin/login" element={<AdminLogin />} />
        <Route path="/osas_admin/newcustomer" element={<NewCustomer />} />
        <Route
          path="/osas_admin/managecustomers"
          element={<ManageCustomers />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
