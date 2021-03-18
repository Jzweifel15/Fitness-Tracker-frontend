import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";
import HomePage from "./components/HomePage";
import ExerciseForm from "./components/ExerciseForm";
import MealForm from "./components/MealForm";
import "./App.css"

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/signin" component={ SignInForm } />
            <Route path="/signup" component={ SignUpForm } />
            <Route path="/homepage" component={ HomePage } />
            <Route path="/new/exercise" exact={ true } component={ ExerciseForm } />
            <Route path="/new/meal" exact={ true } component={ MealForm } />
            <Redirect from="/new/exericse" to="/homepage" />
            <Redirect from="/new/meal" to="/homepage" />
            <Redirect from="/" to="/signin" />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;