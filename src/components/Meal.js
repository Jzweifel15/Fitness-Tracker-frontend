import React from "react";
import { connect } from "react-redux";
import { EDIT_MEAL, REMOVE_MEAL } from "../store/actions/actionTypes";

class Meal extends React.Component {

  render() {
    const id = this.props.id;
    const name = this.props.name;
    const numServings = this.props.numServings;
    const calories = this.props.calories;

    return (
      <div className="row">
        <div className="cell" data-title={ name }>
          { name }
        </div>
        <div className="cell" data-title={ numServings }>
          { numServings }
        </div>
        <div className="cell" data-title={ calories }>
          { calories }
        </div>
        <div className="cell">
          <div className="edit-btn">Edit</div>
        </div>
        <div className="cell">
          <div className="delete-btn"
            onClick={ () => this.props.removeMeal({ id: id, name: name, numServings: numServings, calories: calories }) }>
              Delete
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editMeal: (meal) => dispatch({ type: EDIT_MEAL, payload: meal }),
    removeMeal: (meal) => dispatch({ type: REMOVE_MEAL, payload: meal })
  }
}

export default connect(null, mapDispatchToProps)(Meal);