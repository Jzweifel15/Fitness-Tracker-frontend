import React from "react";
import { ExerciseTable } from "./ExerciseTable";
import { MealTable } from "./MealTable";
import { BMICalculator } from "./BMICalculator";
import { LineChartContainer } from "./LineChartContainer";
import { useSelector } from "react-redux";
import "../styles/HomePage.css";

export const HomePage = () => {

  const user = useSelector(state => state.user);
  const exercises = useSelector(state => state.exercises);
  const meals = useSelector(state => state.meals);

  return (
    <div className="homepage-container">
      <h1>Welcome Back, { user.name }</h1>
      <div className="top-row">
        <div className="workout-tracker">
          <h3>Today's Workouts</h3>
          <ExerciseTable exercises={ exercises.exercises } />
        </div>
        <div className="meal-tracker">
          <h3>Today's Meals</h3>
          <MealTable meals={ meals.meals } />
        </div>
      </div>
      <h3 className="bottom-row-label">Body Mass Index Tracker</h3>
      <div className="bottom-row">
        <div className="bmi-calculator">
          <BMICalculator height={ user.height } weight={ user.weight } />
        </div>
        <div className="bmi-chart">
          <LineChartContainer bmis={ user.bmis } />
        </div> 
      </div>
    </div>
  );

}