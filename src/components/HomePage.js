import React from "react";
import ExerciseTable from "./ExerciseTable";
import MealTable from "./MealTable";
import BMIContainer from "./BMIContainer";
import { connect } from "react-redux";
import { GET_SESSION } from "../store/session";
import "../styles/HomePage.css";

class HomePage extends React.Component {
  render() {

    console.log(GET_SESSION());

    return (
      <div className="homepage-container">
        <h1>Welcome Back, { this.props.user.name }</h1>
        <div className="top-row">
          <div className="workout-tracker">
            <h3>Today's Workouts</h3>
            <ExerciseTable exercises={ this.props.exercises.exercises } />
          </div>
          <div className="meal-tracker">
            <h3>Today's Meals</h3>
            <MealTable meals={ this.props.meals.meals } />
          </div>
        </div>
        <h3 className="bottom-row-label">Body Mass Index Calculator</h3>
        <div className="bottom-row">
          <div className="bmi-tracker">
            <BMIContainer height={ this.props.user.height } weight={ this.props.user.weight } />
          </div> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    exercises: state.exercises,
    meals: state.meals,
  }
}

export default connect(mapStateToProps)(HomePage);