import React from "react";
import { ExerciseTable } from "./ExerciseTable";
import { MealTable } from "./MealTable";
import { BMICalculator } from "./BMICalculator";
import { LineChartContainer } from "./LineChartContainer";
import { connect } from "react-redux";
import "../styles/HomePage.css";

class HomePage extends React.Component {
  render() {
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
        <h3 className="bottom-row-label">Body Mass Index Tracker</h3>
        <div className="bottom-row">
          <div className="bmi-calculator">
            <BMICalculator height={ this.props.user.height } weight={ this.props.user.weight } />
          </div>
          <div className="bmi-chart">
            <LineChartContainer bmis={ this.props.user.bmis } />
          </div> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises,
    meals: state.meals,
    user: state.user
  }
}

export default connect(mapStateToProps)(HomePage);