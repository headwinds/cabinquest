/* eslint-disable */
import { combineReducers } from "redux";
import home from "./home_reducer";
import feed_cabinquest from "./feed_cabinquest_reducer";
import auth from "./cabinquest_auth_reducer";

export default combineReducers({
  home,
  feed_cabinquest,
  auth,
});
