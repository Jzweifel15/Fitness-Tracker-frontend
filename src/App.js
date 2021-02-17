import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./components/HomePage";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/signup" component={ SignUpForm } />
            <Route path="/signin" component={ SignInForm } />
            <Route path="/" component={ HomePage } />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;