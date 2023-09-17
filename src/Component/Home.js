import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // Example 1
  const navigate = useNavigate();

  // Example 2
  const handleDynamicNavigation = (targetRoute) => {
    navigate(targetRoute);
    console.log(targetRoute);
  };

  // Example 3
  const handleConditionalNavigation = (shouldNavigate) => {
    if (shouldNavigate) {
      navigate("/about");
    } else {
      navigate("/service");
    }
  };

  return (
    <>
      <h1>Hello Home Page!</h1>

      {/* Example 1 */}
      {/* <button onClick={() => navigate("/about")}>Go To About Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/service")}>Go To Service Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/geturl")}>Go To URL Params Page</button> */}

      {/* Example 2 */}
      {/* <button onClick={() => handleDynamicNavigation("/about")}>
        Go To About Page
      </button>
      <br />
      <br />
      <button onClick={() => handleDynamicNavigation("/service")}>
        Go To Service Page
      </button>
      <br />
      <br />
      <button onClick={() => handleDynamicNavigation("/geturl")}>
        Go To URL Params Page
      </button> */}

      {/* Example 3 */}
      <button onClick={() => handleConditionalNavigation(true)}>
        Go To About Page
      </button>
      <br />
      <br />
      <button onClick={() => handleConditionalNavigation(false)}>
        Go To Service Page
      </button>
    </>
  );
}

export default Home;
