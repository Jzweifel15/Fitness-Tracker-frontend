import React from "react";
import { Link } from "react-router-dom";
import LogoutContainer from "./LogoutContainer";
import "../styles/Navbar.css";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>Fitness Tracker</h2>
        </div>
        <div className="navbar-links">
          <Link to="https://github.com/"><i className="fab fa-github"></i></Link>
          <Link to="https://www.facebook.com/"><i className="fab fa-facebook"></i></Link>
          <Link to="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
          <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
          <LogoutContainer />
        </div>
      </nav>
    )
  }
}

export default Navbar;