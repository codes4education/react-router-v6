import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Return To Home</Link>
    </>
  );
}

export default PageNotFound;
