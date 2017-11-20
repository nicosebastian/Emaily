//rendering layer control (React Router)

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; //unessecery to assign to var

import Header from "./Header";

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const NewSurvey = () => <h2>NewSurvey</h2>;

class App extends Component {
  render() {
    //react router expects atmost 1 child, so need to wrap in div
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={NewSurvey} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
