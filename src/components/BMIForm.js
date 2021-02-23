import React from "react";
import "../styles/BMIForm.css";

export const BMIForm = (props) => {
  return (
    <div>
      <form className="bmi-form">
        <div className="bmi-form-control">
          <label>Height (in.)</label>
          <input type="text" name="height" value={ props.height } />
        </div>
        <div className="bmi-form-control">
          <label>Weight (lbs.)</label>
          <input type="text" name="height" value={ props.weight } />
        </div>
        <input type="submit" value="Calculate" />
      </form>
    </div>
  )
}