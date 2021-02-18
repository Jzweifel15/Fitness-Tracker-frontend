import React from "react";
import { WorkoutTable } from "./WorkoutTable";
import { MealTable } from "./MealTable";
import { BMIContainer } from "./BMIContainer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Justin Zweifel",
      weight: 220,
      height: 74,
      gender: "Male",
      exercises: [
        {
          name: "Bench Press",
          numSets: 5,
          numReps: 10
        },
        {
          name: "Dumbell Flys",
          numSets: 5,
          numReps: 15
        }
      ],
      meals: [
        {
          name: "Chicken Alfredo",
          numServings: 2,
          calories: 450
        },
        {
          name: "Steak and Potatoes",
          numServings: 1,
          calories: 400
        }
      ]
    }
  }

  render() {
    return (
      <div className="homepage-container">
        <h1>Welcome Back To Your Homepage</h1>
        <div className="top-row">
          <div className="workout-tracker">
            <h3>Today's Workouts</h3>
            <WorkoutTable exercises={ this.state.exercises } />
          </div>
          <div className="meal-tracker">
            <h3>Today's Meals</h3>
            <MealTable meals={ this.state.meals } />
          </div>
        </div>
        <div className="bottom-row">
          <h3>Your Body Mass Index</h3>
          <div className="bmi-tracker">
            <BMIContainer height={ this.state.height } weight={ this.state.weight } />
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