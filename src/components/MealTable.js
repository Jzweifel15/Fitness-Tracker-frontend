import React from "react";
import Meal from "./Meal";
import { Link } from "react-router-dom";
import "../styles/MealTable.css";

class MealTable extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="table">
          <div className="row-header">
            <div className="cell">
              Meals
            </div>
            <div className="cell">
              Servings
            </div>
            <div className="cell">
              Calories
            </div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          {
            this.props.meals.map(meal => 
              <Meal key={ meal.id } id={ meal.id }
                name={ meal.name }
                numServings={ meal.numServings } 
                calories={ meal.calories } />
            )
          }
          <div className="btn">
            <Link to="/new/meal">+ Add</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MealTable;