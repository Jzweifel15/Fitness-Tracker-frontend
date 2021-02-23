import React from "react";
import { Meal } from "./Meal";
import { connect } from "react-redux";
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
              <Meal meal={ meal.name }
                numServings={ meal.numServings } 
                calories={ meal.calories } />
            )
          }
          <div className="btn">+ Add</div>
        </div>
      </div>
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
    removeMeal: () => dispatch({ type: "REMOVE_MEAL" })
  }
}

export default MealTable;
// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(MealTable);