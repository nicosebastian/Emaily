import axios from "axios";
import { FETCH_USER } from "./types";

//action creator
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });//update user model
};

export const handleStripeToken = stripeToken => async dispatch => {
  const res = await axios.post("/api/stripe", stripeToken);
  dispatch({ type: FETCH_USER, payload: res.data });
};
