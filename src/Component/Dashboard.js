import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Welcome To Dashboard Page</h1>

      {/* Links Page */}
      <Link to="profile">Profile Page</Link>
      <br />
      <br />
      <Link to="setting">Setting Page</Link>

      <Outlet />
    </>
  );
}

export default Dashboard;
