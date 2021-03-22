import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CALCULATE_BMI } from "../store/actions/actionTypes";
import { saveNewBMI } from "../store/actions/saveNewBMI";

export const BMIForm = (props) => {

  const [state, setState] = useState({
    height: props.height,
    weight: props.weight
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: CALCULATE_BMI, payload: state })
  }

  const handleSaveButtonClick = () => {
    dispatch(saveNewBMI(state.weight, state.height))
  }

  return (
    <div>
      <form className="bmi-form" onSubmit={ handleSubmit }>
        <h3>Calculator</h3>
        <div className="bmi-form-control">
          <label>Height (in.)</label>
          <input type="text" name="height" 
            value={ state.height }
            onChange={ handleChange } />
        </div>
        <div className="bmi-form-control">
          <label>Weight (lbs.)</label>
          <input type="text" name="weight" 
            value={ state.weight } 
            onChange={ handleChange } />
        </div>
        <input type="submit" value="Calculate" />
        <button className="save-btn"
          onClick={ handleSaveButtonClick }>
            Save
        </button>
      </form>
    </div>
  )
}