import React, { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import { HamburgerIcon } from "./HamburgerIcon";
import { SET_SESSION } from "../store/session";
import "../styles/LogoutContainer.css";

export const LogoutContainer = () => {

  const [state, setState] = useState({
    showHamburgerIcon: true,
    showLogoutBtn: false
  })

  const handleClick = () => {
    setState({ 
      showHamburgerIcon: !state.showHamburgerIcon,
      showLogoutBtn: !state.showLogoutBtn
    })
  }

  const handleLogoutClick = () => {
    SET_SESSION(0);
    window.location.reload();
  }

    return (
      <div className="hamburger-icon-container" onClick={ handleClick }>
        <div>{ state.showHamburgerIcon && <HamburgerIcon /> }</div>
        <div onClick={ handleLogoutClick }>{ state.showLogoutBtn && <LogoutButton /> }</div>
      </div>
    )
}

export default LogoutContainer;