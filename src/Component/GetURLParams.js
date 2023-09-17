import React from "react";
import { useSearchParams } from "react-router-dom";

function GetURLParams() {
  // Example 1
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("name"));
  // console.log(searchParams.get("city"));
  // console.log(searchParams.get("country"));

  const name = searchParams.get("name");
  const city = searchParams.get("city");
  const country = searchParams.get("country");

  return (
    <>
      <h1>Get URL Params</h1>
      <h3>Name is: {name}</h3>
      <h3>City: {city}</h3>
      <h3>Country: {country}</h3>

      <button
        onClick={() =>
          setSearchParams({
            name: "Bhaskar Gupta",
            city: "New Delhi",
            country: "India",
          })
        }
      >
        Update URL Param Value
      </button>

      <input
        type="text"
        onChange={(e) =>
          setSearchParams({
            job: e.target.value,
            name: "Bhaskar Gupta",
            city: "New Delhi",
            country: "India",
          })
        }
        placeholder="Set More URL Param Value"
      />
    </>
  );
}

export default GetURLParams;
