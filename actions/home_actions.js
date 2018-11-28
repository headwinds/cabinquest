import Promise from "bluebird";
import fetch from "isomorphic-fetch";

const LAST_ADDED = "LAST_ADDED";
const FOO = "FOO";
const STARWARS_REQUEST = "STARWARS_REQUEST";
const STARWARS_RECEIVED_SUCCESS = "STARWARS_RECEIVED_SUCCESS";

export function lastAdded(lastAdded) {
  return {
    type: LAST_ADDED,
    payload: {
      lastAdded,
    },
  };
}

function onStarwarsSuccess(items) {
  return {
    type: STARWARS_RECEIVED_SUCCESS,
    payload: {
      items,
    },
  };
}

function onStarwarsRequest() {
  return {
    type: STARWARS_REQUEST,
  };
}

export function fetchStarwars() {
  return (dispatch, getState) => {
    dispatch(onStarwarsRequest());

    return fetch("/api/user/starwars")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("home Bad response from server");
        }
        return response.json();
      })
      .then((json) => {
        console.log("home all good", items);
        dispatch(onStarwarsSuccess(items));
        // return {custom: 'custom', answer: "payload", items: json.items};
      });
  };
}

export function onGetHeaderRequest() {
  return {
    type: "APP_FETCH_HEADER_REQUESTED",
  };
}

export function onGetHeaderSuccess(header) {
  return {
    type: "APP_FETCH_HEADER_RECEIVED_SUCCESS",
    payload: {
      header,
    },
  };
}

export function fetchGetHeader() {
  return {
    type: "APP_FETCH_HEADER",
  };
}
