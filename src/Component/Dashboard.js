import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  // Example 1
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Welcome To Dashboard Page</h1>

      {/* Links Page */}
      <Link
        to="profile"
        state={{ name: "code4education", owner: "Bhaskar Gupta" }}
      >
        Profile Page
      </Link>
      <br />
      <br />
      <Link to="setting">Setting Page</Link>

      <Outlet />
    </>
  );
}

export default Dashboard;
