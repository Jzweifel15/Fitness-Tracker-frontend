import React from "react";
import { LogoutButton } from "./LogoutButton";
import "../styles/LogoutContainer.css";

class LogoutContainer extends React.Component {

  handleClick = () => {
    <LogoutButton />
  }

  render() {
    return (
      <div className="hamburger-icon-container" onClick={ this.handleClick }>
        <div className="icon-top"></div>
        <div className="icon-middle"></div>
        <div className="icon-bottom"></div> 
      </div>
    )
  }
}

export default LogoutContainer;