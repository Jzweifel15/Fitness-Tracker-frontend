import React from "react";
import { connect } from "react-redux";
import { removeMeal } from "../store/actions/removeMeal";
import { GET_SESSION } from "../store/session";

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
          <div className="delete-btn"
            onClick={ () => this.props.removeMeal({ 
              id: id, name: name, 
              numServings: numServings, calories: calories,
              user_id: parseInt(GET_SESSION()) }) }>
                Delete
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMeal: (meal) => dispatch(removeMeal(meal))
  }
}

export default connect(null, mapDispatchToProps)(Meal);