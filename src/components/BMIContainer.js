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
        <div>BMI = ...</div>
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
    editBMI: () => dispatch({ type: "EDIT_BMI" })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BMIContainer);