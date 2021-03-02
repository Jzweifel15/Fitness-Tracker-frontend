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
        <Link to="https://github.com/"><i className="fab fa-github"></i></Link>
        <Link to="https://www.facebook.com/"><i className="fab fa-facebook"></i></Link>
        <Link to="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
        <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
        <div className="sign-out-link" onClick={ () => window.location.reload() }>Logout</div>
      </div>
    </nav>
  )
}