import React, { Component } from "react";
import { connect } from "react-redux";

import StripeWrapper from "./StripeWrapper";

class Header extends Component {

  //helper meathod to choose if login nav should be shown
  renderContent() {
    switch (this.props.auth) {
      //waiting for request to be resolved
      case null:
        return;

      //logged out
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      //logged in
      default:
        return ([
          <li><StripeWrapper /></li>,
          <li><a href="/api/logout">Logout</a></li>
        ]);
    }
  }

  render() {
    //react router expects atmost 1 child, so need to wrap in div
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
