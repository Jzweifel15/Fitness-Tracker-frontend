import React from "react";
import { BMIForm } from "./BMIForm";
import { calculateBMI } from "../helpers/calculateBMI";
import "../styles/BMICalculator.css";

export const BMICalculator = (props) => {
  return (
    <div className="calculator-container">
      <div>
        <BMIForm height={ props.height } weight={ props.weight } />
      </div>
      <div className="bmi">
        BMI = { calculateBMI(props.weight, props.height) }
      </div>
    </div>
  ) 
}
