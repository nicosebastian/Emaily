//rendering layer control (React Router)

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions'

import 'materialize-css/dist/css/materialize.min.css'; //unessecery to assign to var

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const NewSurvey = () => <h2>NewSurvey</h2>;

class App extends Component {
  componentDidMount() {
    //sometimes componentWillMount is called several times, so convention is to put it here
    this.props.fetchUser();
  }

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

export default connect(null, actions)(App);
