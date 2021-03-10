import React from "react"; 
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  return (
    <div className="btn-container">
      <Link to="/signin">
        <button className="logout-btn">Logout</button>
      </Link>
    </div>
  )
}