import React, { Component } from "react";

class Header extends Component {
  render() {
    //react router expects atmost 1 child, so need to wrap in div
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
