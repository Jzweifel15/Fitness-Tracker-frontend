import React from "react";
import WorkoutTable from "./WorkoutTable";
import MealTable from "./MealTable";
import BMIContainer from "./BMIContainer";
import { data } from "../store/data";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <h1>Welcome Back To Your Homepage</h1>
        <div className="top-row">
          <div className="workout-tracker">
            <h3>Today's Workouts</h3>
            <WorkoutTable exercises={ data.exercises } />
          </div>
          <div className="meal-tracker">
            <h3>Today's Meals</h3>
            <MealTable meals={ data.meals } />
          </div>
        </div>
        <div className="bottom-row">
          <h3>Your Body Mass Index</h3>
          <div className="bmi-tracker">
            <BMIContainer height={ data.height } weight={ data.weight } />
          </div> 
          <div className="bmi-graph">
            {/* BMI Line Graph Component */}
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;