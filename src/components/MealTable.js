import React from "react";
import { Meal } from "./Meal";
import { connect } from "react-redux";
import "../styles/MealTable.css";

class MealTable extends React.Component {
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
            this.props.meals.map(meal => 
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

const mapStateToProps = (state) => {
  return {
    ...state,
    meals: [...state.meals]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMeal: () => dispatch({ type: "ADD_MEAL" }),
    editMeal: () => dispatch({ type: "EDIT_MEAL" }),
    deleteMeal: () => dispatch({ type: "DELETE_MEAL" })
  }
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(MealTable);