import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  //helper meathod to choose if login nav should be shown
  renderContent() {
    switch (this.props.auth) {
      case null:
        //waiting for request to be resolved
        return;

      case false:
        //logged out
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        //logged in
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
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
