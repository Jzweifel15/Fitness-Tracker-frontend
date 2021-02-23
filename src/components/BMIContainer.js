import React from "react";
import { BMIForm } from "./BMIForm";
import { connect } from "react-redux";
import "../styles/BMIContainer.css";

class BMIContainer extends React.Component {
  render() {
    return (
      <div className="bmi-container">
        <div>
          <BMIForm height={ this.props.height } weight={ this.props.weight } />
        </div>
        <div>BMI = { Math.round((this.props.weight * 0.454) / ((this.props.height * 0.0254) ** 2)) }</div>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    weight: state.weight,
    height: state.height
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBMI: (weight, height) => dispatch({ type: "EDIT_BMI" })
  }
}

export default BMIContainer;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BMIContainer);