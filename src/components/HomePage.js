import React from "react";
import ExerciseTable from "./ExerciseTable";
import MealTable from "./MealTable";
import BMIContainer from "./BMIContainer";
import { connect } from "react-redux";
import { GET_SESSION } from "../store/session";
import "../styles/HomePage.css";

class HomePage extends React.Component {
  render() {

    console.log(GET_SESSION());

    return (
      <div className="homepage-container">
        <h1>Welcome Back, { this.props.user.name }</h1>
        <div className="top-row">
          <div className="workout-tracker">
            <h3>Today's Workouts</h3>
            <ExerciseTable exercises={ this.props.exercises.exercises } />
          </div>
          <div className="meal-tracker">
            <h3>Today's Meals</h3>
            <MealTable meals={ this.props.meals.meals } />
          </div>
        </div>
        <h3 className="bottom-row-label">Body Mass Index Tracker</h3>
        <div className="bottom-row">
          <div className="bmi-tracker">
            <BMIContainer height={ this.props.user.height } weight={ this.props.user.weight } />
          </div>
          <div className="bmi-graph">
            { /* This is where the line-graph component will be placed */ }
            <img src="https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585087896250-R3GZ6OFWYQRZUJRCJU3D/ke17ZwdGBToddI8pDm48kGWofyRxfSJ9uscCn11zkbYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKct6JBMPHLafCAclEKcWHYDNY2rZovXxL9ZlIF7nd_MJE2NdXUI24p4bxl0V65eVL_/produce_monthly.png"
              alt="line-graph example" />
          </div> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    exercises: state.exercises,
    meals: state.meals,
  }
}

export default connect(mapStateToProps)(HomePage);