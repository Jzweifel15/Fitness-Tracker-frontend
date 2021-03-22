import React from "react";
import LogoutContainer from "./LogoutContainer";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Fitness Tracker</h2>
      </div>
      <div className="navbar-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <LogoutContainer />
      </div>
    </nav>
  )
}