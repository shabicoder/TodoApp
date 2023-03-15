import React from "react";
import "./Perfect.css";
import { Link } from "react-router-dom";

function Perfect() {
  return (
    <>
      {" "}
      <div className="Perfect">
        <h1 className="Ph1">wow! super man you are great practice once more</h1>
        <button className="btn">
          <Link to="/Final">submit</Link>
        </button>
      </div>
    </>
  );
}
export default Perfect;
