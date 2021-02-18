import React from "react";
import { Meal } from "./Meal";
import "../styles/MealTable.css";

class MealTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            this.state.meals.map(meal => 
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
}

export default MealTable;