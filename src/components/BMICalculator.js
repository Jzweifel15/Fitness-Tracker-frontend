import React from "react";
import BMIForm from "./BMIForm";
import "../styles/BMICalculator.css";

export const BMICalculator = (props) => {
  return (
    <div className="calculator-container">
      <div>
        <BMIForm height={ props.height } weight={ props.weight } />
      </div>
      <div className="bmi">
        BMI = { Math.round((parseInt(props.weight) * 0.454) / ((parseInt(props.height) * 0.0254) ** 2)) }
      </div>
    </div>
  ) 
}
