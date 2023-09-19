import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <h2>Logo</h2>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/geturl">URL Params</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
