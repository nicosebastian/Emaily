import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";

class StripeWrapper extends Component {
  render() {
    return (
      <ReactStripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500} //in US cents
        token={token => console.log(token)} //callback when token is receaved from stripe server //think onToken
        stripeKey={process.env.REACT_APP_STRIPE_PUBKEY}
      >
        <button className="btn">Add Credits</button>
      </ReactStripeCheckout>
    );
  }
}

export default StripeWrapper;
