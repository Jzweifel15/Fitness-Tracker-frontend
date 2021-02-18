import React from "react";
import WorkoutTable from "./WorkoutTable";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <h1>Your Homepage</h1>
        <div className="workout-tracker">
          <WorkoutTable />
        </div>
        <div className="meal-tracker">
          {/* Meal Tracker Component will go here */}
        </div>
        <div className="bmi-tracker">
          {/* BMI Tracker Component will go here */}
        </div>
      </div>
    )
  }
}

export default HomePage;