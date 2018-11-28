import { createReducer } from "../utils/reducer_utils";
import { CABINQUEST_SET_USER } from "../constants";

const initialState = {
  cabinQuestUser: null,
};

export default createReducer(initialState, {
  [CABINQUEST_SET_USER]: (state, payload) =>
    Object.assign({}, state, {
      cabinQuestUser: payload.cabinQuestUser,
    }),
});
