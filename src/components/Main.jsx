import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          border: "1px solid blue",
          padding: "7px",
          borderRadius: "5px",
        }}
      >
        <Link to="/dadjokes">Go to Dad Jokes</Link>
      </div>
      <div
        style={{
          border: "1px solid blue",
          padding: "7px",
          borderRadius: "5px",
        }}
      >
        <Link to="/form">Go to Form</Link>
      </div>
    </div>
  );
};

export default Main;
