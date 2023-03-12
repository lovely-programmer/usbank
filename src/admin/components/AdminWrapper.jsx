import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminWrapper({ children }) {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.isAdmin !== true) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="admin__dashboard">
        <SideNav />
        <div className="admin__children">{children}</div>
      </div>
    </div>
  );
}

export default AdminWrapper;
