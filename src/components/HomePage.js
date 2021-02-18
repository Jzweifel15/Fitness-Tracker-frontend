import React from "react";
import { WorkoutTable } from "./WorkoutTable";
import { MealTable } from "./MealTable";

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
        <h1>Your Homepage</h1>
        <div className="workout-tracker">
          <WorkoutTable exercises={ this.state.exercises } />
        </div>
        <div className="meal-tracker">
          <MealTable meals={ this.state.meals } />
        </div>
        <div className="bmi-tracker">
          {/* BMI Tracker Component will go here */}
        </div>
      </div>
    )
  }
}

export default HomePage;