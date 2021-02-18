import React from "react";
import { Meal } from "./Meal";
import "../styles/MealTable.css";

export const MealTable = (props) => {
  return (
    <table className="meals-table">
      <thead>
        <tr>
          <td><strong>Meals</strong></td>
          <td><strong>Servings</strong></td>
          <td><strong>Calories</strong></td>
        </tr>
      </thead>
      <tbody>
        {
          props.meals.map(meal => 
            <Meal meal={ meal.name } numServings={ meal.numServings } calories={ meal.calories } />  
          )
        }
      </tbody>
      <tr>
        <td>
          <button className="btn">+ Add</button>
        </td>
      </tr>
    </table>
  )
}