import React from "react";
import BMIForm from "./BMIForm";
import "../styles/BMIContainer.css";

class BMIContainer extends React.Component {
  render() {
    return (
      <div className="bmi-container">
        <div>
          <BMIForm height={ this.props.height } weight={ this.props.weight } />
        </div>
        <div className="bmi">
          BMI = { Math.round((parseInt(this.props.weight) * 0.454) / ((parseInt(this.props.height) * 0.0254) ** 2)) }
        </div>
      </div>
    ) 
  }
}

export default BMIContainer;