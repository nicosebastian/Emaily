import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import * as actions from "../actions"

class StripeWrapper extends Component {
  render() {
    return (
      <ReactStripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500} //in US cents
        token={token => this.props.handleStripeToken(token)} //callback when token is receaved from stripe server //think onToken go to action
        stripeKey={process.env.REACT_APP_STRIPE_PUBKEY}
      >
        <button className="btn">Add Credits</button>
      </ReactStripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
