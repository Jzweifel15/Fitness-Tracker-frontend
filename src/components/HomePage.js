import React from "react";
import ExerciseTable from "./ExerciseTable";
import MealTable from "./MealTable";
import BMICalculator from "./BMICalculator";
import LineChartContainer from "./LineChartContainer";
import { connect } from "react-redux";
import { GET_SESSION } from "../store/session";
import "../styles/HomePage.css";

class HomePage extends React.Component {
  render() {

    console.log(GET_SESSION());

    const datesData = ["Aug 01", "Sept 01", "Oct 01", "Nov 01", "Dec 01"];
    const bmiData = [28, 29, 27, 26, 26];

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
            <LineChartContainer datesData={ datesData } bmiData={ bmiData } />
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