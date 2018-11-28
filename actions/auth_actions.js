import Promise from "bluebird";
import fetch from "isomorphic-fetch";

const SIGNIN_REQUEST = "SIGNIN_REQUEST";
const SIGNIN_RECEIVED_SUCCESS = "SIGNIN_RECEIVED_SUCCESS";
const SIGNIN_RECEIVED_FAIL = "SIGNIN_RECEIVED_FAIL";

import { CABINQUEST_SET_USER } from "../constants";

export function setCabinQuestUser(cabinQuestUser) {
  return {
    type: CABINQUEST_SET_USER,
    payload: { cabinQuestUser },
  };
}

export function onSigninRequest() {
  return {
    type: SIGNIN_REQUEST,
  };
}

export function onSigninSuccess(profile) {
  return {
    type: SIGNIN_RECEIVED_SUCCESS,
    payload: {
      profile,
    },
  };
}

export function onSigninFail(error) {
  return {
    type: SIGNIN_RECEIVED_FAIL,
    payload: {
      error,
    },
  };
}

export function fetchSignin(provider) {
  return (dispatch, getState) => {
    dispatch(onSigninRequest());
    return fetch(`/auth/${provider}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("home Bad response from server");
          dispatch(onSigninFail(response));
        }
        return response.json();
      })
      .then(json => {
        console.log("home all good", items);
        dispatch(onSigninSuccess(items));
      })
      .catch(err => {
        console.log("fetchSignin failed: ", err);
      });
  };
}
