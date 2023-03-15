import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/photo">photo</Link>
        <Link to="/Perfect">Perfect</Link>
        
       
      </header>
    </div>
  );
}
export default Header;
