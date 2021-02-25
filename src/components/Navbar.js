import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/homepage"><h2>Fitness Tracker</h2></Link>
      </div>
      <div className="navbar-links">
        <Link to="/signup"><h4>Sign Up</h4></Link>
        <Link to="/signin"><h4>Sign In</h4></Link>
      </div>
    </nav>
  )
}