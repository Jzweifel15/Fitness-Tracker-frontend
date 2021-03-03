import React from "react";
import { LogoutButton } from "./LogoutButton";
import { HamburgerIcon } from "./HamburgerIcon";
import { SET_SESSION } from "../store/session";
import "../styles/LogoutContainer.css";

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHamburgerIcon: true,
      showLogoutBtn: false
    }
  }

  handleClick = () => {
    this.setState({ 
      showHamburgerIcon: !this.state.showHamburgerIcon,
      showLogoutBtn: !this.state.showLogoutBtn
    })
  }

  handleLogoutClick = () => {
    SET_SESSION(0);
    window.location.reload();
  }

  render() {
    return (
      <div className="hamburger-icon-container" onClick={ this.handleClick }>
        <div>{ this.state.showHamburgerIcon && <HamburgerIcon /> }</div>
        <div onClick={ this.handleLogoutClick }>{ this.state.showLogoutBtn && <LogoutButton /> }</div>
      </div>
    )
  }
}

export default LogoutContainer;