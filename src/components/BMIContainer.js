import React from "react";
import { BMIForm } from "./BMIForm";
import "../styles/BMIContainer.css";

export const BMIContainer = (props) => {
  return (
    <div className="bmi-container">
      <div>
        <BMIForm height={ props.height } weight={ props.weight } />
      </div>
      <div>BMI = ...</div>
    </div>
  )
}