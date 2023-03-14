import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import History from "./pages/History";
import AdminDashboard from "./admin/Dashboard/Dashboard";
import AdminLogin from "./admin/Login/AdminLogin";
import NewCustomer from "./admin/NewCustomer/NewCustomer";
import ManageCustomers from "./admin/ManageCustomers/ManageCustomers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import EditUser from "./admin/components/EditUser";
import Contact from "./pages/Contact";
import TransferManagent from "./admin/TransferMangement/TransferManagent";
import GenerateCode from "./admin/GenerateCode/GenerateCode";
import RequestTcc from "./pages/RequestTcc";
import RequestImf from "./pages/RequestImf";
import RequestTax from "./pages/RequestTax";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request/tcc" element={<RequestTcc />} />
        <Route path="/request/imf" element={<RequestImf />} />
        <Route path="/request/tax" element={<RequestTax />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/osas_admin" element={<AdminDashboard />} />
        <Route path="/osas_admin/login" element={<AdminLogin />} />
        <Route path="/osas_admin/newcustomer" element={<NewCustomer />} />
        <Route path="/osas_admin/edituser/:id" element={<EditUser />} />
        <Route path="/osas_admin/generate" element={<GenerateCode />} />
        <Route
          path="/osas_admin/transfer_management"
          element={<TransferManagent />}
        />
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
